export interface CvLink {
  label: string
  href: string
}

export interface CvExperience {
  company: string
  role: string
  period: string
  location?: string
  highlights: string[]
  tech?: string[]
}

export interface CvProject {
  name: string
  description: string
  role?: string
  tech: string[]
  link?: string
}

export interface CvEducation {
  school: string
  degree: string
  period: string
  details?: string
}

export interface CvSkillGroup {
  label: string
  items: string[]
}

export interface CvProfile {
  name: string
  title: string
  location: string
  tagline: string
  summary: string[]
  links: CvLink[]
  cvPdfUrl?: string
  skillGroups: CvSkillGroup[]
  experiences: CvExperience[]
  projects: CvProject[]
  education: CvEducation[]
}

export const useCvData = () => {
  const profile: CvProfile = {
    name: 'Purinat Sanbundit',
    title: 'Front-end Developer',
    location: 'Bangkok, Thailand',
    tagline:
      'Front-end developer crafting calm, maintainable web experiences with Nuxt, React, and modern JavaScript.',
    summary: [
      'Front-end developer at Dek-D Interactive focusing on responsive, production-grade web applications built with Nuxt.js, React, Svelte, and modern TypeScript.',
      'Enjoys translating product ideas into clean, maintainable UI systems, collaborating closely with designers and backend engineers.',
      'Values clarity, consistency, and sustainable progress in both engineering work and personal development.',
    ],
    // Update this path to point at your latest CV PDF under /public.
    // Example: place "purinat-sanbundit-cv.pdf" in /public/cv/ and set:
    // cvPdfUrl: '/cv/purinat-sanbundit-cv.pdf'
    cvPdfUrl: '/cv/purinat-sanbundit-cv.pdf',
    links: [
      { label: 'Email', href: 'mailto:purinat.san@gmail.com' },
      { label: 'GitHub', href: 'https://github.com/PurinatG-01' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/purinat-sanbundit-12266217a/' },
      { label: 'Personal site', href: 'https://chofongsua-blog.netlify.app/' },
    ],
    skillGroups: [
      {
        label: 'Frontend',
        items: [
          'JavaScript / TypeScript',
          'Nuxt.js',
          'Next.js',
          'Vue',
          'React',
          'Svelte',
          'HTML / CSS',
        ],
      },
      {
        label: 'Backend & APIs',
        items: ['Node.js', 'Go', 'RESTful APIs', 'PHP basics'],
      },
      {
        label: 'Data & Infrastructure',
        items: ['MongoDB', 'SQL', 'Firebase', 'DigitalOcean'],
      },
      {
        label: 'Practices & Collaboration',
        items: [
          'Responsive UI',
          'Performance awareness',
          'Clean, readable code',
          'Git-based workflow',
          'Agile collaboration',
        ],
      },
    ],
    experiences: [
      {
        company: 'Dek-D Interactive Co., Ltd.',
        role: 'Front-end Developer',
        period: 'Mar 2021 – Present',
        location: 'Bangkok, Thailand',
        highlights: [
          'Develop and maintain the Writer Dek-D platform using Nuxt.js, PHP, Svelte, and React, ensuring a consistent, responsive experience across desktop and mobile.',
          'Collaborate in an agile team to plan and deliver new Writer Dek-D features, balancing product requirements with technical constraints.',
          'Implement and maintain WebView experiences integrated into the Writer Novel mobile app, keeping behavior aligned with the main web platform.',
        ],
        tech: ['Nuxt.js', 'Vue', 'React', 'Svelte', 'TypeScript', 'PHP'],
      },
      {
        company: 'Dek-D Interactive Co., Ltd.',
        role: 'Front-end Developer (Intern)',
        period: 'Jun 2020 – Aug 2020',
        location: 'Bangkok, Thailand',
        highlights: [
          'Contributed to internal admin tools using React.js, Next.js, and GraphQL.',
          'Implemented responsive admin interfaces with Material UI and reusable React components.',
          'Gained experience working with real production codebases and review cycles.',
        ],
        tech: ['React', 'Next.js', 'GraphQL', 'Material UI'],
      },
    ],
    projects: [
      {
        name: 'AiRadar – Air Quality Monitoring System',
        description:
          'Air quality monitoring platform combining a web application, tracking device, and data calibration/visualization pipeline.',
        tech: ['Next.js', 'Express.js', 'MongoDB', 'Firebase', 'Blynk', 'DigitalOcean'],
      },
      {
        name: 'Freelance Front-end Projects',
        description:
          'Delivered foundational website UIs and core functionality using HTML, CSS, and SASS for a range of client projects.',
        tech: ['HTML', 'CSS', 'SASS', 'JavaScript'],
      },
    ],
    education: [
      {
        school: 'Mahidol University – Faculty of ICT',
        degree: 'B.Sc. in Information and Communication Technology (Software Engineering Track)',
        period: 'May 2018 – May 2021',
        details: 'Graduated with First Class Honors.',
      },
    ],
  }

  return {
    profile,
  }
}
