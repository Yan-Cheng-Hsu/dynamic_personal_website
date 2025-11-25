import { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import styles from '@/styles/Landing.module.css'

const metrics = [
  {
    value: 9,
    prefix: '$',
    suffix: 'M',
    label: 'Annual Savings (Amazon)',
    icon: '💰',
    color: '#00c853'
  },
  {
    value: 10000,
    suffix: '+',
    label: 'Cross-Cluster GPUs',
    icon: '🖥️',
    color: '#0070f3'
  },
  {
    value: 90,
    suffix: '%',
    label: 'MTTR Reduction (10hr→1hr)',
    icon: '⚡',
    color: '#ff6f00'
  },
  {
    value: 40,
    suffix: '%',
    label: 'Cost Reduction (Alibaba)',
    icon: '📊',
    color: '#9c27b0'
  }
]

export default function MetricsDashboard() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section className={styles.metricsSection} ref={ref}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Impact I've Delivered
      </motion.h2>

      <div className={styles.metricsGrid}>
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            className={styles.metricCard}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            style={{ borderTop: `4px solid ${metric.color}` }}
          >
            <div className={styles.metricIcon}>{metric.icon}</div>
            <div className={styles.metricValue}>
              {inView && (
                <CountUp
                  start={0}
                  end={metric.value}
                  duration={2}
                  decimals={metric.value < 10 ? 1 : 0}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              )}
            </div>
            <div className={styles.metricLabel}>{metric.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}