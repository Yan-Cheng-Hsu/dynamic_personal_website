import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import styles from '@/styles/Landing.module.css'

const brands = [
  {
    name: 'Amazon AGI',
    logo: '/brands/amazon-official.png',
    description: 'Saved $9M/year',
    color: '#FF9900',
    isImage: true
  },
  {
    name: 'Alibaba Cloud',
    logo: '/brands/alibaba-official.png',
    description: 'Current - SRE II',
    color: '#FF6A00',
    isImage: true
  },
  {
    name: 'Amazon Nova',
    logo: '/brands/amazon-official.png',
    description: 'Co-Author',
    color: '#232F3E',
    isImage: true
  },
  {
    name: 'Unitree Robotics',
    logo: '/brands/unitree-official.png',
    description: '25x Scaling',
    color: '#0066CC',
    isImage: true
  }
]

export default function BrandShowcase() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <section className={styles.brandSection} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className={styles.brandContainer}
      >
        <h3 className={styles.brandTitle}>Trusted by Industry Leaders</h3>
        <div className={styles.brandGrid}>
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className={styles.brandCard}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.brandLogo}>
                {brand.isImage ? (
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={120}
                    height={60}
                    style={{ objectFit: 'contain' }}
                  />
                ) : (
                  <span style={{ fontSize: '3rem' }}>{brand.logo}</span>
                )}
              </div>
              <div className={styles.brandName}>{brand.name}</div>
              <div className={styles.brandDescription}>{brand.description}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}