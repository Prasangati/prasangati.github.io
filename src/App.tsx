import {
  BotMessageSquare,
  BriefcaseBusiness,
  CalendarDays,
  CircleCheck,
  Coins,
  Compass,
  FileCode2,
  GraduationCap,
  Handshake,
  Languages,
  MapPin,
  Network,
  ServerCog,
  ShieldAlert,
  TriangleAlert,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import {
  blockchain,
  caseStudies,
  education,
  languages,
  practices,
  profile,
  timeline,
  toolbelt,
} from "./data";
import { WaccDemo } from "./WaccDemo";

const practiceIcons: LucideIcon[] = [Compass, ShieldAlert, ServerCog, BotMessageSquare];
const chainIcons: LucideIcon[] = [FileCode2, Wallet, Network, Coins];

const portrait = `${import.meta.env.BASE_URL}images/prasanga-portrait.jpg`;

function HireButton({ tone = "light" }: { tone?: "light" | "dark" }) {
  if (!profile.upworkUrl) return null;
  return (
    <a className={`hire hire-${tone}`} href={profile.upworkUrl} target="_blank" rel="noreferrer">
      <Handshake size={18} aria-hidden="true" />
      Hire me on Upwork
    </a>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>

      <header className="hero">
        <nav className="nav wrap" aria-label="Sections">
          <span className="mark">P.T.</span>
          <ul>
            <li><a href="#work">Work</a></li>
            <li><a href="#blockchain">Blockchain</a></li>
            <li><a href="#approach">Approach</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
        </nav>

        <div className="wrap hero-body">
          <div className="hero-text">
            <p className="hero-role">
              <MapPin size={16} aria-hidden="true" />
              {profile.role}, {profile.location}
            </p>
            <h1 className="hero-name">
              Prasanga
              <br />
              Tiwari
            </h1>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-foot">
              <p className="status">
                <span className="dot" aria-hidden="true" />
                {profile.availability}
              </p>
              <HireButton />
            </div>
          </div>
          <figure className="portrait">
            <img src={portrait} alt="Portrait of Prasanga Tiwari" width={1254} height={1254} />
          </figure>
        </div>

        <ol className="wrap hero-index" aria-label="Case studies">
          {caseStudies.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`}>
                <strong>{c.client}</strong>
                <span>{c.summary}</span>
              </a>
            </li>
          ))}
          <li>
            <a href="#blockchain">
              <strong>Blockchain</strong>
              <span>Contracts, dApps and indexers on EVM and Solana.</span>
            </a>
          </li>
        </ol>
      </header>

      <main>
        <section id="work" className="wrap section">
          <h2 className="section-title">Selected work</h2>
          {caseStudies.map((c) => (
            <article key={c.id} id={c.id} className="case">
              <aside className="case-meta">
                <h3>{c.client}</h3>
                <p className="meta-line">
                  <BriefcaseBusiness size={16} aria-hidden="true" />
                  {c.role}
                </p>
                <p className="meta-line muted">
                  <CalendarDays size={16} aria-hidden="true" />
                  {c.period}
                </p>
                <p className="stack-line">Built with {c.stack}</p>
              </aside>
              <div className="case-body">
                <p className="case-lede">{c.context}</p>
                <h4>Key decisions</h4>
                <ol className="decisions">
                  {c.decisions.map((d) => (
                    <li key={d.title}>
                      <h5>{d.title}</h5>
                      <p>{d.detail}</p>
                    </li>
                  ))}
                </ol>
                <div className="case-split">
                  <div>
                    <h4>Risks I managed</h4>
                    <ul className="risks">
                      {c.risks.map((r) => (
                        <li key={r}>
                          <TriangleAlert size={16} aria-hidden="true" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Outcome</h4>
                    <ul className="outcomes">
                      {c.outcomes.map((r) => (
                        <li key={r}>
                          <CircleCheck size={16} aria-hidden="true" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {c.demo === "wacc" && <WaccDemo />}
              </div>
            </article>
          ))}
        </section>

        <section id="blockchain" className="chain">
          <div className="wrap section">
            <h2 className="section-title">Blockchain systems</h2>
            <div className="chain-lead">
              <p className="chain-intro">{blockchain.intro}</p>
              <p className="chain-nets">{blockchain.chains}</p>
            </div>
            <div className="chain-areas">
              {blockchain.areas.map((a, i) => {
                const Icon = chainIcons[i];
                return (
                  <div key={a.name} className="chain-area">
                    <span className="chain-icon" aria-hidden="true">
                      {Icon && <Icon size={22} strokeWidth={1.75} />}
                    </span>
                    <h3>{a.name}</h3>
                    <p>{a.detail}</p>
                  </div>
                );
              })}
            </div>
            <div className="chain-risks">
              <h3>Failure modes I design against</h3>
              <ul>
                {blockchain.risks.map((r) => (
                  <li key={r}>
                    <ShieldAlert size={16} aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="approach" className="band">
          <div className="wrap section">
            <h2 className="section-title">How I work</h2>
            <div className="skills">
              {practices.map((p, i) => {
                const Icon = practiceIcons[i];
                return (
                  <div key={p.name} className="skill-group">
                    <span className="skill-icon" aria-hidden="true">
                      {Icon && <Icon size={22} strokeWidth={1.75} />}
                    </span>
                    <h3>{p.name}</h3>
                    <p>{p.detail}</p>
                  </div>
                );
              })}
            </div>
            <p className="toolbelt">
              <strong>Tools follow the problem.</strong> {toolbelt}
            </p>
          </div>
        </section>

        <section id="experience" className="wrap section">
          <h2 className="section-title">Experience</h2>
          <ol className="timeline">
            {timeline.map((t) => (
              <li key={t.where + t.when}>
                <span className="when">{t.when}</span>
                <div>
                  <h3>
                    {t.what}, {t.where}
                  </h3>
                  <p>{t.note}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="facts">
            <div>
              <h3>
                <GraduationCap size={22} strokeWidth={1.75} aria-hidden="true" />
                Education
              </h3>
              <p>
                {education.degree}
                <br />
                <span className="muted">
                  {education.school}, {education.years}
                </span>
              </p>
            </div>
            <div>
              <h3>
                <Languages size={22} strokeWidth={1.75} aria-hidden="true" />
                Languages
              </h3>
              <ul>
                {languages.map((l) => (
                  <li key={l.name}>
                    {l.name} <span className="muted">({l.level.toLowerCase()})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-body">
          <p className="footer-line">Have a web app that needs building or fixing? Send me a message on Upwork.</p>
          <HireButton tone="dark" />
          <p className="muted small">© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </footer>
    </>
  );
}
