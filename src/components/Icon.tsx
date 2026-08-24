import { ArrowUpRight, Camera, Code2, GitBranch, Link2, Mail, MapPin, Phone } from 'lucide-react'
import type { IconName } from '../data/portfolio.types'

interface IconProps {
  readonly name: IconName
  readonly size?: number
}

const iconMap = {
  arrowUpRight: ArrowUpRight,
  github: GitBranch,
  linkedin: Link2,
  mail: Mail,
  mapPin: MapPin,
  instagram: Camera,
  code: Code2,
  phone: Phone,
} as const

export function Icon({ name, size = 18 }: IconProps) {
  const IconComponent = iconMap[name]
  return <IconComponent size={size} strokeWidth={1.8} aria-hidden="true" />
}
