export type RoutePath = '/' | '/work' | '/about' | '/contact'

export type IconName = 'arrowUpRight' | 'github' | 'linkedin' | 'mail' | 'mapPin' | 'instagram' | 'code' | 'phone'

export interface NavigationItem {
  readonly label: string
  readonly path: RoutePath
}

export interface SocialLink {
  readonly label: string
  readonly href: string
  readonly icon: IconName
}

export interface ExperienceItem {
  readonly period: string
  readonly role: string
  readonly company: string
  readonly context: string
  readonly summary: string
  readonly technologies: readonly string[]
  readonly highlights: readonly string[]
  readonly featured?: boolean
}

export interface ProjectItem {
  readonly id: string
  readonly eyebrow: string
  readonly title: string
  readonly description: string
  readonly outcome: string
  readonly technologies: readonly string[]
  readonly accent: 'blue' | 'coral' | 'yellow'
}

export interface EducationItem {
  readonly period: string
  readonly institution: string
  readonly qualification: string
  readonly result: string
}

export interface PortfolioContent {
  readonly identity: {
    readonly name: string
    readonly role: string
    readonly location: string
    readonly availability: string
    readonly shortBio: string
    readonly longBio: string
    readonly portraitAlt: string
    readonly portraitSrc?: string
  }
  readonly navigation: readonly NavigationItem[]
  readonly socialLinks: readonly SocialLink[]
  readonly metrics: readonly { readonly value: string; readonly label: string }[]
  readonly principles: readonly { readonly title: string; readonly description: string }[]
  readonly skills: Readonly<Record<string, readonly string[]>>
  readonly experience: readonly ExperienceItem[]
  readonly projects: readonly ProjectItem[]
  readonly education: readonly EducationItem[]
  readonly achievements: readonly string[]
  readonly domainExpertise: readonly string[]
}
