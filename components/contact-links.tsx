import { ArrowUpRight, Mail } from 'lucide-react'

export function ContactLinks() {
  return (
    <section className="contact" aria-labelledby="contact-heading">
      <h2 className="section-label" id="contact-heading">LET’S CONNECT</h2>
      <div className="contact-links">
        <a className="email-link" href="mailto:arkycookie@gmail.com"><Mail size={19} aria-hidden="true" /><span>arkycookie@gmail.com</span><ArrowUpRight size={20} aria-hidden="true" /></a>
        <div className="website-links">
          <a href="https://abhijitraj.com" target="_blank" rel="noopener noreferrer">abhijitraj.com<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          <a href="https://arkycookie.com" target="_blank" rel="noopener noreferrer">arkycookie.com<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
        </div>
      </div>
    </section>
  )
}
