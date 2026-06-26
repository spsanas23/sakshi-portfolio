import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FiAward, FiBook, FiStar } from 'react-icons/fi'

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
const stagger    = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }

const educationData = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Artificial Intelligence & Data Science',
    institution: 'Datta Meghe College of Engineering',
    location: 'Airoli, Navi Mumbai',
    year: '2022 – 2026',
    result: '6.8 CGPA',
    resultRaw: '61.32%',
    resultLabel: 'CGPA',
    highlight: false,
    icon: '🎓',
    color: '#7C3AED',
    badge: 'First Class',
    description: 'Specialized in AI, Machine Learning, NLP, and Cybersecurity. Built real-world projects including a ZTNA security framework and AI chatbot with web interface.',
  },
  {
    degree: 'HSC – Science',
    field: 'Higher Secondary Certificate',
    institution: 'Vidyalankar Tie-up with S.S High & Junior College',
    location: 'Seawoods',
    year: '2020 – 2022',
    result: '73.83%',
    resultRaw: null,
    resultLabel: 'Score',
    highlight: true,
    icon: '📘',
    color: '#8B5CF6',
    badge: 'Distinction',
    description: 'Completed Science stream with a strong foundation in Mathematics, Physics, and Computer Science — igniting a passion for technology.',
  },
  {
    degree: 'SSC – Secondary School',
    field: 'Secondary School Certificate',
    institution: 'Fr. Agnel Multipurpose High School',
    location: 'Vashi',
    year: '2019 – 2020',
    result: '82.0%',
    resultRaw: null,
    resultLabel: 'Score',
    highlight: true,
    icon: '📗',
    color: '#A78BFA',
    badge: 'First Class',
    description: 'Graduated with 82%, demonstrating consistent academic excellence and a solid foundation across all core subjects.',
  },
]

export default function Education() {
  const isMobile = useIsMobile()
  const titleRef = useRef(null)
  const cardsRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })
  const cardsInView = useInView(cardsRef, { once: true, margin: '-80px' })

  return (
    <section id="education" style={{ padding: isMobile ? '5rem 1.25rem' : '7rem 2rem', backgroundColor: '#0A0A0F', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '30%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <motion.div ref={titleRef} variants={stagger} initial="hidden" animate={titleInView ? 'visible' : 'hidden'} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.span variants={fadeInUp} style={{ display: 'inline-block', padding: '0.3rem 1rem', borderRadius: '999px', border: '1px solid rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.06)', color: '#A78BFA', fontSize: '0.75rem', fontWeight: 600, fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em', marginBottom: '1rem' }}>
            EDUCATION
          </motion.span>
          <motion.h2 variants={fadeInUp} style={{ fontSize: isMobile ? 'clamp(1.8rem, 7vw, 2.5rem)' : 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, fontFamily: 'Inter, sans-serif', color: '#F8FAFC', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>
            Academic{' '}
            <span style={{ background: 'linear-gradient(90deg, #7C3AED, #A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Journey</span>
          </motion.h2>
          <motion.p variants={fadeInUp} style={{ fontSize: '1rem', color: '#475569', fontFamily: 'Inter, sans-serif', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Strong academic foundation complemented by hands-on projects in Data Analytics, Machine Learning, and Cybersecurity.
          </motion.p>
        </motion.div>

        <motion.div ref={cardsRef} variants={stagger} initial="hidden" animate={cardsInView ? 'visible' : 'hidden'} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
          {!isMobile && (
            <div style={{ position: 'absolute', left: '50%', top: '2rem', bottom: '2rem', width: '1px', background: 'linear-gradient(to bottom, transparent, #1E1E2E 10%, #1E1E2E 90%, transparent)', transform: 'translateX(-50%)', zIndex: 0 }} />
          )}

          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0
            return (
              <motion.div key={index} variants={fadeInLeft}
                style={{ display: isMobile ? 'block' : 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 60px 1fr', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                {!isMobile && (
                  <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '2rem' }}>
                    {isLeft ? <EduCard edu={edu} isMobile={isMobile} inView={cardsInView} /> : <div />}
                  </div>
                )}
                {!isMobile && (
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <motion.div whileHover={{ scale: 1.3 }}
                      style={{ width: '44px', height: '44px', borderRadius: '50%', background: `${edu.color}20`, border: `2px solid ${edu.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', boxShadow: `0 0 20px ${edu.color}40`, flexShrink: 0 }}>
                      {edu.icon}
                    </motion.div>
                  </div>
                )}
                {!isMobile && (
                  <div style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '2rem' }}>
                    {!isLeft ? <EduCard edu={edu} isMobile={isMobile} inView={cardsInView} /> : <div />}
                  </div>
                )}
                {isMobile && <EduCard edu={edu} isMobile={isMobile} inView={cardsInView} />}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Summary bar */}
        <motion.div variants={fadeInUp} initial="hidden" animate={cardsInView ? 'visible' : 'hidden'}
          style={{ marginTop: '3.5rem', display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: '1rem' }}>
          {[
            { icon: <FiStar size={18} />, label: 'SSC Score', value: '82%', color: '#A78BFA', highlight: true },
            { icon: <FiBook size={18} />, label: 'HSC Score', value: '73.83%', color: '#8B5CF6', highlight: true },
            { icon: <FiAward size={18} />, label: 'B.E. CGPA', value: '6.8', color: '#7C3AED', highlight: true },
          ].map(({ icon, label, value, color, highlight }) => (
            <motion.div key={label} whileHover={{ y: -4, borderColor: color }}
              style={{ background: 'rgba(22,22,31,0.7)', border: `1px solid ${highlight ? color + '50' : '#1E1E2E'}`, borderRadius: '14px', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', backdropFilter: 'blur(8px)', transition: 'border-color 0.3s ease', position: 'relative', overflow: 'hidden' }}>
              {highlight && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />}
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${color}15`, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color, flexShrink: 0 }}>
                {icon}
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#475569', fontFamily: 'Inter, sans-serif', fontWeight: 500, marginBottom: '0.2rem' }}>{label}</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'Inter, sans-serif', color: highlight ? color : '#F8FAFC', lineHeight: 1 }}>
                  {value}
                  {highlight && <span style={{ fontSize: '0.65rem', color, fontWeight: 600, marginLeft: '4px', verticalAlign: 'middle' }}>★</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function EduCard({ edu, isMobile, inView }) {
  return (
    <motion.div whileHover={{ y: -6, borderColor: edu.color + '60' }}
      style={{ background: 'rgba(22,22,31,0.8)', border: '1px solid #1E1E2E', borderRadius: '20px', padding: isMobile ? '1.4rem' : '1.75rem', backdropFilter: 'blur(12px)', position: 'relative', overflow: 'hidden', width: '100%', maxWidth: isMobile ? '100%' : '420px', transition: 'border-color 0.3s ease' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(90deg, transparent, ${edu.color}, transparent)` }} />

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {isMobile && (
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${edu.color}15`, border: `1px solid ${edu.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>
              {edu.icon}
            </div>
          )}
          <div>
            <h3 style={{ fontSize: isMobile ? '0.95rem' : '1.05rem', fontWeight: 700, color: '#F8FAFC', fontFamily: 'Inter, sans-serif', lineHeight: 1.3, margin: 0 }}>{edu.degree}</h3>
            <p style={{ fontSize: '0.8rem', color: edu.color, fontFamily: 'Inter, sans-serif', fontWeight: 500, margin: '0.2rem 0 0' }}>{edu.field}</p>
          </div>
        </div>
        <span style={{ display: 'inline-block', padding: '0.2rem 0.7rem', borderRadius: '999px', background: `${edu.color}18`, border: `1px solid ${edu.color}40`, color: edu.color, fontSize: '0.65rem', fontWeight: 700, fontFamily: 'Inter, sans-serif', letterSpacing: '0.08em', whiteSpace: 'nowrap', flexShrink: 0 }}>
          {edu.badge}
        </span>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <p style={{ fontSize: '0.85rem', color: '#94A3B8', fontFamily: 'Inter, sans-serif', fontWeight: 500, marginBottom: '0.2rem' }}>{edu.institution}</p>
        <p style={{ fontSize: '0.78rem', color: '#475569', fontFamily: 'Inter, sans-serif' }}>📍 {edu.location} &nbsp;·&nbsp; 📅 {edu.year}</p>
      </div>

      <p style={{ fontSize: '0.82rem', color: '#475569', fontFamily: 'Inter, sans-serif', lineHeight: 1.7, marginBottom: '1.25rem' }}>{edu.description}</p>

      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.45rem 1rem', borderRadius: '10px', background: edu.highlight ? `linear-gradient(135deg, ${edu.color}25, ${edu.color}10)` : 'rgba(124,58,237,0.08)', border: `1px solid ${edu.highlight ? edu.color + '50' : 'rgba(124,58,237,0.2)'}` }}>
        <span style={{ fontSize: '0.7rem', color: '#64748B', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, letterSpacing: '0.08em' }}>{edu.resultLabel}</span>
        <span style={{ width: '1px', height: '12px', background: '#1E1E2E' }} />
        <span style={{ fontSize: '1.1rem', fontWeight: 800, fontFamily: 'Inter, sans-serif', color: edu.highlight ? edu.color : '#F8FAFC' }}>{edu.result}</span>
        {edu.highlight && <span style={{ fontSize: '0.9rem' }}>⭐</span>}
      </div>
    </motion.div>
  )
}
