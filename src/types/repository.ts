export interface Repository {
    name: string
    language: string
    size: string
    visibility: 'Public' | 'Private'
    updatedAt: string
  }
  
  export interface SidebarLink {
    name: string
    icon: React.ComponentType
    href: string
    isActive?: boolean
  }
  
  