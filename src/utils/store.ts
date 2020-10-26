const TokenKey = 'admin_token'

export function getToken() {
  return sessionStorage.getItem(TokenKey)
}

export function setToken(token: string) {
  return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return sessionStorage.setItem(TokenKey, '')
}
