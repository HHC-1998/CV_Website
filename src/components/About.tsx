import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  const strengths = t('about.strengths.items', { returnObjects: true }) as string[];

  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">{t('about.title')}</h2>
        
        <div className="about-content">
          <div className="intro-section">
            <p className="intro-text">{t('about.intro')}</p>
          </div>

          <div className="education-section">
            <h3>{t('about.education.title')}</h3>
            <div className="education-cards">
              <div className="education-card">
                <h4>{t('about.education.ms.degree')}</h4>
                <p className="school">{t('about.education.ms.school')}</p>
                <p className="period">{t('about.education.ms.period')}</p>
                <p className="gpa">{t('about.education.ms.gpa')}</p>
              </div>
              <div className="education-card">
                <h4>{t('about.education.bs.degree')}</h4>
                <p className="school">{t('about.education.bs.school')}</p>
              </div>
            </div>
          </div>

          <div className="strengths-section">
            <h3>{t('about.strengths.title')}</h3>
            <ul className="strengths-list">
              {strengths.map((strength: string, index: number) => (
                <li key={index} className="strength-item">
                  <span className="strength-icon">✓</span>
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          <div className="personal-info">
            <div className="info-card">
              <h4>Languages</h4>
              <p>English (Fluent), Mandarin (Fluent), Cantonese (Learning)</p>
            </div>
            <div className="info-card">
              <h4>Location</h4>
              <p>Hong Kong</p>
            </div>
            <div className="info-card">
              <h4>Interests</h4>
              <p>Open-source contribution, AI research, Full-stack development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;