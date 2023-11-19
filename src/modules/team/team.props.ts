export interface MemberType {
    slug: string,
    name: string,
    description: string,
    position: string,
    id: number,
}

export interface TeamMemberProps {
  member: MemberType,
}