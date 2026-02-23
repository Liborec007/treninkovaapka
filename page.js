'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => { setLoaded(true) }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <>
      <style>{`
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          position: relative;
          overflow: hidden;
          max-width: 600px;
          margin: 0 auto;
        }

        .page::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,229,160,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,160,0.02) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        .glow {
          position: fixed;
          width: 500px;
          height: 500px;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(0,229,160,0.06) 0%, transparent 70%);
          pointer-events: none;
          animation: breathe 4s ease-in-out infinite;
        }

        @keyframes breathe {
          0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade { opacity: 0; }
        .fade.show { animation: fadeUp 0.8s ease forwards; }

        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.3s; }
        .d3 { animation-delay: 0.5s; }
        .d4 { animation-delay: 0.7s; }
        .d5 { animation-delay: 0.9s; }
        .d6 { animation-delay: 1.1s; }

        /* Logo bars */
        .logo-bars {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          margin-bottom: 24px;
          position: relative;
        }

        .bar {
          width: 28px;
          border-radius: 6px;
        }

        .bar-1 { height: 44px; background: linear-gradient(to top, #1a3a2a, #2a6b4a); }
        .bar-2 { height: 64px; background: linear-gradient(to top, #1a5a3a, #00a070); }
        .bar-3 { height: 88px; background: linear-gradient(to top, #00905a, #00d494); }
        .bar-4 { height: 116px; background: linear-gradient(to top, #00c488, #00e5a0); }
        .bar-5 {
          height: 148px;
          background: linear-gradient(to top, #00e5a0, #5cffca);
          box-shadow: 0 0 24px rgba(0,229,160,0.25);
        }

        .arrow {
          position: absolute;
          right: -30px;
          top: -24px;
        }
        .arrow-line {
          width: 3px;
          height: 36px;
          background: #00e5a0;
          border-radius: 2px;
          margin: 0 auto;
          box-shadow: 0 0 8px rgba(0,229,160,0.4);
        }
        .arrow-head {
          width: 0; height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 12px solid #00e5a0;
          margin: 0 auto 4px;
          filter: drop-shadow(0 0 4px rgba(0,229,160,0.4));
        }

        /* Brand */
        .brand {
          font-size: 36px;
          font-weight: 700;
          letter-spacing: -1.5px;
          text-align: center;
        }
        .brand .ac { color: #00e5a0; }

        .sub {
          font-size: 13px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(0,229,160,0.45);
          margin-top: 6px;
          font-weight: 600;
          text-align: center;
        }

        .divider {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00e5a0, transparent);
          margin: 36px 0;
          opacity: 0.4;
        }

        /* Coming soon */
        .coming {
          font-size: 14px;
          letter-spacing: 6px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          font-weight: 700;
          margin-bottom: 12px;
        }

        .headline {
          font-size: 28px;
          font-weight: 700;
          text-align: center;
          line-height: 1.3;
          margin-bottom: 8px;
        }
        .headline em {
          font-style: normal;
          color: #00e5a0;
        }

        .desc {
          font-size: 15px;
          color: rgba(255,255,255,0.45);
          text-align: center;
          line-height: 1.6;
          max-width: 360px;
          margin-bottom: 32px;
        }

        /* Features */
        .features {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 36px;
        }
        .feat {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          font-size: 13px;
          color: rgba(255,255,255,0.5);
        }

        /* Email form */
        .form-wrap {
          width: 100%;
          max-width: 380px;
        }

        .email-form {
          display: flex;
          gap: 8px;
        }
        .email-input {
          flex: 1;
          padding: 14px 16px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          color: #f0f0f5;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }
        .email-input:focus { border-color: #00e5a0; }
        .email-input::placeholder { color: rgba(255,255,255,0.2); }

        .submit-btn {
          padding: 14px 24px;
          background: #00e5a0;
          color: #0a0a0f;
          border: none;
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .submit-btn:hover { filter: brightness(1.1); transform: translateY(-1px); }

        .success {
          text-align: center;
          padding: 16px;
          background: rgba(0,229,160,0.08);
          border: 1px solid rgba(0,229,160,0.2);
          border-radius: 12px;
          color: #00e5a0;
          font-size: 14px;
          font-weight: 600;
        }

        .note {
          font-size: 12px;
          color: rgba(255,255,255,0.2);
          margin-top: 12px;
          text-align: center;
        }

        /* Footer */
        .footer {
          margin-top: 48px;
          font-size: 12px;
          color: rgba(255,255,255,0.15);
          text-align: center;
        }

        /* Particles */
        .particle {
          position: fixed;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(0,229,160,0.25);
          animation: float 6s ease-in-out infinite;
          pointer-events: none;
        }
        .p1 { top: 12%; left: 10%; animation-delay: 0s; }
        .p2 { top: 20%; right: 15%; animation-delay: 1.5s; }
        .p3 { bottom: 30%; left: 18%; animation-delay: 3s; }
        .p4 { bottom: 20%; right: 12%; animation-delay: 0.8s; width: 4px; height: 4px; }

        @keyframes float {
          0%, 100% { opacity: 0.15; transform: translateY(0); }
          50% { opacity: 0.5; transform: translateY(-12px); }
        }

        @media (min-width: 500px) {
          .brand { font-size: 44px; }
          .headline { font-size: 34px; }
          .bar { width: 34px; }
          .bar-1 { height: 52px; }
          .bar-2 { height: 76px; }
          .bar-3 { height: 104px; }
          .bar-4 { height: 136px; }
          .bar-5 { height: 172px; }
        }
      `}</style>

      <div className="glow" />
      <div className="particle p1" />
      <div className="particle p2" />
      <div className="particle p3" />
      <div className="particle p4" />

      <div className="page">
        {/* Logo */}
        <div className={`fade ${loaded ? 'show' : ''} d1`}>
          <div className="logo-bars">
            <div className="bar bar-1" />
            <div className="bar bar-2" />
            <div className="bar bar-3" />
            <div className="bar bar-4" />
            <div className="bar bar-5" />
            <div className="arrow">
              <div className="arrow-head" />
              <div className="arrow-line" />
            </div>
          </div>
        </div>

        {/* Brand */}
        <div className={`fade ${loaded ? 'show' : ''} d2`}>
          <div className="brand">Trénink<span className="ac">ová</span>Appka</div>
          <div className="sub">Tvůj AI fitness partner</div>
        </div>

        <div className={`divider fade ${loaded ? 'show' : ''} d3`} />

        {/* CTA */}
        <div className={`fade ${loaded ? 'show' : ''} d3`}>
          <div className="coming">Coming Soon</div>
        </div>

        <div className={`fade ${loaded ? 'show' : ''} d4`}>
          <div className="headline">Chceš změnit svůj život?<br />Začni <em>tréninkem</em>.</div>
          <div className="desc">
            Chytrá appka, která hlídá tvou progresi, doporučuje váhy
            a nedovolí ti stagnovat. S AI coachingem budeš silnější každý týden.
          </div>
        </div>

        {/* Features */}
        <div className={`features fade ${loaded ? 'show' : ''} d4`}>
          <div className="feat">🏋️ Smart tréninky</div>
          <div className="feat">🤖 AI coaching</div>
          <div className="feat">📈 Sledování progrese</div>
          <div className="feat">🍽️ Jídelníček</div>
          <div className="feat">⌚ Garmin & wearables</div>
          <div className="feat">🎵 Spotify</div>
        </div>

        {/* Email signup */}
        <div className={`form-wrap fade ${loaded ? 'show' : ''} d5`}>
          {submitted ? (
            <div className="success">
              ✅ Díky! Dáme ti vědět jako prvnímu.
            </div>
          ) : (
            <form className="email-form" onSubmit={handleSubmit}>
              <input
                className="email-input"
                type="email"
                placeholder="Tvůj email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="submit-btn" type="submit">Chci vědět první →</button>
            </form>
          )}
          <div className="note">Žádný spam. Jen oznámení o spuštění.</div>
        </div>

        {/* Footer */}
        <div className={`footer fade ${loaded ? 'show' : ''} d6`}>
          © 2026 TréninkovéAppka · treninkovaapka.cz
        </div>
      </div>
    </>
  )
}
