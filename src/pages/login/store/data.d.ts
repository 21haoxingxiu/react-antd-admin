export interface LoginFormData {
  username: string
  password: string
}

export interface LoginResult {
  data: {
    access_token: string
  }
}

export interface LoginType {
  enterLoading: boolean
}
