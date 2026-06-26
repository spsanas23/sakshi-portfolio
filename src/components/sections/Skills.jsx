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
const stagger  = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

const skillGroups = [
  {
    category: 'Programming Languages',
    color: '#7C3AED',
    skills: ['Python', 'C', 'C++'],
  },
  {
    category: 'Web Development',
    color: '#8B5CF6',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'ML & Data Science',
    color: '#A78BFA',
    skills: ['scikit-learn', 'NLTK', 'Pandas', 'NumPy', 'Matplotlib', 'Generative AI', 'Predictive Modeling'],
  },
  {
    category: 'Database',
    color: '#6366F1',
    skills: ['SQL', 'MySQL'],
  },
  {
    category: 'Tools & Platforms',
    color: '#7C3AED',
    skills: ['Power BI', 'GitHub', 'VS Code', 'Microsoft Azure', 'AWS'],
  },
  {
    category: 'Core Areas',
    color: '#8B5CF6',
    skills: ['Machine Learning', 'NLP', 'Sentiment Analysis', 'Recommendation Systems', 'Cybersecurity (ZTNA)', 'Data Analysis'],
  },
]

const certifications = [
  { title: 'Business Intelligence using Power BI', org: 'Skill Nation', icon: '📊' },
  { title: 'Python using AI', org: 'AI for Techies', icon: '🤖' },
  { title: 'Python Basic Level-I Certification', org: 'University of Mumbai', icon: '🐍' },
  { title: 'Web Development Workshop Series', org: 'SHAIDS, Datta Meghe', icon: '🌐' },
  { title: 'AI Tools Workshop', org: 'Skill Nation', icon: '⚡' },
]

export default function Skills() {
  const isMobile = useIsMobile()
  const titleRef = useRef(null)
  const skillsRef = useRef(null)
  const certsRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })
  const skillsInView = useInView(skillsRef, { once: true, margin: '-80px' })
  const certsInView = useInView(certsRef, { once: true, margin: '-80px' })

  return (
    <section id="skills" style={{ padding: isMobile ? '5rem 1.25rem' : '7rem 2rem', backgroundColor: '#0A0A0F', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <motion.div ref={titleRef} variants={stagger} initial="hidden" animate={titleInView ? 'visible' : 'hidden'} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.span variants={fadeInUp} style={{ display: 'inline-block', padding: '0.3rem 1rem', borderRadius: '999px', border: '1px solid rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.06)', color: '#A78BFA', fontSize: '0.75rem', fontWeight: 600, fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em', marginBottom: '1rem' }}>SKILLS</motion.span>
          <motion.h2 variants={fadeInUp} style={{ fontSize: isMobile ? 'clamp(1.8rem, 7vw, 2.5rem)' : 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, fontFamily: 'Inter, sans-serif', color: '#F8FAFC', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>
            
            <span style={{ background: 'linear-gradient(90deg, #7C3AED, #A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tech Arsenal</span>
          </motion.h2>
          <motion.p variants={fadeInUp} style={{ fontSize: '1rem', color: '#475569', fontFamily: 'Inter, sans-serif', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            The technologies, tools, and frameworks I use to turn ideas into intelligent, data-driven solutions.
          </motion.p>
        </motion.div>

        <motion.div ref={skillsRef} variants={stagger} initial="hidden" animate={skillsInView ? 'visible' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
          {skillGroups.map(({ category, color, skills }) => (
            <motion.div key={category} variants={fadeInUp} whileHover={{ y: -4, borderColor: color + '50' }}
              style={{ background: 'rgba(22,22,31,0.7)', border: '1px solid #1E1E2E', borderRadius: '16px', padding: '1.5rem', backdropFilter: 'blur(8px)', transition: 'border-color 0.3s ease', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(90deg, transparent, ${color}40, transparent)` }} />
              <h4 style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color, fontWeight: 700, letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>{category}</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.map(skill => (
                  <motion.span key={skill} whileHover={{ scale: 1.05 }}
                    style={{ padding: '0.3rem 0.75rem', borderRadius: '8px', background: `${color}10`, border: `1px solid ${color}25`, color: '#94A3B8', fontSize: '0.82rem', fontFamily: 'Inter, sans-serif', fontWeight: 500, cursor: 'default', transition: 'background 0.2s' }}>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div ref={certsRef} variants={stagger} initial="hidden" animate={certsInView ? 'visible' : 'hidden'}>
          <motion.h3 variants={fadeInUp} style={{ fontSize: '1.1rem', fontWeight: 700, color: '#94A3B8', fontFamily: 'Inter, sans-serif', marginBottom: '1.5rem', textAlign: 'center', letterSpacing: '-0.01em' }}>
            Certifications & Training
          </motion.h3>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
            {certifications.map((cert) => (
              <motion.div key={cert.title} variants={fadeInUp} whileHover={{ y: -3, borderColor: 'rgba(139,92,246,0.4)' }}
                style={{ background: 'rgba(22,22,31,0.6)', border: '1px solid #1E1E2E', borderRadius: '12px', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', backdropFilter: 'blur(8px)', transition: 'border-color 0.3s ease' }}>
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{cert.icon}</span>
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#E2E8F0', fontFamily: 'Inter, sans-serif', marginBottom: '0.2rem', lineHeight: 1.4 }}>{cert.title}</p>
                  <p style={{ fontSize: '0.75rem', color: '#475569', fontFamily: 'Inter, sans-serif' }}>{cert.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
