import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from '@/styles/Landing.module.css'

const testimonials = [
  {
    quote: "Bill's Dual-Layer Virtual Kubelet architecture revolutionized our cross-cluster GPU management. His solution enabled 25x scaling for Unitree G1 robot training while achieving 40% cost reduction.",
    author: "Engineering Director",
    company: "Alibaba Cloud",
    role: "AnalyticDB AI Platform"
  },
  {
    quote: "His GPU lifecycle and blacklisting system prevented circular terminations and saved us $9M annually. The automated reliability orchestrator reduced troubleshooting time by 90% - from 10 hours to just 1 hour.",
    author: "Senior Principal Engineer",
    company: "Amazon AGI",
    role: "Platform Leviathan - NOVA Infrastructure"
  },
  {
    quote: "Bill's innovative Federated Identity Mesh solved our 'split-brain' identity challenges in multi-cluster K8s. His ability to design secure, scalable systems at the 10,000+ GPU scale is unmatched.",
    author: "Technical Lead",
    company: "Cross-Industry Review",
    role: "Cloud Infrastructure Expert"
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className={styles.testimonialsSection}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        What People Say About My Work
      </motion.h2>

      <div className={styles.disclaimer}>
        💡 These are simulated testimonials based on actual impact metrics
      </div>

      <div className={styles.testimonialsContainer}>
        <motion.div
          key={activeIndex}
          className={styles.testimonialCard}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.quoteIcon}>"</div>
          <p className={styles.testimonialQuote}>
            {testimonials[activeIndex].quote}
          </p>
          <div className={styles.testimonialAuthor}>
            <strong>{testimonials[activeIndex].author}</strong>
            <span>{testimonials[activeIndex].role}</span>
            <span className={styles.testimonialCompany}>
              {testimonials[activeIndex].company}
            </span>
          </div>
        </motion.div>

        <div className={styles.testimonialDots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}