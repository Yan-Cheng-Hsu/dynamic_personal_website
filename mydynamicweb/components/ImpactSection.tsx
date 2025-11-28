import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import CountUp from 'react-countup'
import styles from '@/styles/Landing.module.css'

const experiences = [
  {
    name: 'Amazon AGI',
    logo: '/brands/amazon-official.png',
    descriptions: [
      'Saved $9M/year in infrastructure costs',
      'Architected Cross-Cluster systems for 10,000+ GPUs',
      'Built self-healing AIOps reducing MTTR by 90%'
    ],
    url: 'https://www.amazon.com',
    metric: { value: 9, prefix: '$', suffix: 'M', label: 'Annual Savings' },
    color: '#ff6b35'
  },
  {
    name: 'Alibaba Cloud',
    logo: '/brands/alibaba-official.png',
    descriptions: [
      'Current - Site Reliability Engineer II',
      'AI Training Platform resource management',
      '40% cost reduction through optimization'
    ],
    url: 'https://www.alibabacloud.com',
    metric: { value: 40, suffix: '%', label: 'Cost Reduction' },
    color: '#f7c531'
  },
  {
    name: 'Amazon Nova',
    logo: '/brands/nova-official.png',
    descriptions: [
      'Co-Author on Amazon Nova Technical Report',
      'Contributed to frontier AI model development',
      'Published Dec 2024'
    ],
    url: 'https://nova.amazon.com',
    color: '#9b59b6'
  },
  {
    name: 'Unitree Robotics',
    logo: '/brands/unitree-text-logo.png',
    descriptions: [
      '25x scaling for G1-D humanoid robot training',
      'GPU infrastructure for reinforcement learning',
      'Cross-cluster orchestration'
    ],
    url: 'https://www.unitree.com/G1-D/',
    metric: { value: 25, suffix: 'x', label: 'Training Scale' },
    color: '#e74c3c'
  },
  {
    name: 'UC San Diego',
    logo: '/pics/ucsd_icon.png',
    descriptions: [
      'M.S. Computer Science (AI/ML focus), 2023',
      'Computational Neuroscience & Machine Learning Research',
      'Full-stack Developer @ UCSD IT'
    ],
    url: 'https://ucsd.edu',
    color: '#3498db'
  }
]

const highlightMetrics = [
  { value: 10000, suffix: '+', label: 'GPUs Managed', icon: '🖥️', color: '#ff6b35' },
  { value: 90, suffix: '%', label: 'MTTR Reduction', icon: '⚡', color: '#f7c531' },
  { value: 3, suffix: '+', label: 'Publications', icon: '📄', color: '#9b59b6' },
]

export default function ImpactSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className={styles.impactSection} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className={styles.impactContainer}
      >
        <h2 className={styles.impactTitle}>Where I've Made Impact</h2>

        {/* Highlight Metrics Row */}
        <div className={styles.highlightMetrics}>
          {highlightMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className={styles.highlightMetric}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <span className={styles.highlightIcon}>{metric.icon}</span>
              <span className={styles.highlightValue} style={{ color: metric.color }}>
                {inView && (
                  <CountUp
                    start={0}
                    end={metric.value}
                    duration={2}
                    suffix={metric.suffix}
                  />
                )}
              </span>
              <span className={styles.highlightLabel}>{metric.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Experience Cards */}
        <div className={styles.experienceGrid}>
          {experiences.map((exp, index) => (
            <motion.a
              key={index}
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.experienceCard}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              style={{ borderLeft: `4px solid ${exp.color}` }}
            >
              <div className={styles.experienceHeader}>
                <div className={styles.experienceLogo}>
                  <Image
                    src={exp.logo}
                    alt={exp.name}
                    width={120}
                    height={60}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h3 className={styles.experienceName}>{exp.name}</h3>
              </div>

              <ul className={styles.experienceDescriptions}>
                {exp.descriptions.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>

              {exp.metric && (
                <div className={styles.experienceMetric}>
                  <span className={styles.metricNumber} style={{ color: exp.color }}>
                    {inView && (
                      <CountUp
                        start={0}
                        end={exp.metric.value}
                        duration={2}
                        prefix={exp.metric.prefix}
                        suffix={exp.metric.suffix}
                      />
                    )}
                  </span>
                  <span className={styles.metricDesc}>{exp.metric.label}</span>
                </div>
              )}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
