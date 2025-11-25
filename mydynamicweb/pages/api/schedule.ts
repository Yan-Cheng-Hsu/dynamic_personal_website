import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

interface ScheduleRequest {
  email: string
  company: string
  role: string
  message?: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { email, company, role, message } = req.body as ScheduleRequest

    // Validate required fields
    if (!email || !company || !role) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Resend's test email
      to: 'bill.ych.jobs@gmail.com',
      subject: `🚀 New Schedule Request from ${company}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #0070f3, #00c853);
              color: white;
              padding: 30px 20px;
              border-radius: 12px 12px 0 0;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 600;
            }
            .header p {
              margin: 10px 0 0 0;
              opacity: 0.9;
              font-size: 16px;
            }
            .content {
              background: #f9f9f9;
              padding: 30px 20px;
              border-radius: 0 0 12px 12px;
            }
            .field {
              margin-bottom: 20px;
              background: white;
              padding: 15px;
              border-radius: 8px;
              border-left: 4px solid #0070f3;
            }
            .label {
              font-weight: 600;
              color: #0070f3;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 8px;
            }
            .value {
              color: #333;
              font-size: 16px;
              word-break: break-word;
            }
            .cta-container {
              margin-top: 30px;
              text-align: center;
            }
            .cta-button {
              display: inline-block;
              padding: 14px 28px;
              background: #0070f3;
              color: white;
              text-decoration: none;
              border-radius: 8px;
              margin: 8px;
              font-weight: 600;
              font-size: 15px;
              transition: background 0.2s;
            }
            .cta-button:hover {
              background: #0051cc;
            }
            .cta-button.secondary {
              background: #00c853;
            }
            .cta-button.secondary:hover {
              background: #00a844;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 2px solid #e0e0e0;
              font-size: 13px;
              color: #666;
              text-align: center;
            }
            .footer p {
              margin: 5px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎯 New Schedule Request</h1>
              <p>Someone wants to connect with you!</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">📧 Email Address</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">🏢 Company</div>
                <div class="value">${company}</div>
              </div>
              <div class="field">
                <div class="label">💼 Role / Position</div>
                <div class="value">${role}</div>
              </div>
              ${message ? `
              <div class="field">
                <div class="label">💬 Message</div>
                <div class="value">${message}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">🕐 Received At</div>
                <div class="value">${new Date().toLocaleString('en-US', {
                  timeZone: 'America/Los_Angeles',
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })} PST</div>
              </div>

              <div class="cta-container">
                <a href="https://calendly.com/bill-ych-jobs/30min" class="cta-button">
                  📅 View Your Calendly
                </a>
                <a href="mailto:${email}?subject=Re: Schedule Request from ${company}" class="cta-button secondary">
                  ✉️ Reply to ${email.split('@')[0]}
                </a>
              </div>
            </div>
            <div class="footer">
              <p><strong>Sent from your Portfolio Website</strong></p>
              <p>IP: ${req.headers['x-forwarded-for'] || req.socket.remoteAddress}</p>
              <p>User Agent: ${req.headers['user-agent']}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(500).json({
        error: 'Failed to send email. Please try the Calendly link below.',
      })
    }

    // Log for analytics
    console.log('Schedule request sent:', {
      emailId: data?.id,
      from: email,
      company,
      role,
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    })

    return res.status(200).json({
      success: true,
      message: 'Schedule request received. I will reach out within 24 hours.',
      emailId: data?.id,
    })
  } catch (error) {
    console.error('Schedule API error:', error)
    return res.status(500).json({
      error: 'Failed to send request. Please use the Calendly link below.',
    })
  }
}
