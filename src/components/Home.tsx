import { useTranslation } from 'react-i18next';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();
  const tags = t('home.tags', { returnObjects: true }) as string[];

  return (
    <section className="home">
      <div className="container">
        <div className="home-content">
          <h1 className="home-title">{t('home.title')}</h1>
          <h2 className="home-subtitle">{t('home.subtitle')}</h2>
          
          <div className="positioning-statement">
            <p className="positioning-text">{t('home.positioning')}</p>
          </div>

          <div className="tags-container">
            {tags.map((tag: string, index: number) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>

          <div className="welcome-section">
            <h3>{t('home.welcome')}</h3>
            <p className="description">{t('home.description')}</p>
          </div>

          <div className="quick-links">
            <div className="link-card">
              <h4>GitHub</h4>
              <p>Check out my projects and contributions</p>
              <a href="https://github.com/HHC-1998" target="_blank" rel="noopener noreferrer" className="btn">
                Visit GitHub
              </a>
            </div>
            <div className="link-card">
              <h4>Projects</h4>
              <p>Explore my AI and development projects</p>
              <a href="#projects" className="btn">
                View Projects
              </a>
            </div>
            <div className="link-card">
              <h4>Contact</h4>
              <p>Get in touch for opportunities</p>
              <a href="#contact" className="btn">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;