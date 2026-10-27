import { ArrowUpRight } from 'lucide-react'
import { ContactLinks } from '@/components/contact-links'

export default function Page() {
  return (
    <main className="calling-card" id="home">
      <header className="masthead">
        <a className="wordmark" href="#home" aria-label="Ark-Y home">Ark-Y<span>.</span></a>
        <a className="header-contact" href="mailto:arkycookie@gmail.com">Get in touch <ArrowUpRight size={16} aria-hidden="true" /></a>
      </header>
      <section className="introduction" aria-labelledby="headline">
        <div className="identity">
          <p className="eyebrow">ARK-Y <span aria-hidden="true">/</span> LYRICIST & AI SONGWRITER</p>
          <h1 id="headline">Somewhere between a <span className="love">love song</span> and a <span className="revolution">revolution</span></h1>
          <div className="languages" aria-label="Languages I write in"><span>English</span><span>Hindi</span><span>Kannada</span></div>
        </div>
      </section>
      <div className="details">
        <section className="about" aria-labelledby="about-heading">
          <h2 className="section-label" id="about-heading">THE WORDS COME FIRST</h2>
          <p>I write my own lyrics in <strong>English, Hindi, and Kannada.</strong> I use SUNO to write my own songs, using my lyrics as the spine and words for the song.</p>
        </section>
        <ContactLinks />
      </div>
      <footer><span>Ark-Y · Lyricist & AI Songwriter</span><span>Words at the heart of it all.</span></footer>
    </main>
  )
}
