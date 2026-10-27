import { ArrowDownRight, ArrowUpRight, Asterisk } from 'lucide-react'
import { ContactLinks } from '@/components/contact-links'

export default function Page() {
  return (
    <main className="calling-card">
      <header className="masthead">
        <a className="wordmark" href="#home" aria-label="Ark-Y home">ark-y<span>.</span></a>
        <a className="header-contact" href="mailto:arkycookie@gmail.com">Get in touch <ArrowUpRight size={16} aria-hidden="true" /></a>
      </header>

      <section className="introduction" id="home" aria-labelledby="name">
        <div className="identity">
          <p className="eyebrow"><Asterisk className="small-star" size={23} aria-hidden="true" /> LYRICS FIRST. MUSIC FOLLOWS.</p>
          <h1 id="name">Ark-Y<span>.</span></h1>
          <p className="occupation">Lyricist <span>&</span><br />AI Songwriter</p>
          <div className="languages" aria-label="Languages I write in">
            <span>English</span><span>Hindi</span><span>Kannada</span>
          </div>
        </div>
        <div className="record-art" aria-hidden="true">
          <div className="record">
            <div className="record-label"><span className="record-label-top">WORDS INTO MUSIC</span><span className="record-name">Ark-Y</span><span className="record-hole" /><span className="record-label-bottom">LYRICIST & AI SONGWRITER</span></div>
          </div>
          <span className="record-caption">MY WORDS. MY SONGS.</span>
        </div>
      </section>

      <section className="about" aria-labelledby="about-heading">
        <h2 className="section-label" id="about-heading">A LITTLE ABOUT ME <ArrowDownRight size={20} aria-hidden="true" /></h2>
        <div className="about-copy">
          <p>I write my own lyrics in <strong>English, Hindi, and Kannada.</strong> I use SUNO to create my own songs, with my lyrics as the spine and words of every song.</p>
        </div>
      </section>
      <ContactLinks />
      <footer><span>Ark-Y · Lyricist & AI Songwriter</span><span>Words at the heart of it all.</span></footer>
    </main>
  )
}
