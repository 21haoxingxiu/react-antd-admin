/** user's role */
export type Role = 'guest' | 'admin'

export interface LoginParams {
  username: string
  password: string,
  scope: string,
  grant_type: string,
}

export interface LoginResult {
  /** auth token */
  token: string
  username: string
  role: Role
}

export interface UserParams {
  token: string
}

export interface UserResult {}

export interface LogoutParams {
  token: string
}

export interface LogoutResult {}
