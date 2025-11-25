export interface Project {
  id: string
  title: string
  image: string
  bullets: string[]
  motivation: string
  date: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 'personal-websites',
    title: 'Personal Websites from Scratch',
    image: '/pics/personal_webv1v2.png',
    bullets: [
      'Deployed a Next.js application on Azure VM, secured with HTTPS through Nginx, Certbot, and Azure DNS configuration.',
      'Implemented Nginx reverse proxy with Certbot for directing 8080 port traffic to HTTPS.',
      'Incorporated dynamic descriptions with typing and shining animations and developed reusable components.'
    ],
    motivation: 'Self-motivated',
    date: 'Apr. 2023',
    githubUrl: 'https://github.com/Yan-Cheng-Hsu/dynamic_website'
  },
  {
    id: 'webserver-file-sharing',
    title: 'Webserver & File Sharing System from Scratch',
    image: '/pics/raft.png',
    bullets: [
      'Developed a concurrent web server using multi-threading, equipped with an HTTP/1.1 protocol handler for request parsing and response formulation.',
      'Created a race-condition-free file sharing system with Meta and Block Services, supporting simultaneous file synchronization from multiple clients.',
      'Incorporated the RAFT protocol to ensure system fault tolerance.'
    ],
    motivation: 'UC San Diego CSE224 Course',
    date: 'Jan. 2022',
    githubUrl: 'https://github.com/Yan-Cheng-Hsu/Webserver-File-Sharing-System'
  },
  {
    id: 'buffer-manager-btree',
    title: 'Buffer Manager and B+ Tree Indexing System from Scratch',
    image: '/pics/db.png',
    bullets: [
      'Implemented a B+ Tree file indexing system for efficient database operations including insertion, deletion, node splits, and range searches.',
      'Developed a Buffer Manager utilizing the Clock Algorithm for optimized buffer replacement.'
    ],
    motivation: 'UC San Diego CSE132C Course',
    date: 'Apr. 2022',
    githubUrl: 'https://github.com/Yan-Cheng-Hsu/Buffer-Manager-and-B-Tree-Indexing-System-from-Scratch-'
  },
  {
    id: 'recommender-system',
    title: 'Recommender System Rating Prediction',
    image: '/pics/latent_factor_model.png',
    bullets: [
      'Designed a latent factor rating prediction model using TensorFlow, securing a top 5% performance ranking in class.',
      'Enhanced the model by integrating it with a deep residual network, resulting in a Mean Square Error (MSE) of 0.83 over 500,000 shopping records.'
    ],
    motivation: 'UC San Diego CSE258 Course',
    date: 'Dec. 2021'
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision Projects',
    image: '/pics/optical_flow.png',
    bullets: [
      'Developed edge and corner detection algorithms, utilizing Non-maximum Suppression and Hypothesising techniques.',
      'Constructed partially and completely bounded camera rectification solutions using epipolar geometry.',
      'Designed a SIFT feature matching system leveraging fundamental metrics computed with epipolar geometry and RANSAC.',
      'Employed CNN-Dense classifiers in pattern recognition projects, achieving 98% accuracy.'
    ],
    motivation: 'UC San Diego CSE252A Course',
    date: 'Dec. 2021',
    githubUrl: 'https://github.com/Yan-Cheng-Hsu/Computer-Vision-.git'
  }
]
