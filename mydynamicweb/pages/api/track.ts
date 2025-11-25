import type { NextApiRequest, NextApiResponse } from 'next'

interface VisitorData {
  timestamp: string
  userAgent: string
  language: string
  screen: string
  referrer: string
  url: string
}

// In production, you'd store this in a database
const visitors: VisitorData[] = []

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const visitorData = req.body as VisitorData

      // Add IP and geo info
      const enrichedData = {
        ...visitorData,
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        // In production, use a geo IP service
      }

      // Store visitor data (in production, use a database)
      visitors.push(enrichedData)

      console.log('Visitor tracked:', enrichedData)

      return res.status(200).json({ success: true })
    } catch (error) {
      console.error('Track API error:', error)
      return res.status(500).json({ error: 'Failed to track visitor' })
    }
  }

  if (req.method === 'GET') {
    // Return visitor stats (protect this endpoint in production!)
    return res.status(200).json({
      totalVisitors: visitors.length,
      recentVisitors: visitors.slice(-10)
    })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
