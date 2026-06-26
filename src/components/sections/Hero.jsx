import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return isMobile
}

const socialLinks = [
  { icon: FiGithub,   href: 'https://github.com/',         label: 'GitHub'   },
  { icon: FiLinkedin, href: 'https://linkedin.com/',       label: 'LinkedIn' },
  { icon: FiMail,     href: 'mailto:spsanas23@gmail.com',  label: 'Email'    },
]

const roles = ['AI & ML Engineer', 'Data Science Graduate', 'NLP Enthusiast', 'Cybersecurity Builder']

export default function Hero() {
  const isMobile = useIsMobile()
  const canvasRef = useRef(null)
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2800)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    const particles = []
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    const count = window.innerWidth < 768 ? 40 : 80
    for (let i = 0; i < count; i++) {
      particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, dx: (Math.random() - 0.5) * 0.4, dy: (Math.random() - 0.5) * 0.4, r: Math.random() * 1.5 + 0.5 })
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(139,92,246,0.4)'; ctx.fill()
      })
      particles.forEach((p, i) => particles.slice(i + 1).forEach(q => {
        const d = Math.hypot(p.x - q.x, p.y - q.y)
        if (d < 120) {
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y)
          ctx.strokeStyle = `rgba(139,92,246,${0.12 * (1 - d / 120)})`; ctx.lineWidth = 0.5; ctx.stroke()
        }
      }))
      animId = requestAnimationFrame(draw)
    }
    draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0A0A0F', position: 'relative', overflow: 'hidden', padding: isMobile ? '5rem 1.25rem 3rem' : '0 2rem' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: isMobile ? '300px' : '600px', height: isMobile ? '300px' : '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%', maxWidth: '780px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 1rem', borderRadius: '999px', border: '1px solid rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.06)', marginBottom: '1.5rem' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', display: 'inline-block', boxShadow: '0 0 8px #8B5CF6' }} />
          <span style={{ color: '#A78BFA', fontSize: '0.75rem', fontFamily: 'Inter, sans-serif', fontWeight: 600, letterSpacing: '0.1em' }}>OPEN TO OPPORTUNITIES</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontSize: isMobile ? 'clamp(2.2rem, 10vw, 3rem)' : 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 900, fontFamily: 'Inter, sans-serif', color: '#F8FAFC', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '1rem' }}>
          Sakshi{' '}
          <span style={{ background: 'linear-gradient(90deg, #7C3AED, #A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Sanas</span>
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: isMobile ? '1.05rem' : '1.3rem', fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#8B5CF6', marginBottom: '1.5rem', minHeight: '2rem' }}>
          <motion.span key={roleIdx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
            {roles[roleIdx]}
          </motion.span>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          style={{ fontSize: isMobile ? '0.95rem' : '1.05rem', color: '#64748B', fontFamily: 'Inter, sans-serif', lineHeight: 1.8, maxWidth: '580px', margin: '0 auto 2.5rem' }}>
          Final-year AI & Data Science graduate passionate about building intelligent systems — from NLP chatbots to Zero Trust cybersecurity frameworks.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <motion.a href="#projects" whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(139,92,246,0.5)' }} whileTap={{ scale: 0.97 }}
            style={{ padding: '0.75rem 1.75rem', borderRadius: '12px', background: 'linear-gradient(135deg, #7C3AED, #8B5CF6)', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', boxShadow: '0 0 20px rgba(139,92,246,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}>
            View Projects
          </motion.a>
          <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            style={{ padding: '0.75rem 1.75rem', borderRadius: '12px', background: 'transparent', color: '#94A3B8', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', border: '1px solid #1E1E2E' }}>
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem' }}>
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              whileHover={{ y: -3, borderColor: '#8B5CF6' }} whileTap={{ scale: 0.95 }}
              style={{ width: '44px', height: '44px', borderRadius: '12px', border: '1px solid #1E1E2E', background: 'rgba(22,22,31,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748B', textDecoration: 'none', transition: 'border-color 0.2s' }}>
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ fontSize: '0.65rem', fontFamily: 'Inter, sans-serif', letterSpacing: '0.2em', fontWeight: 600, color: '#334155' }}>SCROLL DOWN</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <FiArrowDown size={16} color="#334155" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
