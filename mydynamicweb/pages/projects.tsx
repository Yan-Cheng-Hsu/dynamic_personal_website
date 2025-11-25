import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <Layout
      title="Projects"
      description="Software projects by Yan-Cheng (Bill) Hsu - Full-stack development, distributed systems, database systems, recommender systems, and computer vision."
    >
      <div className={styles.section}>
        <h1 className={styles.sectionTitle}>Software Projects</h1>

        {projects.map((project) => (
          <div key={project.id} className={styles.expCard}>
            <div>
              <Link href={project.image} target="_blank">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className={styles.logo}
                />
              </Link>
            </div>
            <div className={styles.expContent}>
              <h3>{project.title}</h3>
              <ul>
                {project.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
              <div className={styles.expMeta}>
                <h6>
                  <strong>Motivation:</strong> {project.motivation}
                </h6>
                <h6>
                  <strong>Date:</strong> {project.date}
                </h6>
              </div>
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className={styles.linkIcon}
                >
                  <Image
                    src="/pics/github.png"
                    alt="GitHub"
                    width={25}
                    height={25}
                  />
                  <span>GitHub</span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
