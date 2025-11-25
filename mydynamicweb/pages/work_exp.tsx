import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import { experiences, publications } from '@/data/experience'

export default function WorkEXP() {
  return (
    <Layout
      title="Experience"
      description="Work experience and publications of Yan-Cheng (Bill) Hsu - SRE at Alibaba Cloud, Ex-Amazon AGI, specializing in GPU infrastructure, AI training platforms, and distributed systems."
    >
      <div className={styles.section}>
        <h1 className={styles.sectionTitle}>Publications</h1>

        {publications.map((pub) => (
          <div key={pub.id} className={styles.expCard}>
            <div>
              <Link href={pub.url || '#'} target="_blank">
                <Image
                  src={pub.image}
                  alt={pub.title}
                  width={400}
                  height={300}
                  className={styles.logo}
                />
              </Link>
            </div>
            <div className={styles.expContent}>
              <Link href={pub.url || '#'} target="_blank">
                <h3>{pub.title}</h3>
              </Link>
              <h6>
                {pub.authors}
                <br />
                <em>{pub.venue}</em> {pub.isOral && <strong>(Oral Presentation)</strong>}
              </h6>
              <ul>
                {pub.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
              {pub.githubUrl && (
                <Link href={pub.githubUrl} target="_blank" className={styles.linkIcon}>
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

      <div className={styles.section}>
        <h1 className={styles.sectionTitle}>Work Experience</h1>

        {experiences.map((exp) => (
          <div key={exp.id} className={styles.expCard}>
            <div>
              <Link href={exp.companyUrl} target="_blank">
                <Image
                  src={exp.image}
                  alt={exp.company}
                  width={400}
                  height={300}
                  className={styles.logo}
                />
              </Link>
            </div>
            <div className={styles.expContent}>
              {exp.projects.map((project, idx) => (
                <div key={idx}>
                  <Link href={project.url || exp.companyUrl} target="_blank">
                    <h3>{project.title}</h3>
                  </Link>
                  <ul>
                    {project.bullets.map((bullet, bidx) => (
                      <li key={bidx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className={styles.expMeta}>
                <h6>
                  <strong>Company:</strong>{' '}
                  <Link href={exp.companyUrl} target="_blank">
                    {exp.company}
                  </Link>
                </h6>
                {exp.organization && (
                  <h6>
                    <strong>Organization:</strong>{' '}
                    {exp.organizationUrl ? (
                      <Link href={exp.organizationUrl} target="_blank">
                        {exp.organization}
                      </Link>
                    ) : (
                      exp.organization
                    )}
                  </h6>
                )}
                <h6>
                  <strong>Position:</strong> {exp.position}
                </h6>
                <h6>
                  <strong>Incumbency:</strong> {exp.startDate} - {exp.endDate}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
