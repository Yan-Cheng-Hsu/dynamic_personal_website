import { motion } from 'framer-motion'
import { useEffect } from 'react'
import styles from '@/styles/Landing.module.css'

// Calendly URL - change this to your Calendly link
const CALENDLY_URL = 'https://calendly.com/bill-ych-jobs/30min'

export default function ScheduleSection() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

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
            <li>Discuss how I can solve your infrastructure challenges</li>
            <li>Share ideas about scaling AI/ML systems</li>
            <li>Explore potential collaboration opportunities</li>
            <li>Get insights from my experience at scale</li>
          </ul>

          <div className={styles.availability}>
            <h4>My Availability</h4>
            <p>Pacific Time (PST/PDT)</p>
            <p>Mon-Fri: 9 AM - 6 PM</p>
            <p>Response within 24 hours</p>
          </div>
        </div>

        <motion.div
          className={styles.calendlyContainer}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {/* Calendly inline widget */}
          <div
            className="calendly-inline-widget"
            data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=1a1a2e&text_color=ffffff&primary_color=0070f3`}
            style={{
              minWidth: '320px',
              height: '630px',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}