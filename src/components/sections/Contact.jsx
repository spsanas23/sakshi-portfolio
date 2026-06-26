import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return isMobile
}

const fadeInUp   = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }
const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }
const stagger    = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }

const contactInfo = [
  { icon: FiMail,   label: 'Email',    value: 'spsanas23@gmail.com',  href: 'mailto:spsanas23@gmail.com', color: '#7C3AED' },
  { icon: FiPhone,  label: 'Phone',    value: '+91 8652067301',        href: 'tel:+918652067301',          color: '#8B5CF6' },
  { icon: FiMapPin, label: 'Location', value: 'Navi Mumbai, Maharashtra', href: null,                    color: '#A78BFA' },
]

export default function Contact() {
  const isMobile = useIsMobile()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" style={{ padding: isMobile ? '5rem 1.25rem' : '7rem 2rem', backgroundColor: '#0A0A0F', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.span variants={fadeInUp} style={{ display: 'inline-block', padding: '0.3rem 1rem', borderRadius: '999px', border: '1px solid rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.06)', color: '#A78BFA', fontSize: '0.75rem', fontWeight: 600, fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em', marginBottom: '1rem' }}>GET IN TOUCH</motion.span>
          <motion.h2 variants={fadeInUp} style={{ fontSize: isMobile ? 'clamp(1.8rem, 7vw, 2.5rem)' : 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, fontFamily: 'Inter, sans-serif', color: '#F8FAFC', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>
            Let's{' '}
            <span style={{ background: 'linear-gradient(90deg, #7C3AED, #A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Connect</span>
          </motion.h2>
          <motion.p variants={fadeInUp} style={{ fontSize: '1rem', color: '#475569', fontFamily: 'Inter, sans-serif', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            Open to full-time roles, internships, and collaboration in AI, ML, or Data Science.
          </motion.p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
          {/* Left: contact info */}
          <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
              <motion.div key={label} variants={fadeInLeft} whileHover={{ y: -3, borderColor: color + '50' }}
                style={{ background: 'rgba(22,22,31,0.7)', border: '1px solid #1E1E2E', borderRadius: '14px', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', backdropFilter: 'blur(8px)', transition: 'border-color 0.3s ease' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${color}15`, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color, flexShrink: 0 }}>
                  <Icon size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.72rem', color: '#475569', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, letterSpacing: '0.08em', marginBottom: '0.2rem' }}>{label.toUpperCase()}</p>
                  {href ? (
                    <a href={href} style={{ fontSize: '0.9rem', color: '#94A3B8', fontFamily: 'Inter, sans-serif', textDecoration: 'none', fontWeight: 500 }}>{value}</a>
                  ) : (
                    <p style={{ fontSize: '0.9rem', color: '#94A3B8', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div variants={fadeInLeft} style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.5rem' }}>
              {[{ icon: FiLinkedin, href: 'https://linkedin.com/', label: 'LinkedIn', color: '#7C3AED' }, { icon: FiGithub, href: 'https://github.com/', label: 'GitHub', color: '#8B5CF6' }].map(({ icon: Icon, href, label, color }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} whileHover={{ y: -3, borderColor: color }} whileTap={{ scale: 0.95 }}
                  style={{ width: '48px', height: '48px', borderRadius: '12px', border: '1px solid #1E1E2E', background: 'rgba(22,22,31,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748B', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}>
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: CTA card */}
          <motion.div variants={fadeInUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            style={{ background: 'rgba(22,22,31,0.8)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '20px', padding: isMobile ? '2rem' : '2.5rem', backdropFilter: 'blur(12px)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #8B5CF6, transparent)' }} />
            <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>💬</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#F8FAFC', fontFamily: 'Inter, sans-serif', marginBottom: '1rem' }}>Ready to Collaborate?</h3>
            <p style={{ fontSize: '0.9rem', color: '#64748B', fontFamily: 'Inter, sans-serif', lineHeight: 1.8, marginBottom: '2rem' }}>
              I'm actively looking for opportunities in AI, ML, and Data Science. Whether it's a full-time role, internship, or a project — let's build something great together.
            </p>
            <motion.a href="mailto:spsanas23@gmail.com" whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(139,92,246,0.4)' }} whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-block', padding: '0.85rem 2rem', borderRadius: '12px', background: 'linear-gradient(135deg, #7C3AED, #8B5CF6)', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', boxShadow: '0 0 20px rgba(139,92,246,0.3)' }}>
              Send me an Email
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
