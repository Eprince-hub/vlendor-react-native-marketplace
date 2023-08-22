// Fake user authentication
export default function isUserLoggedIn(token: string | undefined) {
  return token != null && token !== '';
}
