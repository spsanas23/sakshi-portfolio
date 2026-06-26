import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return isMobile
}

const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }
const stagger  = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }

const certifications = [
  {
    title:      'Business Intelligence using Power BI',
    issuer:     'Skill Nation',
    desc:       'Data visualisation, dashboards, business analytics',
    icon:       '📊',
    color:      '#7C3AED',
    highlights: ['Power BI', 'Dashboards', 'Analytics'],
  },
  {
    title:      'Python using AI',
    issuer:     'AI for Techies',
    desc:       'Python applications in Artificial Intelligence and automation',
    icon:       '🤖',
    color:      '#8B5CF6',
    highlights: ['Python', 'AI', 'Automation'],
  },
  {
    title:      'Python Basic Level-I Certification',
    issuer:     'University of Mumbai',
    desc:       'Core Python programming and problem-solving',
    icon:       '🐍',
    color:      '#7C3AED',
    highlights: ['Python', 'Problem Solving', 'Programming'],
  },
  {
    title:      'Web Development Workshop Series',
    issuer:     'SHAIDS, Datta Meghe College of Engineering',
    desc:       'Frontend & backend fundamentals',
    icon:       '🌐',
    color:      '#8B5CF6',
    highlights: ['Frontend', 'Backend', 'Web Dev'],
  },
  {
    title:      'AI Tools Workshop',
    issuer:     'Skill Nation',
    desc:       'Modern AI tools and productivity applications',
    icon:       '⚡',
    color:      '#A78BFA',
    highlights: ['AI Tools', 'Productivity', 'Modern AI'],
  },
]

export default function Certifications() {
  const isMobile  = useIsMobile()
  const titleRef  = useRef(null)
  const cardsRef  = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })
  const cardsInView = useInView(cardsRef, { once: true, margin: '-80px' })

  return (
    <section id="certifications" style={{ padding: isMobile ? '5rem 1.25rem' : '7rem 2rem', backgroundColor: '#0A0A0F', position: 'relative', overflow: 'hidden' }}>

      {/* Background glow — same as Projects */}
      <div style={{ position: 'absolute', top: '50%', left: '-10%', transform: 'translateY(-50%)', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Title — exact same as Projects */}
        <motion.div ref={titleRef} variants={stagger} initial="hidden" animate={titleInView ? 'visible' : 'hidden'} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.span variants={fadeInUp} style={{ display: 'inline-block', padding: '0.3rem 1rem', borderRadius: '999px', border: '1px solid rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.06)', color: '#A78BFA', fontSize: '0.75rem', fontWeight: 600, fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em', marginBottom: '1rem' }}>
            CERTIFICATIONS
          </motion.span>
          <motion.h2 variants={fadeInUp} style={{ fontSize: isMobile ? 'clamp(1.8rem, 7vw, 2.5rem)' : 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, fontFamily: 'Inter, sans-serif', color: '#F8FAFC', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>
            What I've{' '}
            <span style={{ background: 'linear-gradient(90deg, #7C3AED, #A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Earned</span>
          </motion.h2>
          <motion.p variants={fadeInUp} style={{ fontSize: '1rem', color: '#475569', fontFamily: 'Inter, sans-serif', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Continuously upskilling through industry-recognized certifications and hands-on workshops.
          </motion.p>
        </motion.div>

        {/* Cards — exact same card style as Projects */}
        <motion.div ref={cardsRef} variants={stagger} initial="hidden" animate={cardsInView ? 'visible' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {certifications.map((cert) => (
            <motion.div key={cert.title} variants={fadeInUp} whileHover={{ y: -8, borderColor: cert.color + '60' }}
              style={{ background: 'rgba(22,22,31,0.8)', border: '1px solid #1E1E2E', borderRadius: '20px', padding: '1.75rem', backdropFilter: 'blur(12px)', position: 'relative', overflow: 'hidden', transition: 'border-color 0.3s ease', display: 'flex', flexDirection: 'column' }}>

              {/* Top gradient line — same as Projects */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }} />

              {/* Emoji Icon */}
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{cert.icon}</div>

              {/* Title */}
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F8FAFC', fontFamily: 'Inter, sans-serif', marginBottom: '0.3rem', lineHeight: 1.4 }}>{cert.title}</h3>

              {/* Issuer */}
              <p style={{ fontSize: '0.75rem', color: cert.color, fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.05em' }}>{cert.issuer}</p>

              {/* Description */}
              <p style={{ fontSize: '0.88rem', color: '#64748B', fontFamily: 'Inter, sans-serif', lineHeight: 1.75, marginBottom: '1.25rem', flex: 1 }}>{cert.desc}</p>

              {/* Highlight tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {cert.highlights.map(h => (
                  <span key={h} style={{ padding: '0.2rem 0.65rem', borderRadius: '999px', background: `${cert.color}12`, border: `1px solid ${cert.color}30`, color: cert.color, fontSize: '0.7rem', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>{h}</span>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
