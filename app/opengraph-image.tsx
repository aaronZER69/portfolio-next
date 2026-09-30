import { ImageResponse } from 'next/og'

export const alt = 'Aaron Zerrouk — Étudiant en BUT MMI · Développeur Web'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#1a1714',
          color: '#f4f1ea',
          fontFamily: 'sans-serif',
        }}
      >
          <span style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 26, color: '#8892b8' }}>
            <span style={{ width: 14, height: 14, borderRadius: 999, background: '#ff3300' }} />
            <span>Disponible — alternance, stage, job étudiant</span>
          </span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <span style={{ fontSize: 120, fontWeight: 700, letterSpacing: -5, lineHeight: 1 }}>
            Aaron Zerrouk<span style={{ color: '#e8764a' }}>.</span>
            </span>
            <span style={{ fontSize: 40, color: '#c9c3b8' }}>Étudiant en BUT MMI · Développeur Web</span>
          </span>
          <span style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, color: '#8892b8' }}>
          <span>IUT Clermont Auvergne</span>
          <span>github.com/aaronZER69</span>
          </span>
      </div>
    ),
    size,
  )
}
