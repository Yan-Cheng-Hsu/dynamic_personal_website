import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'

const contacts = [
  {
    name: 'Email',
    url: 'mailto:bill.ych.jobs@gmail.com',
    icon: '/pics/gmail_icon.png',
    label: 'bill.ych.jobs@gmail.com',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yan-cheng-hsu/',
    icon: '/pics/linkedIn.png',
    label: 'yan-cheng-hsu',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Yan-Cheng-Hsu',
    icon: '/pics/github.png',
    label: 'Yan-Cheng-Hsu',
  },
  {
    name: 'Google Scholar',
    url: 'https://scholar.google.com/citations?hl=en&view_op=list_works&authuser=3&gmla=ABEO0YpeaGnjZtx4Np6ytz2FIHOnLAf2IPB0umyXRNAgxAeOx0jSMAQT6oBHzcAba2gn4k3CW4wvev2-8l7Amg&user=u0mWcuJySogC',
    icon: '/pics/googlescholar_icon.png',
    label: 'Publications',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/bill.yc.hsu/',
    icon: '/pics/instagram_icon.png',
    label: 'bill.yc.hsu',
  },
]

export default function Contacts() {
  return (
    <Layout
      title="Contact"
      description="Contact Yan-Cheng (Bill) Hsu - SRE at Alibaba Cloud. Connect via LinkedIn, GitHub, or email for professional opportunities."
    >
      <div className={styles.section}>
        <h1 className={styles.sectionTitle}>Get In Touch</h1>

        <div className={styles.contactGrid}>
          {contacts.map((contact) => (
            <Link
              key={contact.name}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <Image
                src={contact.icon}
                alt={contact.name}
                width={80}
                height={80}
              />
              <h3>{contact.name}</h3>
              <p>{contact.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}
