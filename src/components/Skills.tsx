import './Skills.css';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  const technicalSkills = t('skills.technical.items', { returnObjects: true }) as string[];
  const aiSkills = t('skills.ai.items', { returnObjects: true }) as string[];
  const tools = t('skills.tools.items', { returnObjects: true }) as string[];
  const businessSkills = t('skills.business.items', { returnObjects: true }) as string[];

  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">{t('skills.title')}</h2>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h3>{t('skills.technical.title')}</h3>
            <div className="skill-tags">
              {technicalSkills.map((skill: string, index: number) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>{t('skills.ai.title')}</h3>
            <div className="skill-tags">
              {aiSkills.map((skill: string, index: number) => (
                <span key={index} className="skill-tag ai-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>{t('skills.tools.title')}</h3>
            <div className="skill-tags">
              {tools.map((tool: string, index: number) => (
                <span key={index} className="skill-tag tool-tag">{tool}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3>{t('skills.business.title')}</h3>
            <div className="skill-tags">
              {businessSkills.map((skill: string, index: number) => (
                <span key={index} className="skill-tag business-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="skill-levels">
          <div className="level-section">
            <h4>Proficiency Levels</h4>
            <div className="level-bars">
              <div className="level-item">
                <span className="level-label">Python / AI/ML</span>
                <div className="level-bar">
                  <div className="level-fill expert"></div>
                </div>
                <span className="level-text">Expert</span>
              </div>
              <div className="level-item">
                <span className="level-label">Full Stack Development</span>
                <div className="level-bar">
                  <div className="level-fill advanced"></div>
                </div>
                <span className="level-text">Advanced</span>
              </div>
              <div className="level-item">
                <span className="level-label">Data Analysis</span>
                <div className="level-bar">
                  <div className="level-fill advanced"></div>
                </div>
                <span className="level-text">Advanced</span>
              </div>
              <div className="level-item">
                <span className="level-label">Cloud & DevOps</span>
                <div className="level-bar">
                  <div className="level-fill intermediate"></div>
                </div>
                <span className="level-text">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
