import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from '@/styles/Landing.module.css'

const skillCategories = [
  {
    category: 'Cloud Native & Kubernetes',
    skills: [
      { name: 'K8s Internals (Operators, CRDs, Virtual Kubelet)', level: 95 },
      { name: 'Cross-Cluster Architecture', level: 95 },
      { name: 'AWS EKS / Helm / Docker', level: 90 },
      { name: 'Service Mesh & Identity Management', level: 90 }
    ]
  },
  {
    category: 'Infrastructure & Automation',
    skills: [
      { name: 'Terraform / AWS CDK / CloudFormation', level: 90 },
      { name: 'Golang (Primary Language)', level: 95 },
      { name: 'Python / TypeScript', level: 85 },
      { name: 'VPC Networking / gRPC / eBPF', level: 85 }
    ]
  },
  {
    category: 'AI Infrastructure & GPU',
    skills: [
      { name: 'NVIDIA A100/H100 Optimization', level: 90 },
      { name: 'Ray Cluster/Serve', level: 85 },
      { name: 'PyTorch Distributed Training', level: 80 },
      { name: 'Prometheus / Grafana / DCGM', level: 90 }
    ]
  }
]

export default function SkillsMatrix() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const getSkillColor = (level: number) => {
    if (level >= 90) return '#ff6b35'  // Orange
    if (level >= 80) return '#f7c531'  // Yellow
    if (level >= 70) return '#9b59b6'  // Purple
    return '#666'
  }

  return (
    <section className={styles.skillsSection} ref={ref}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
      >
        Technical Expertise
      </motion.h2>

      <div className={styles.skillsGrid}>
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            className={styles.skillCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: catIndex * 0.2 }}
          >
            <h3>{category.category}</h3>
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className={styles.skillItem}>
                <div className={styles.skillHeader}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillLevel}>{skill.level}%</span>
                </div>
                <div className={styles.skillBarBg}>
                  <motion.div
                    className={styles.skillBar}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{
                      duration: 1,
                      delay: catIndex * 0.2 + skillIndex * 0.1
                    }}
                    style={{ backgroundColor: getSkillColor(skill.level) }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      <div className={styles.certifications}>
        <h3>Certifications & Achievements</h3>
        <div className={styles.badges}>
          <span className={styles.badge}>🎓 UCSD MS Computer Science</span>
          <span className={styles.badge}>📚 3 Publications</span>
          <span className={styles.badge}>🏆 Amazon Nova Co-Author</span>
          <span className={styles.badge}>⚙️ Kubernetes Expert</span>
        </div>
      </div>
    </section>
  )
}