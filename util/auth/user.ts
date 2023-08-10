// Fake user authentication
export default function isUserLoggedIn(token: string) {
  return token != null && token !== '';
}
