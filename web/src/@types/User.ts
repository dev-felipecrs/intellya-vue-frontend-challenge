export type User = {
  id: number
  name: string
  email: string
  role: 'member' | 'admin'
  active: boolean
  created_at: string
}
