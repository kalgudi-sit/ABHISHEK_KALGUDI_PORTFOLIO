import type { PortfolioContent } from './portfolio.types'

export const portfolioContent: PortfolioContent = {
  identity: {
    name: 'Abhishek Kalgudi',
    role: 'Software Development Engineer II',
    location: 'Bangalore, India',
    availability: 'Open to thoughtful engineering conversations',
    shortBio: 'I build reliable interfaces and distributed systems for complex workflows.',
    longBio: 'I am a full-stack engineer working across the complete Software Development Lifecycle: requirements discovery, technical design, solution brainstorming, enterprise integrations, implementation, production delivery, and continuous enhancement. My current work supports institutional Cash Equities trading at Morgan Stanley, where I own frontend architecture while also building the backend services that make critical workflows move.',
    portraitAlt: 'Portrait of Abhishek Kalgudi',
  },
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Work', path: '/work' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
  socialLinks: [
    { label: 'LeetCode', href: 'https://leetcode.com/', icon: 'code' },
    { label: 'GitHub', href: 'https://github.com/', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
    { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
    { label: 'Email', href: 'mailto:hello@example.com', icon: 'mail' },
    { label: 'Phone', href: 'tel:+910000000000', icon: 'phone' },
  ],
  metrics: [
    { value: '2B+', label: 'USD daily transaction volume supported' },
    { value: '800+', label: 'algorithmic problems solved' },
    { value: '9.48', label: 'engineering CGPA / 10' },
  ],
  principles: [
    { title: 'Make complexity legible', description: 'Turn dense business rules into interfaces that help people make confident decisions.' },
    { title: 'Own the whole loop', description: 'Move comfortably from a user workflow to the API, event, and service behind it.' },
    { title: 'Build for the next change', description: 'Prefer clear boundaries, reusable patterns, and systems that can evolve without drama.' },
  ],
  skills: {
    Languages: ['Java', 'TypeScript', 'JavaScript', 'Python'],
    Frameworks: ['Spring Boot', 'Spring MVC', 'React', 'Microservices'],
    Technologies: ['Apache Kafka', 'REST APIs', 'AG Grid', 'TanStack Query', 'React Hook Form', 'RxJS'],
    Tools: ['Git', 'GitHub', 'Bitbucket', 'Jira', 'Gradle'],
  },
  experience: [
    {
      period: 'Aug 2024 — Present',
      role: 'Software Development Engineer II',
      company: 'Wissen Technology',
      context: 'Consultant Technology Associate · Morgan Stanley',
      summary: 'Building enterprise-scale trading platforms for the Cash Equities Technology division through requirements discovery, architecture discussions, implementation, and production delivery.',
      technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Kafka', 'Microservices'],
      highlights: ['Complete frontend ownership for a workflow-driven Order Management System used by institutional sales users.', 'Built order entry, order blotter, cloning, batch entry, cancellation, allocation, trade summary, validation history, and audit workflows.', 'Developed backend workflow services and secure REST APIs across a distributed trading ecosystem.', 'Collaborated with pre-trade, suitability, headroom, fee and commission, post-trade, and surveillance platforms.'],
      featured: true,
    },
    {
      period: 'Internship',
      role: 'Software Engineering Intern',
      company: 'Morgan Stanley via Wissen Technology',
      context: 'Generative AI proof-of-concepts',
      summary: 'Explored practical applications of Generative AI in investment banking operations.',
      technologies: ['Python', 'Playwright', 'LangChain', 'FAISS', 'Sentence Transformers'],
      highlights: ['Created a natural-language automation platform for Playwright and Selenium workflows.', 'Architected a derivatives knowledge assistant using retrieval-augmented generation.'],
    },
  ],
  projects: [
    { id: 'stp2', eyebrow: 'Production system · Cash Equities', title: 'Order Management System', description: 'A straight-through processing platform for institutional Cash Equities orders, built around high-trust workflows and event-driven services.', outcome: 'Supports a daily transaction volume of approximately 2B USD.', technologies: ['React', 'TypeScript', 'Java', 'Kafka'], accent: 'blue' },
    { id: 'sales-assistant', eyebrow: 'GenAI · Automation', title: 'Sales Assistant', description: 'A platform that turns natural-language instructions into executable browser automation for repetitive sales operations.', outcome: 'Combines script generation, live execution, screenshots, and concise summaries.', technologies: ['Python', 'Playwright', 'Selenium', 'Generative AI'], accent: 'coral' },
    { id: 'derivatives-rag', eyebrow: 'GenAI · Knowledge retrieval', title: 'Derivatives Knowledge Assistant', description: 'A domain-focused RAG system that makes large volumes of derivatives documentation easier to search and understand.', outcome: 'Uses intelligent chunking, semantic embeddings, and FAISS similarity search.', technologies: ['Python', 'LangChain', 'FAISS', 'RAG'], accent: 'yellow' },
  ],
  education: [
    { period: '2021 — 2025', institution: 'Siddaganga Institute of Technology', qualification: 'B.E. Computer Science & Engineering', result: 'CGPA 9.48 / 10' },
    { period: '2019 — 2021', institution: 'GRV PU College', qualification: 'Pre-University · Class XII', result: '96.83%' },
  ],
  achievements: [
    'Solved 800+ Data Structures and Algorithms problems across LeetCode and GeeksforGeeks.',
    'Secured Global Rank 1211 among 20,000+ participants in LeetCode Biweekly Contest 118.',
    'Secured Global Rank 2057 among 20,000+ participants in LeetCode Biweekly Contest 119.',
    'Secured Rank 67 among 2,000+ participants in Coding Ninjas Weekend Contest 95.',
    'Achieved Rank 1 in DeCoders CodeItOut and 3rd Place in GeeksforGeeks Runtime Riot.',
  ],
  domainExpertise: ['Full Stack Application Development', 'Distributed Systems', 'Event-Driven Architecture', 'REST API Design', 'Workflow Automation', 'Microservices', 'Enterprise Software Development', 'Investment Banking Technology'],
}
