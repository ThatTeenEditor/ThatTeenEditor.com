import { useState, useEffect } from "react";

const CONTACT = {
  email: "ThatTeenEditor0@gmail.com",
  whatsapp: "https://wa.me/2349154603329",
  tiktok: "https://tiktok.com/@thatteeneditor",
  selar: "https://selar.com/showlove/thatteeneditor",
};

const PAIN_POINTS = [
  "Scrolling through tutorials that go nowhere?",
  "Editing for free hoping someone notices you?",
  "Watching others get paid while you're still figuring it out?",
  "Stuck with zero clients, zero income, zero direction?",
];

const TESTIMONIALS = [
  { name: "Lateefat", text: "You are good in teaching — let's say excellent. I grabbed everything easily. I can edit more by myself now, even without using templates.", gained: "Sounds, filters, volume control", emoji: "✨", type: "program" },
  { name: "Janet", text: "My editing skills, confidence, and understanding of how edits are put together improved. I'm more confident now and I can edit clean videos without stress.", gained: "Transitions, sounds, voiceover", emoji: "💪", type: "program" },
  { name: "Celestine", text: "Edit to Earn was a game changer for me. I went from knowing almost nothing about editing to actually creating videos I'm proud of. This class is worth every second.", gained: "Filters, effects, text animations, transitions, sounds and voiceover", emoji: "🔥", type: "program" },
  { name: "Barakat", text: "My editing level before the class was ZERO. Those CapCut tools looked strange before — but now I can fight war with it! I now find myself telling my friends to send their daily vlogs to me.", gained: "CapCut tools, sound, text and confidence", emoji: "😂", type: "program" },
  { name: "Lase", text: "Before joining, I was a complete beginner. Now my timeline is cleaner, I understand pacing, transitions, and how to tell a story inside a reel. I actually finish edits now — and they look professional.", gained: "Audio mixing, storytelling, transitions", emoji: "🎬", type: "program" },
  { name: "Gon", text: "It's the best editing class I've attended so far. I've seen so many results and changes in myself. Your teaching style is exceptionally brilliant and easy to understand.", gained: "Pace, no dead space, overall editing skills", emoji: "⚡", type: "program" },
  { name: "Oyowale", text: "Now I understand how people make their edits fast-paced with no dead space, which used to confuse me. Honestly, every single day helped me. Kudos for your consistency and hard work.", gained: "Pacing, clean cuts, editing confidence", emoji: "🏆", type: "program" },
  { name: "Temitope", text: "After my 1-on-1 sessions with Victoria, I landed my first paid editing client. She didn't just teach me how to edit — she showed me how to position myself and actually charge for my work. I made back my investment within weeks.", gained: "Client acquisition, pricing, portfolio", emoji: "💰", type: "earning" },
];

const RATE_TIERS = [
  {
    label: "TIER 1 — BEGINNER COACHING",
    sub: "For people who feel overwhelmed and don't know where to start",
    plans: [
      { price: "₦5,000", name: "Starter Coaching", days: "5 Days", featured: false, items: ["How CapCut actually works — no more guessing", "Simple cuts and trims that instantly clean your videos", "How to add text, sounds and transitions", "Create your first short-form edit from scratch", "Daily practice tasks so skills actually stick", "Personalised feedback + WhatsApp support"], best: "Complete beginners who want step-by-step guidance without feeling overwhelmed.", quote: "Those CapCut tools looked strange before but now I can fight war with it. You made it so easy for us.", quoteName: "Barakat, v1.0 Student" },
      { price: "₦7,000", name: "Growth Coaching", days: "7 Days", featured: true, items: ["Everything in Starter PLUS:", "Edit vlogs people actually watch till the end", "The editing style performing best on TikTok and Reels", "Why beginner edits feel boring — and how to fix it", "Smoother transitions and better pacing", "Beginner content strategy: what to post and when", "Personalised feedback on your actual edits"], best: "People who want better content quality and to grow their social media presence.", quote: "My timeline, the pacing — I can finish edits now without problems. I understand how to make a clean edit with no dead space.", quoteName: "v1.0 Student" },
      { price: "₦10,000", name: "Premium Private Coaching", days: "10 Days", featured: false, items: ["Full beginner-to-confident editor guidance", "Detailed screen-recording tutorials", "Voice note walkthroughs for every step", "The 3 mistakes making your edits look messy", "Short-form content strategy for your niche", "How to start positioning yourself as an editor", "Priority support throughout"], best: "People serious about improving fast and building editing into something real.", quote: "Pretty much everything improved. My timeline is cleaner, I understand pacing and transitions, and I actually finish edits now — they look professional.", quoteName: "Lase, v1.0 Student" },
    ]
  },
  {
    label: "TIER 2 — GRADUATE COACHING",
    sub: "For editors who have the basics — and are ready to start earning",
    plans: [
      { price: "₦5,000", name: "Advanced Coaching", days: "7 Days", featured: false, items: ["Advanced short-form techniques clients take seriously", "How to find your first paying client (small following friendly)", "Build a simple portfolio that sells your skill", "CapCut tricks that make edits feel instantly smoother", "Brand yourself so people remember you as an editor", "Personalised feedback on your edits", "WhatsApp support throughout"], best: "Editors ready to move beyond practice and start making money.", quote: "I've been consistent because it's key to building a skill. More wisdom, knowledge and understanding to you.", quoteName: "H.O.C, v1.0 Student" },
      { price: "₦8,000", name: "Income Coaching", days: "10 Days", featured: true, accentBlue: true, items: ["Everything in Advanced PLUS:", "How to price yourself so clients stop lowballing you", "Why who hires you matters as much as what you charge", "How to keep clients and get referrals without asking", "Edit faster directly from your phone", "Create your first digital product from your skill", "Personal editing corrections on every submission", "Priority support and guidance throughout"], best: "Editors who want to build a sustainable online income with just their phone.", quote: "I got to know how a voiceover is done — I thought it was always done differently on TikTok. This class helped me discover things I didn't know.", quoteName: "Oyowale, v1.0 Student" },
    ]
  }
];

export default function ThatTeenEditor() {
  const [painIndex, setPainIndex] = useState(0);
  const [showRateCard, setShowRateCard] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (action) => {
    if (action === "whatsapp") window.open(CONTACT.whatsapp, "_blank");
    else if (action === "selar") window.open(CONTACT.selar, "_blank");
    else if (action === "tiktok") window.open(CONTACT.tiktok, "_blank");
    else if (action === "email") window.open("mailto:" + CONTACT.email, "_blank");
    else if (action === "ratecard") setShowRateCard(true);
  };

  useEffect(() => {
    const t = setInterval(() => setPainIndex(i => (i + 1) % PAIN_POINTS.length), 2800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("vis"); }), { threshold: 0.12 });
    document.querySelectorAll(".rev").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = showRateCard ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showRateCard]);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#0a0a0a", color: "#f0ece4", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Fraunces:ital,wght@0,700;0,900;1,700&family=Bebas+Neue&family=Playfair+Display:ital,wght@0,700;1,400&family=Dancing+Script:wght@700&family=Caveat:wght@600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        .rev{opacity:0;transform:translateY(28px);transition:opacity 0.65s ease,transform 0.65s ease;}
        .rev.vis{opacity:1;transform:translateY(0);}
        .gold{color:#e8c547;}
        .btn-gold{background:#e8c547;color:#0a0a0a;border:none;padding:14px 28px;font-family:'DM Sans',sans-serif;font-size:0.9rem;font-weight:700;cursor:pointer;transition:transform 0.15s,box-shadow 0.15s;display:inline-block;border-radius:0;}
        .btn-gold:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(232,197,71,0.35);}
        .btn-ghost{background:transparent;color:#f0ece4;border:1px solid rgba(240,236,228,0.25);padding:13px 26px;font-family:'DM Sans',sans-serif;font-size:0.88rem;font-weight:500;cursor:pointer;transition:border-color 0.2s,color 0.2s;}
        .btn-ghost:hover{border-color:#e8c547;color:#e8c547;}
        .sec-label{font-size:0.68rem;letter-spacing:0.22em;text-transform:uppercase;color:#e8c547;font-weight:600;margin-bottom:12px;}
        .dh{font-family:'Fraunces',serif;line-height:1.05;font-weight:900;}
        .marquee-wrap{overflow:hidden;border-top:1px solid rgba(255,255,255,0.07);border-bottom:1px solid rgba(255,255,255,0.07);padding:14px 0;background:#0f0f0f;}
        .marquee-track{display:flex;gap:50px;width:max-content;animation:mq 20s linear infinite;}
        .mq-item{font-size:0.72rem;letter-spacing:0.18em;text-transform:uppercase;color:#5a5548;font-weight:600;white-space:nowrap;}
        .mq-dot{color:#e8c547;margin-right:50px;}
        @keyframes mq{from{transform:translateX(0);}to{transform:translateX(-50%);}}

        /* NAV */
        .nav{position:fixed;top:0;left:0;right:0;z-index:200;padding:16px 20px;display:flex;align-items:center;justify-content:space-between;background:rgba(10,10,10,0.94);backdrop-filter:blur(14px);border-bottom:1px solid rgba(255,255,255,0.05);}
        .nav-logo{font-family:'Fraunces',serif;font-size:1rem;font-weight:700;}
        .nav-desktop{display:flex;gap:28px;align-items:center;}
        .nav-link{color:#a09880;font-size:0.78rem;letter-spacing:0.1em;text-transform:uppercase;font-weight:500;cursor:pointer;transition:color 0.2s;background:none;border:none;}
        .nav-link:hover{color:#f0ece4;}
        .hamburger{background:none;border:none;cursor:pointer;display:none;flex-direction:column;gap:5px;padding:4px;}
        .hamburger span{display:block;width:22px;height:2px;background:#f0ece4;transition:all 0.25s;}
        .mobile-menu{display:none;position:fixed;top:56px;left:0;right:0;background:#111;z-index:190;padding:20px;border-bottom:1px solid rgba(255,255,255,0.07);}
        .mobile-menu.open{display:flex;flex-direction:column;gap:16px;}
        .mobile-menu .nav-link{font-size:1rem;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.05);}

        @media(max-width:640px){
          .nav-desktop{display:none;}
          .hamburger{display:flex;}
          .hero-split{flex-direction:column!important;}
          .hero-right-panel{display:none!important;}
          .features-3{grid-template-columns:1fr!important;}
          .contact-2{grid-template-columns:1fr!important;}
          .guarantee-split{flex-direction:column!important;}
          .hero-stats{gap:20px!important;}
          .hero-btns{flex-direction:column!important;}
          .hero-btns button{width:100%!important;}
          .hero-pad{padding:60px 20px 40px!important;}
          .section-pad{padding:60px 20px!important;}
          .section-pad-sm{padding:0 20px 60px!important;}
          .contact-pad{padding:0 20px 60px!important;}
          .testimonials-sec{padding:60px 20px!important;}
          .guarantee-sec{padding:60px 20px!important;}
          .cta-sec{padding:70px 20px!important;}
          .footer-inner{flex-direction:column!important;text-align:center;gap:12px!important;}
          .modal-inner{padding:20px!important;max-height:95vh!important;}
          .rate-plans{grid-template-columns:1fr!important;}
          .rate-plans-2{grid-template-columns:1fr!important;}
          .why-grid{grid-template-columns:1fr!important;}
          .tgrid{grid-template-columns:1fr!important;}
        }

        /* RATE CARD STYLES */
        .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:999;display:flex;align-items:flex-start;justify-content:center;padding:16px;overflow-y:auto;backdrop-filter:blur(8px);}
        .modal-inner{background:#fdf6ee;color:#0a0a0a;width:100%;max-width:960px;position:relative;margin:auto;}
        .rc-hero{background:#0a0a0a;color:#fff;padding:48px 28px 40px;text-align:center;position:relative;overflow:hidden;}
        .rc-hero::before{content:'';position:absolute;top:-60px;left:-60px;width:250px;height:250px;background:radial-gradient(circle,rgba(240,67,122,0.25) 0%,transparent 70%);border-radius:50%;}
        .rc-brand{font-family:'Playfair Display',serif;font-style:italic;font-size:0.9rem;color:#ff7aaa;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;position:relative;z-index:1;}
        .rc-h1{font-family:'Bebas Neue',sans-serif;font-size:clamp(56px,14vw,96px);line-height:0.88;letter-spacing:2px;position:relative;z-index:1;}
        .rc-h1 .to{font-family:'Playfair Display',serif;font-style:italic;font-size:0.45em;color:#3ec6e0;display:block;margin:4px 0;}
        .rc-h1 .earn{color:#f0437a;}
        .rc-tagline{font-size:0.8rem;color:#aaa;margin-top:16px;letter-spacing:3px;text-transform:uppercase;position:relative;z-index:1;}
        .rc-sub{font-size:0.9rem;color:#ccc;max-width:480px;margin:14px auto 0;line-height:1.6;position:relative;z-index:1;}
        .proof-bar{background:#f0437a;color:#fff;padding:12px 20px;display:flex;justify-content:center;align-items:center;gap:20px;flex-wrap:wrap;font-size:0.75rem;font-weight:600;letter-spacing:1px;text-transform:uppercase;}
        .proof-bar span::before{content:'✓ ';}
        .rc-quote-section{background:#0a0a0a;padding:28px 20px;text-align:center;}
        .rc-quote-section blockquote{font-family:'Playfair Display',serif;font-style:italic;font-size:clamp(0.95rem,2.5vw,1.25rem);color:#fff;max-width:680px;margin:0 auto;line-height:1.5;}
        .rc-quote-section cite{display:block;margin-top:10px;font-style:normal;font-size:0.75rem;color:#ff7aaa;letter-spacing:2px;text-transform:uppercase;}
        .rc-section-label{text-align:center;padding:36px 20px 16px;}
        .rc-pill{display:inline-block;background:#ffe0ec;color:#f0437a;font-size:0.68rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:4px 12px;border-radius:100px;margin-bottom:8px;}
        .rc-section-label h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.8rem,5vw,2.8rem);letter-spacing:2px;}
        .rc-section-label p{color:#888;font-size:0.85rem;margin-top:4px;}
        .tier-head{background:#0a0a0a;color:#fff;text-align:center;padding:16px 20px;margin:0 20px;border-radius:10px 10px 0 0;}
        .tier-head h3{font-family:'Bebas Neue',sans-serif;font-size:1.4rem;letter-spacing:3px;color:#f0437a;}
        .tier-head p{font-size:0.78rem;color:#aaa;margin-top:3px;}
        .plans-wrap{padding:0 20px 16px;}
        .rc-card{background:#fff;border-radius:0 0 14px 14px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);display:flex;flex-direction:column;}
        .rc-card-header{background:#0a0a0a;color:#fff;padding:20px 22px 16px;}
        .rc-price{font-family:'Bebas Neue',sans-serif;font-size:2.2rem;color:#f0437a;line-height:1;}
        .rc-plan-name{font-size:0.68rem;letter-spacing:3px;text-transform:uppercase;color:#aaa;margin-top:3px;}
        .rc-days{font-size:0.82rem;color:#3ec6e0;margin-top:5px;font-weight:600;}
        .rc-card-body{padding:18px 22px;flex:1;}
        .rc-card-body ul{list-style:none;font-size:0.82rem;line-height:1.5;}
        .rc-card-body ul li{padding:5px 0 5px 18px;position:relative;border-bottom:1px solid #f0f0f0;color:#333;}
        .rc-card-body ul li::before{content:'→';position:absolute;left:0;color:#f0437a;font-weight:700;}
        .rc-best{margin-top:12px;font-size:0.75rem;color:#888;font-style:italic;background:#ffe0ec;padding:8px 12px;border-radius:8px;}
        .rc-test{margin:14px 22px 18px;background:#0a0a0a;border-radius:10px;padding:12px 14px;position:relative;}
        .rc-test::before{content:'"';position:absolute;top:-8px;left:12px;font-family:'Playfair Display',serif;font-size:2.5rem;color:#f0437a;line-height:1;}
        .rc-test p{font-size:0.75rem;color:#ddd;line-height:1.5;margin-top:8px;font-style:italic;}
        .rc-test .tname{margin-top:6px;font-size:0.68rem;color:#ff7aaa;letter-spacing:1px;text-transform:uppercase;font-style:normal;display:block;}
        .rc-divider{height:3px;background:linear-gradient(90deg,#f0437a,#3ec6e0,#f0437a);margin:0 20px;}
        .feat-quote{background:#fdf6ee;padding:32px 24px;text-align:center;}
        .feat-quote blockquote{font-family:'Playfair Display',serif;font-size:clamp(0.9rem,2vw,1.15rem);font-style:italic;color:#0a0a0a;max-width:660px;margin:0 auto;line-height:1.6;border-left:4px solid #f0437a;padding-left:18px;text-align:left;}
        .feat-quote cite{display:block;margin-top:10px;font-style:normal;font-size:0.72rem;color:#f0437a;letter-spacing:2px;text-transform:uppercase;padding-left:22px;}
        .rc-tgrid{display:grid;gap:14px;max-width:900px;margin:0 auto;}
        .rc-t-card{background:#161616;border-radius:12px;padding:20px 18px;border:1px solid #222;}
        .rc-t-card .quote-mark{font-family:'Playfair Display',serif;font-size:3rem;color:#f0437a;line-height:0.7;display:block;margin-bottom:8px;}
        .rc-t-card p{font-size:0.8rem;color:#ccc;line-height:1.6;font-style:italic;}
        .rc-t-card .tname{margin-top:12px;font-size:0.7rem;color:#3ec6e0;letter-spacing:2px;text-transform:uppercase;display:block;}
        .rc-t-card .star{color:#ffd700;font-size:0.72rem;margin-bottom:2px;display:block;}
        .why-grid{display:grid;gap:12px;}
        .why-item{background:#fff;border-radius:10px;padding:16px 18px;border-left:4px solid #f0437a;font-size:0.82rem;line-height:1.5;color:#333;}
        .why-item strong{color:#0a0a0a;font-size:0.87rem;display:block;margin-bottom:3px;}
        .rc-cta{background:#f0437a;text-align:center;padding:48px 24px;}
        .rc-cta h2{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,7vw,3.5rem);color:#fff;letter-spacing:2px;line-height:1;}
        .rc-cta p{color:rgba(255,255,255,0.85);font-size:0.9rem;margin:12px auto 24px;max-width:420px;line-height:1.6;}
        .rc-cta-btn{display:inline-block;background:#0a0a0a;color:#fff;font-family:'DM Sans',sans-serif;font-weight:700;font-size:0.88rem;letter-spacing:2px;text-transform:uppercase;padding:16px 36px;border-radius:100px;text-decoration:none;cursor:pointer;border:none;}
        .rc-cta-note{margin-top:14px;font-size:0.72rem;color:rgba(255,255,255,0.7);}
        .rc-footer{background:#0a0a0a;color:#555;text-align:center;padding:20px;font-size:0.72rem;letter-spacing:1px;}
        .rc-footer span{color:#ff7aaa;}
        .close-btn{position:sticky;top:12px;float:right;margin:12px 12px 0 0;background:#0a0a0a;border:none;color:#fff;width:36px;height:36px;border-radius:50%;font-size:1.1rem;cursor:pointer;z-index:10;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 12px rgba(0,0,0,0.4);}

        /* MAIN SITE CARDS */
        .offer-card{background:#141414;border:1px solid rgba(255,255,255,0.07);padding:28px;position:relative;transition:border-color 0.3s,transform 0.3s;}
        .offer-card:hover{border-color:rgba(232,197,71,0.4);transform:translateY(-4px);}
        .offer-badge{background:#e8c547;color:#0a0a0a;font-size:0.6rem;font-weight:700;letter-spacing:0.1em;padding:3px 9px;position:absolute;top:18px;right:18px;}
        .t-card-main{background:#111;border-left:3px solid #e8c547;padding:22px;}
        .contact-card{background:#111;border:1px solid rgba(255,255,255,0.07);padding:24px 28px;cursor:pointer;transition:border-color 0.3s,transform 0.2s;display:flex;align-items:center;gap:18px;}
        .contact-card:hover{border-color:rgba(232,197,71,0.4);transform:translateY(-3px);}
        .golden-line{width:36px;height:3px;background:#e8c547;margin-bottom:18px;}
        .chk{display:flex;gap:12px;align-items:flex-start;margin-bottom:14px;}
        .chk-dot{color:#e8c547;font-size:1rem;margin-top:2px;flex-shrink:0;}
      `}</style>

      {/* RATE CARD MODAL */}
      {showRateCard && (
        <div className="modal-overlay" onClick={() => setShowRateCard(false)}>
          <div className="modal-inner" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowRateCard(false)}>✕</button>

            {/* RC Hero */}
            <div className="rc-hero">
              <p className="rc-brand">ThatTeenEditor Presents</p>
              <h1 className="rc-h1">EDIT<span className="to">to</span><span className="earn">EARN</span></h1>
              <p className="rc-tagline">Coaching Program</p>
              <p className="rc-sub">A step-by-step mobile editing program that takes you from confused beginner to confident editor — using just your phone and free tools.</p>
            </div>

            <div className="proof-bar">
              <span>100% Mobile Friendly</span>
              <span>CapCut & Free Tools</span>
              <span>Beginner Friendly</span>
              <span>Real Student Results</span>
            </div>

            <div className="rc-quote-section">
              <blockquote>
                "Your teaching style and explanations are exceptionally brilliant and easy to understand. It's the best editing class I've attended so far."
                <cite>— Edit to Earn v1.0 Student</cite>
              </blockquote>
            </div>

            {/* TIER 1 */}
            <div className="rc-section-label">
              <div className="rc-pill">Tier 1</div>
              <h2>Beginner Coaching</h2>
              <p>For people who feel overwhelmed and don't know where to start.</p>
            </div>
            <div className="tier-head"><h3>Choose Your Plan</h3><p>Pick the level of support that matches where you are right now</p></div>
            <div className="plans-wrap">
              <div className="rate-plans" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }}>
                {RATE_TIERS[0].plans.map(p => (
                  <div key={p.name} className="rc-card" style={p.featured ? { borderTop: "3px solid #f0437a" } : {}}>
                    <div className="rc-card-header" style={p.featured ? { background: "#1a0a10" } : {}}>
                      <div className="rc-price">{p.price}</div>
                      <div className="rc-plan-name">{p.name}</div>
                      <div className="rc-days">{p.days}</div>
                    </div>
                    <div className="rc-card-body">
                      <ul>{p.items.map(i => <li key={i}>{i}</li>)}</ul>
                      <p className="rc-best">Best for: {p.best}</p>
                    </div>
                    <div className="rc-test">
                      <p>{p.quote}</p>
                      <span className="tname">— {p.quoteName}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rc-divider" style={{ marginTop: "16px" }} />

            <div className="feat-quote">
              <blockquote>
                "My editing level was zero and a lot has improved since I joined this class. All the lessons helped — especially sound and text. Your teaching style is very simple and easy to understand. I now find myself telling my friends to send their daily vlogs to edit, which I would never have done before this class."
                <cite>— Barakat, Edit to Earn v1.0</cite>
              </blockquote>
            </div>

            {/* TIER 2 */}
            <div className="rc-section-label">
              <div className="rc-pill">Tier 2</div>
              <h2>Graduate Coaching</h2>
              <p>For editors who have the basics — and are ready to start earning.</p>
            </div>
            <div className="tier-head"><h3>Ready to Monetise Your Skill?</h3><p>Stop editing for fun. Start editing for income.</p></div>
            <div className="plans-wrap">
              <div className="rate-plans-2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }}>
                {RATE_TIERS[1].plans.map(p => (
                  <div key={p.name} className="rc-card" style={p.accentBlue ? { borderTop: "3px solid #3ec6e0" } : {}}>
                    <div className="rc-card-header" style={p.accentBlue ? { background: "#060e12" } : {}}>
                      <div className="rc-price" style={p.accentBlue ? { color: "#3ec6e0" } : {}}>{p.price}</div>
                      <div className="rc-plan-name">{p.name}</div>
                      <div className="rc-days">{p.days}</div>
                    </div>
                    <div className="rc-card-body">
                      <ul>{p.items.map(i => <li key={i}>{i}</li>)}</ul>
                      <p className="rc-best">Best for: {p.best}</p>
                    </div>
                    <div className="rc-test">
                      <p>{p.quote}</p>
                      <span className="tname">— {p.quoteName}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ height: "16px" }} />

            {/* Testimonials in modal */}
            <div style={{ background: "#0a0a0a", padding: "40px 20px" }}>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(1.8rem,5vw,2.6rem)", color: "#fff", textAlign: "center", letterSpacing: "2px", marginBottom: "6px" }}>What Students Are Saying</h2>
              <p style={{ textAlign: "center", color: "#888", fontSize: "0.82rem", marginBottom: "24px" }}>Real reviews from Edit to Earn v1.0</p>
              <div className="rc-tgrid tgrid" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))" }}>
                {[
                  { text: "Honestly every single day helped. You really tried coach — kudos for your consistency and hard work.", name: "v1.0 Student" },
                  { text: "Now I understand how people make their edits fast-paced with no dead space, which used to confuse me.", name: "v1.0 Student" },
                  { text: "My timeline, pacing, background colour — I can finish edits now without problems. Take your flowers 🌹", name: "v1.0 Student" },
                  { text: "Before joining I was a complete beginner. Now I finish edits that look professional and I've been eager to create content ever since.", name: "Lase, v1.0 Student" },
                  { text: "You are a good teacher who loves to carry her students along. I would recommend Edit to Earn anywhere, anytime.", name: "H.O.C, v1.0 Student" },
                  { text: "My editing level was very low. I got to understand how filters are added and how a sound and voiceover can stay in a single video.", name: "Oyowale, v1.0 Student" },
                ].map((t, i) => (
                  <div key={i} className="rc-t-card">
                    <span className="star">★★★★★</span>
                    <span className="quote-mark">"</span>
                    <p>{t.text}</p>
                    <span className="tname">— {t.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why */}
            <div style={{ padding: "40px 20px", maxWidth: "860px", margin: "0 auto" }}>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(1.8rem,5vw,2.4rem)", letterSpacing: "2px", textAlign: "center", marginBottom: "20px" }}>Why Edit to Earn?</h2>
              <div className="why-grid" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
                {[
                  ["No laptop needed", "Learn directly from your phone using free apps — nothing to buy."],
                  ["Practice with real tasks", "You don't just watch tutorials. You actually edit and get feedback."],
                  ["Personalised coaching", "Not generic advice. Feedback on your actual edits, your actual work."],
                  ["Taught by someone who gets it", "A self-taught teen editor who made 100k+ from this skill in under 10 months."],
                  ["Built for beginners and teens", "Designed for students, teens, and anyone starting from absolute zero."],
                  ["Real results, real students", "Every testimonial is from an actual v1.0 student — unedited."],
                ].map(([title, desc]) => (
                  <div key={title} className="why-item"><strong>{title}</strong>{desc}</div>
                ))}
              </div>
            </div>

            {/* RC CTA */}
            <div className="rc-cta">
              <h2>SECURE YOUR SLOT</h2>
              <p>Slots are limited and fill up fast. Send <strong>'EDIT TO EARN'</strong> on WhatsApp and I'll get back to you within 24 hours.</p>
              <button className="rc-cta-btn" onClick={() => { setShowRateCard(false); go("whatsapp"); }}>Message on WhatsApp →</button>
              <p className="rc-cta-note">No laptop. No expensive gear. No limit. Just you, your phone, and the will to win.</p>
            </div>

            <div className="rc-footer">
              <span>ThatTeenEditor</span> · Teen Editor · Content Creator · DIY Builder<br />
              <span style={{ fontSize: "0.62rem", marginTop: "4px", display: "block" }}>ThatTeenEditor © 2026 — Edit to Earn · ThatTeenEditor0@gmail.com</span>
            </div>
          </div>
        </div>
      )}

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">ThatTeen<span className="gold">Editor</span></div>
        <div className="nav-desktop">
          {["About","Programs","Products","Contact"].map(l => <button key={l} className="nav-link">{l}</button>)}
          <button className="btn-gold" style={{ padding: "10px 20px", fontSize: "0.78rem" }} onClick={() => go("whatsapp")}>Start Learning →</button>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(o => !o)}>
          <span /><span /><span />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={"mobile-menu" + (menuOpen ? " open" : "")}>
        {["About","Programs","Products","Contact"].map(l => <button key={l} className="nav-link">{l}</button>)}
        <button className="btn-gold" style={{ marginTop: "8px" }} onClick={() => { go("whatsapp"); setMenuOpen(false); }}>Start Learning →</button>
      </div>

      {/* HERO */}
      <section style={{ paddingTop: "60px", minHeight: "100svh", display: "flex", flexDirection: "column" }}>
        <div className="hero-split" style={{ display: "flex", flex: 1 }}>
          <div className="hero-pad" style={{ flex: 1, padding: "70px 48px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="sec-label">Victoria · ThatTeenEditor</div>
            <h1 className="dh" style={{ fontSize: "clamp(2.4rem,10vw,4.2rem)", marginBottom: "20px" }}>
              Learn Mobile Editing.<br />
              <span className="gold" style={{ fontStyle: "italic" }}>Start Earning With Just Your Phone.</span><br />
              No Experience Needed.
            </h1>
            <div style={{ marginBottom: "28px", minHeight: "24px" }}>
              <p key={painIndex} style={{ color: "#6b6358", fontSize: "0.95rem", fontStyle: "italic" }}>{PAIN_POINTS[painIndex]}</p>
            </div>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#a09880", marginBottom: "32px", maxWidth: "440px" }}>
              I'm Victoria — a self-taught teen editor who built a real income from scratch. Now I teach other teens to do exactly the same, starting from zero.
            </p>
            <div className="hero-btns" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button className="btn-gold" onClick={() => go("whatsapp")}>View Coaching Options →</button>
              <button className="btn-ghost" onClick={() => go("tiktok")}>Watch My TikTok</button>
            </div>
            <div className="hero-stats" style={{ display: "flex", gap: "32px", marginTop: "44px", paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.07)", flexWrap: "wrap" }}>
              {[["10+","Students in v1.0"],["8 Days","To transform your editing"],["₦0","To get started"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "'Fraunces',serif", fontSize: "1.7rem", fontWeight: 900, color: "#e8c547" }}>{n}</div>
                  <div style={{ fontSize: "0.72rem", color: "#5a5548", marginTop: "3px" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-right-panel" style={{ flex: 1, background: "#111", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 60% 40%,rgba(232,197,71,0.07) 0%,transparent 65%)" }} />
            <div style={{ padding: "60px 44px", position: "relative", zIndex: 1 }}>
              <div style={{ fontFamily: "'Fraunces',serif", fontSize: "0.95rem", fontStyle: "italic", color: "#e8c547", marginBottom: "20px" }}>The Offer, Straight Up:</div>
              <div style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(1.3rem,2.2vw,1.9rem)", fontWeight: 700, lineHeight: 1.3, color: "#f0ece4", marginBottom: "28px" }}>
                "Complete Edit to Earn and land your first paying client within 30 days — or I'll coach you personally until you do."
              </div>
              <div className="golden-line" />
              <p style={{ color: "#7a7060", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "28px" }}>Every lesson built around one outcome: <span style={{ color: "#f0ece4" }}>you, getting paid.</span></p>
              {["Real portfolio edits you're proud of","A pricing strategy that works","Confidence to pitch and close clients"].map(item => (
                <div key={item} className="chk"><span className="chk-dot">✦</span><span style={{ color: "#a09880", fontSize: "0.88rem" }}>{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {Array(2).fill(["CapCut Editing","Faceless YouTube","Teen Creator","Edit to Earn","Digital Products","Earn From Editing","ThatTeenEditor"]).flat().map((item, i) => (
            <span key={i} className="mq-item">{item}<span className="mq-dot"> ✦</span></span>
          ))}
        </div>
      </div>

      {/* PAIN */}
      <section className="rev section-pad" style={{ padding: "80px 48px", maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
        <div className="sec-label" style={{ textAlign: "center" }}>The real problem</div>
        <h2 className="dh" style={{ fontSize: "clamp(1.8rem,6vw,3rem)", marginBottom: "20px" }}>
          Most teens who want to edit<br /><span className="gold" style={{ fontStyle: "italic" }}>never make a single naira from it.</span>
        </h2>
        <p style={{ color: "#7a7060", fontSize: "1rem", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto" }}>
          Not because they're not talented. Because nobody showed them the path — from opening CapCut for the first time, to confidently charging for their work. That gap is exactly what Edit to Earn closes.
        </p>
      </section>


      {/* PROOF SECTION */}
      <section className="rev" style={{ padding: "0 20px 80px", maxWidth: "1060px", margin: "0 auto" }}>
        <div className="sec-label" style={{ textAlign: "center" }}>Receipts. Raw messages. Real proof.</div>
        <h2 className="dh" style={{ fontSize: "clamp(1.8rem,6vw,2.8rem)", textAlign: "center", marginBottom: "8px" }}>
          Don't take my word for it.
        </h2>
        <p style={{ color: "#5a5548", fontSize: "0.9rem", textAlign: "center", marginBottom: "40px" }}>Here is the actual evidence — unfiltered.</p>

        {/* Victoria quote */}
        <div style={{ background: "linear-gradient(135deg,#1a1200,#111)", border: "1px solid rgba(232,197,71,0.3)", padding: "32px", marginBottom: "32px", borderLeft: "4px solid #e8c547" }}>
          <div style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#e8c547", marginBottom: "16px" }}>Victoria · Founder, ThatTeenEditor</div>
          <p style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(1rem,2.5vw,1.3rem)", fontStyle: "italic", color: "#f0ece4", lineHeight: 1.7 }}>
            "10 months ago I was broke, not knowing I was sitting on a skill people would pay me for and still thank me after. I am not poor anymore because now I can decide to take on a client or drop a product and make money from my phone."
          </p>
        </div>

        {/* Receipts */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5a5548", marginBottom: "16px", textAlign: "center" }}>Real payments received — PalmPay verified</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: "14px" }}>
            {[
              { amount: "₦15,000.00", date: "Oct 13, 2025" },
              { amount: "₦10,000.00", date: "Nov 30, 2025" },
              { amount: "₦9,000.00",  date: "Oct 16, 2025" },
            ].map((r) => (
              <div key={r.amount} style={{ background: "#0f0f0f", border: "1px solid #1e1e2e", borderRadius: "12px", padding: "20px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg,#7c3aed,#9f67f5)" }} />
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
                  <div style={{ background: "#1a0a3a", borderRadius: "4px", padding: "3px 8px", fontSize: "0.65rem", color: "#9f67f5", fontWeight: 700 }}>PalmPay</div>
                  <div style={{ fontSize: "0.6rem", color: "#3a3530" }}>Successful</div>
                </div>
                <div style={{ fontFamily: "'Fraunces',serif", fontSize: "1.7rem", fontWeight: 900, color: "#7c3aed", marginBottom: "4px" }}>{r.amount}</div>
                <div style={{ fontSize: "0.7rem", color: "#4a4540", marginBottom: "10px" }}>{r.date}</div>
                <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: "8px", fontSize: "0.65rem", color: "#5a5030" }}>✓ Verified payment</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "16px" }}>
            <span style={{ background: "#1a1500", border: "1px solid rgba(232,197,71,0.3)", color: "#e8c547", fontSize: "0.78rem", fontWeight: 700, padding: "8px 20px", borderRadius: "100px" }}>
              ₦34,000+ earned from editing — on a phone, no laptop
            </span>
          </div>
        </div>

        {/* TikTok Viral Edit */}
        <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)", padding: "28px", marginBottom: "32px" }}>
          <div style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5a5548", marginBottom: "20px" }}>Photo editing work — real result on TikTok</div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <div style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: "12px", padding: "28px 24px", textAlign: "center", width: "100%", maxWidth: "420px" }}>
              <div style={{ fontSize: "2.8rem", marginBottom: "12px" }}>🎬</div>
              <div style={{ fontFamily: "'Fraunces',serif", fontSize: "1.4rem", fontWeight: 900, color: "#e8c547", marginBottom: "6px" }}>1,000+ Views</div>
              <p style={{ fontSize: "0.82rem", color: "#7a7060", lineHeight: 1.65, marginBottom: "20px" }}>
                A before-and-after BMW photo edit — posted as a static image with trending audio. No video. No fancy gear. Just a phone and CapCut.
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginBottom: "20px", flexWrap: "wrap" }}>
                {[["📱","Shot on phone"],["✂️","Edited in CapCut"],["🖼️","Static image post"],["🔊","Trending audio"]].map(([icon, label]) => (
                  <div key={label} style={{ fontSize: "0.7rem", color: "#5a5548", textAlign: "center" }}>
                    <div style={{ fontSize: "1.1rem", marginBottom: "3px" }}>{icon}</div>
                    {label}
                  </div>
                ))}
              </div>
              <button
                className="btn-gold"
                style={{ fontSize: "0.85rem", padding: "13px 28px", width: "100%" }}
                onClick={() => window.open("https://vt.tiktok.com/ZSx8Rxges/", "_blank")}
              >
                Watch the Edit on TikTok →
              </button>
              <div style={{ fontSize: "0.7rem", color: "#3a3530", marginTop: "10px" }}>Opens TikTok — see the real views yourself</div>
            </div>
          </div>
        </div>

        {/* Raw WhatsApp */}
        <div style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5a5548", marginBottom: "16px", textAlign: "center" }}>Raw student reactions — straight from WhatsApp</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "16px" }}>
          <div style={{ background: "#0d1a0d", border: "1px solid #1a2e1a", borderRadius: "12px", overflow: "hidden" }}>
            <div style={{ background: "#128c7e", padding: "10px 16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "30px", height: "30px", background: "#075e54", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", color: "#fff", fontWeight: 700 }}>B</div>
              <div>
                <div style={{ fontSize: "0.78rem", color: "#fff", fontWeight: 600 }}>Barakat</div>
                <div style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.7)" }}>Edit to Earn v1.0</div>
              </div>
            </div>
            <div style={{ padding: "14px" }}>
              <div style={{ background: "#1a2e1a", borderRadius: "0 8px 8px 8px", padding: "12px 14px", fontSize: "0.82rem", color: "#d4e8d4", lineHeight: 1.65 }}>
                This edit is really a topnotch 🤩<br /><br />
                My level of editing before the class was zero and alot has improved since I joined this class<br /><br />
                Those capcut tools look strange before but now I can fight war with it 😅🤣<br /><br />
                you made it Soo easy for us. Your teaching style is very simple nd easy to understand<br /><br />
                I now find myself telling my friends to send their daily vlogs which I will never do before this class 🤣<br /><br />
                Thank you very much for your time, energy, consistency nd the knowledge 💜
                <div style={{ fontSize: "0.6rem", color: "#5a8a5a", marginTop: "6px", textAlign: "right" }}>21:34 ✓✓</div>
              </div>
            </div>
          </div>

          <div style={{ background: "#0d1a0d", border: "1px solid #1a2e1a", borderRadius: "12px", overflow: "hidden" }}>
            <div style={{ background: "#128c7e", padding: "10px 16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "30px", height: "30px", background: "#075e54", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", color: "#fff", fontWeight: 700 }}>L</div>
              <div>
                <div style={{ fontSize: "0.78rem", color: "#fff", fontWeight: 600 }}>Lase</div>
                <div style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.7)" }}>Edit to Earn v1.0</div>
              </div>
            </div>
            <div style={{ padding: "14px" }}>
              <div style={{ background: "#1a2e1a", borderRadius: "0 8px 8px 8px", padding: "12px 14px", fontSize: "0.82rem", color: "#d4e8d4", lineHeight: 1.65 }}>
                Omo<br />
                U be expert ooo 😍😍😍🙏🙏🙏
                <div style={{ fontSize: "0.6rem", color: "#5a8a5a", marginTop: "6px", textAlign: "right" }}>21:32 ✓✓</div>
              </div>
              <div style={{ fontSize: "0.72rem", color: "#3a5a3a", fontStyle: "italic", marginTop: "8px", padding: "0 4px" }}>
                — reacting to Victoria explaining TikTok video quality settings live in the group
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section style={{ padding: "0 20px 72px", maxWidth: "1100px", margin: "0 auto" }}>
        <div className="sec-label rev" style={{ textAlign: "center", marginBottom: "8px" }}>Everything I offer</div>
        <p className="rev" style={{ textAlign: "center", color: "#5a5548", fontSize: "0.82rem", marginBottom: "32px" }}>Coaching slots are limited — I keep numbers small so every student gets real attention.</p>
        <div className="features-3 rev" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
          {[
            { icon: "✂️", title: "1-on-1 Coaching", desc: "Personalised coaching sessions built around your current level and your goals — on your phone, at your pace. Limited slots so I can personally review every student's work.", badge: "LIMITED SLOTS", cta: "View Rate Card", action: "ratecard" },
            { icon: "📦", title: "Digital Products", desc: "Templates, guides, and resources built specifically for teen creators who want to turn editing into actual income.", badge: "ON SELAR", cta: "Browse Products", action: "selar" },
            { icon: "🎬", title: "Edit to Earn Program", desc: "A free beginner program that gives you the foundation. Build the skill first — then level up to paid coaching.", badge: "FREE", cta: "Join the Waitlist", action: "whatsapp" },
          ].map(f => (
            <div key={f.title} className="offer-card">
              <span className="offer-badge">{f.badge}</span>
              <div style={{ fontSize: "1.8rem", marginBottom: "16px" }}>{f.icon}</div>
              <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>{f.title}</h3>
              <p style={{ color: "#7a7060", fontSize: "0.87rem", lineHeight: 1.65, marginBottom: "24px" }}>{f.desc}</p>
              <button className="btn-gold" style={{ fontSize: "0.78rem", padding: "11px 20px" }} onClick={() => go(f.action)}>{f.cta} →</button>
            </div>
          ))}
        </div>
      </section>


      {/* WHAT YOU LEARN */}
      <section className="rev" style={{ padding: "0 20px 80px", maxWidth: "960px", margin: "0 auto" }}>
        <div className="sec-label" style={{ textAlign: "center" }}>What you will learn</div>
        <h2 className="dh" style={{ fontSize: "clamp(1.6rem,5vw,2.4rem)", textAlign: "center", marginBottom: "36px" }}>
          From <span className="gold" style={{ fontStyle: "italic" }}>zero</span> to editor to earner.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "14px" }}>
          {[
            { icon: "🎬", skill: "Transitions", desc: "Make your cuts feel smooth and intentional — not choppy or random." },
            { icon: "⏱️", skill: "Pacing", desc: "Control the energy of your video. Know when to speed up and when to breathe." },
            { icon: "📖", skill: "Storytelling", desc: "Edit videos that people actually watch till the end — not just skip through." },
            { icon: "🔊", skill: "Sounds & Audio", desc: "Cinematic sounds, trending audio, voiceover sync — the things that make edits feel alive." },
            { icon: "💰", skill: "Pricing Your Skill", desc: "Know exactly what to charge and how to say it without underselling yourself." },
            { icon: "🎯", skill: "Finding Clients", desc: "Where to find people who will pay for your editing — even with a small following." },
          ].map(item => (
            <div key={item.skill} style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)", padding: "22px", transition: "border-color 0.3s", borderLeft: "3px solid #e8c547" }}>
              <div style={{ fontSize: "1.6rem", marginBottom: "10px" }}>{item.icon}</div>
              <div style={{ fontFamily: "'Fraunces',serif", fontSize: "1rem", fontWeight: 700, color: "#f0ece4", marginBottom: "8px" }}>{item.skill}</div>
              <p style={{ fontSize: "0.82rem", color: "#7a7060", lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "28px" }}>
          <button className="btn-gold" style={{ fontSize: "0.85rem", padding: "14px 32px" }} onClick={() => go("ratecard")}>
            See Coaching Options →
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-sec" style={{ background: "#0d0d0d", padding: "80px 20px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="rev" style={{ maxWidth: "1060px", margin: "0 auto" }}>
          <div className="sec-label" style={{ textAlign: "center" }}>Real students, real results</div>
          <h2 className="dh" style={{ fontSize: "clamp(1.7rem,5vw,2.5rem)", textAlign: "center", marginBottom: "40px" }}>They started exactly where you are.</h2>

          {TESTIMONIALS.filter(t => t.type === "earning").map(t => (
            <div key={t.name} style={{ background: "linear-gradient(135deg,#1a1500 0%,#111 100%)", border: "1px solid rgba(232,197,71,0.4)", padding: "32px", marginBottom: "32px", position: "relative" }}>
              <div style={{ position: "absolute", top: "16px", right: "16px", background: "#e8c547", color: "#0a0a0a", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", padding: "3px 10px" }}>PRIVATE COACHING</div>
              <div style={{ fontSize: "1.8rem", marginBottom: "12px" }}>{t.emoji}</div>
              <p style={{ color: "#d4c898", fontSize: "1rem", lineHeight: 1.75, marginBottom: "20px", fontStyle: "italic" }}>"{t.text}"</p>
              <div style={{ fontFamily: "'Fraunces',serif", fontSize: "0.95rem", fontWeight: 700, color: "#e8c547" }}>— {t.name}</div>
              <div style={{ fontSize: "0.68rem", color: "#5a5030", marginTop: "3px" }}>Focus: {t.gained}</div>
            </div>
          ))}

          <div style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#3a3530", marginBottom: "20px", textAlign: "center" }}>Edit to Earn v1.0 — Student Voices</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "16px" }}>
            {TESTIMONIALS.filter(t => t.type === "program").map(t => (
              <div key={t.name} className="t-card-main">
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                  <span style={{ fontSize: "1.4rem" }}>{t.emoji}</span>
                  <span style={{ fontSize: "0.6rem", letterSpacing: "0.1em", color: "#3a3530", textTransform: "uppercase" }}>v1.0</span>
                </div>
                <p style={{ color: "#8a8070", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "16px", fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "12px" }}>
                  <div style={{ fontFamily: "'Fraunces',serif", fontSize: "0.88rem", fontWeight: 700, color: "#c0b890" }}>— {t.name}</div>
                  <div style={{ fontSize: "0.68rem", color: "#3a3530", marginTop: "3px" }}>Gained: {t.gained}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="guarantee-sec rev" style={{ padding: "80px 20px", maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ background: "#111", border: "1px solid rgba(232,197,71,0.2)", padding: "44px 32px" }}>
          <div className="sec-label">The promise</div>
          <div className="guarantee-split" style={{ display: "flex", gap: "48px", alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <h2 className="dh" style={{ fontSize: "clamp(1.6rem,4vw,2.3rem)", marginBottom: "16px" }}>
                My <span className="gold" style={{ fontStyle: "italic" }}>No-Excuses</span> Guarantee
              </h2>
              <p style={{ color: "#7a7060", fontSize: "0.92rem", lineHeight: 1.75 }}>
                "I don't believe beginners fail because they're incapable. They fail because nobody explains editing in a simple, practical way. That's exactly what I built this for — and if you show up and do the work, I will personally step in until you get there."
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <div className="golden-line" />
              {["You'll finish the program with real, portfolio-worthy edits","You'll know exactly how to price and sell your skills","Or I'll personally help you figure out what went wrong"].map(item => (
                <div key={item} className="chk" style={{ marginBottom: "16px" }}>
                  <span className="chk-dot" style={{ fontSize: "1.2rem" }}>✦</span>
                  <span style={{ color: "#a09880", fontSize: "0.92rem", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-pad rev" style={{ padding: "0 20px 80px", maxWidth: "960px", margin: "0 auto" }}>
        <div className="sec-label" style={{ textAlign: "center", marginBottom: "10px" }}>Get in touch</div>
        <h2 className="dh" style={{ fontSize: "clamp(1.5rem,4vw,2.1rem)", textAlign: "center", marginBottom: "32px" }}>
          Reach me <span className="gold" style={{ fontStyle: "italic" }}>anywhere</span>
        </h2>
        <div className="contact-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {[
            { icon: "💬", label: "WhatsApp", sub: "Message me directly", action: "whatsapp", val: "+234 915 460 3329" },
            { icon: "✉️", label: "Email", sub: "For business enquiries", action: "email", val: "ThatTeenEditor0@gmail.com" },
            { icon: "🎵", label: "TikTok", sub: "Watch my content", action: "tiktok", val: "@thatteeneditor" },
            { icon: "🛍️", label: "Selar Store", sub: "Support and buy products", action: "selar", val: "selar.com/showlove/thatteeneditor" },
          ].map(c => (
            <div key={c.label} className="contact-card" onClick={() => go(c.action)}>
              <div style={{ fontSize: "1.8rem", flexShrink: 0 }}>{c.icon}</div>
              <div>
                <div style={{ fontFamily: "'Fraunces',serif", fontWeight: 700, fontSize: "0.95rem", marginBottom: "3px" }}>{c.label}</div>
                <div style={{ fontSize: "0.72rem", color: "#5a5548", marginBottom: "5px" }}>{c.sub}</div>
                <div style={{ fontSize: "0.75rem", color: "#e8c547" }}>{c.val}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-sec rev" style={{ padding: "100px 20px", textAlign: "center", position: "relative", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(232,197,71,0.05) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="sec-label">Ready?</div>
          <h2 className="dh" style={{ fontSize: "clamp(2rem,8vw,4rem)", marginBottom: "20px" }}>
            Stop watching.<br /><span className="gold" style={{ fontStyle: "italic" }}>Start earning.</span>
          </h2>
          <p style={{ color: "#6b6358", fontSize: "0.95rem", maxWidth: "420px", margin: "0 auto 36px", lineHeight: 1.7 }}>
            Join the Edit to Earn waitlist and be first in when the next cohort opens. Free. Real. Life-changing.
          </p>
          <button className="btn-gold" style={{ padding: "16px 40px", fontSize: "0.95rem" }} onClick={() => go("whatsapp")}>
            Join the Waitlist — Free →
          </button>
          <div style={{ marginTop: "16px", fontSize: "0.75rem", color: "#3a3530" }}>No payment. No catch. Just results.</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "32px 20px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="footer-inner" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", flexWrap: "wrap", maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'Fraunces',serif", fontSize: "0.95rem", fontWeight: 700 }}>ThatTeen<span className="gold">Editor</span></div>
          <div style={{ fontSize: "0.72rem", color: "#3a3530" }}>2026 ThatTeenEditor · Built by Victoria</div>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {[["TikTok","tiktok"],["WhatsApp","whatsapp"],["Selar","selar"],["Email","email"]].map(([l, a]) => (
              <button key={l} className="nav-link" style={{ fontSize: "0.75rem" }} onClick={() => go(a)}>{l}</button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
