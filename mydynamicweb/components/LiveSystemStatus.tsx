import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles/Landing.module.css'

export default function LiveSystemStatus() {
  const [gpusActive, setGpusActive] = useState(9847)
  const [requestsPerSec, setRequestsPerSec] = useState(1245)
  const [uptime, setUptime] = useState(99.99)
  const [activeNodes, setActiveNodes] = useState(342)

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate live data with small variations
      setGpusActive(prev => prev + Math.floor(Math.random() * 20 - 10))
      setRequestsPerSec(prev => prev + Math.floor(Math.random() * 100 - 50))
      setActiveNodes(prev => prev + Math.floor(Math.random() * 5 - 2))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.systemStatus}>
      <h2 className={styles.sectionTitle}>
        Systems I Could Be Managing for You
      </h2>

      <div className={styles.statusGrid}>
        <motion.div
          className={styles.statusCard}
          whileHover={{ scale: 1.02 }}
        >
          <div className={styles.statusHeader}>
            <span className={styles.liveIndicator}></span>
            LIVE SIMULATION
          </div>

          <div className={styles.statusMetrics}>
            <div className={styles.statusItem}>
              <div className={styles.statusLabel}>Active GPUs</div>
              <motion.div
                className={styles.statusValue}
                key={gpusActive}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {gpusActive.toLocaleString()}
              </motion.div>
            </div>

            <div className={styles.statusItem}>
              <div className={styles.statusLabel}>Requests/sec</div>
              <motion.div
                className={styles.statusValue}
                key={requestsPerSec}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {requestsPerSec.toLocaleString()}
              </motion.div>
            </div>

            <div className={styles.statusItem}>
              <div className={styles.statusLabel}>Uptime</div>
              <div className={styles.statusValue}>{uptime}%</div>
            </div>

            <div className={styles.statusItem}>
              <div className={styles.statusLabel}>Active Nodes</div>
              <motion.div
                className={styles.statusValue}
                key={activeNodes}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {activeNodes}
              </motion.div>
            </div>
          </div>

          <div className={styles.statusChart}>
            {/* Simple animated bars */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className={styles.statusBar}
                animate={{
                  height: `${Math.random() * 100}%`,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}