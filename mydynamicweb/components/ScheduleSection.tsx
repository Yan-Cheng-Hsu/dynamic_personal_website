import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from '@/styles/Landing.module.css'

export default function ScheduleSection() {
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSchedule = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Track this interaction
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'schedule_request', {
          company: company,
          role: role
        })
      }

      // Send to backend API
      const response = await fetch('/api/schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, company, role, message }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitted(true)
      } else {
        setError(data.error || 'Failed to send request. Please try the Calendly link below.')
      }
    } catch (err) {
      console.error('Error submitting form:', err)
      setError('Network error. Please try the Calendly link below.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section id="schedule" className={styles.scheduleSection}>
        <motion.div
          className={styles.successMessage}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2>🎉 Thank You!</h2>
          <p>I'll reach out within 24 hours to schedule our call.</p>
          <p>You can also directly book a time on my calendar:</p>
          <a
            href="https://calendly.com/bill-ych-jobs/30min"
            className={styles.primaryBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book on Calendly
          </a>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="schedule" className={styles.scheduleSection}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Let's Build Something Amazing Together
      </motion.h2>

      <div className={styles.scheduleGrid}>
        <div className={styles.scheduleInfo}>
          <h3>Why Schedule a Call?</h3>
          <ul>
            <li>🎯 Discuss how I can solve your infrastructure challenges</li>
            <li>💡 Share ideas about scaling AI/ML systems</li>
            <li>🤝 Explore potential collaboration opportunities</li>
            <li>📊 Get insights from my experience at scale</li>
          </ul>

          <div className={styles.availability}>
            <h4>My Availability</h4>
            <p>Pacific Time (PST/PDT)</p>
            <p>Mon-Fri: 9 AM - 6 PM</p>
            <p>Response within 24 hours</p>
          </div>
        </div>

        <motion.form
          className={styles.scheduleForm}
          onSubmit={handleSchedule}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <input
            type="email"
            placeholder="Your Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Company *"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Role/Position you're hiring for *"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
          <textarea
            placeholder="Brief message about the opportunity (optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
          />
          {error && (
            <div style={{
              color: '#ff6b6b',
              padding: '1rem',
              background: 'rgba(255, 107, 107, 0.1)',
              borderRadius: '8px',
              marginBottom: '1rem',
              border: '1px solid rgba(255, 107, 107, 0.3)'
            }}>
              ⚠️ {error}
            </div>
          )}

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={loading}
            style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'wait' : 'pointer' }}
          >
            {loading ? '📤 Sending...' : '📅 Request a Call'}
          </button>

          <p className={styles.alternativeSchedule}>
            Prefer to schedule directly?
            <a
              href="https://calendly.com/bill-ych-jobs/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Use Calendly →
            </a>
          </p>
        </motion.form>
      </div>
    </section>
  )
}