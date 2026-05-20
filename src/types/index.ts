export type ProjectStatus = 'completed' | 'ongoing'

export type ProjectCategory =
  | 'fullstack'
  | 'api-integration'
  | 'frontend'
  | 'clone'
  | 'collaborative'

export type Project = {
  slug: string
  name: string
  tagline: string
  problemStatement: string
  motivation: string
  whatItAchieves: string
  learnings: string[]
  status: ProjectStatus
  isHighlight: boolean
  tech: string[]
  image: string
  links: {
    github?: string
    live?: string
  }
  category: ProjectCategory
}