// googleAnalytics.js
import ReactGA from "react-ga"
 
export const initGA = () => {
  ReactGA.initialize("G-E5Y6M7R8P3")
}
 
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
