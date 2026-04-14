import './Projects.css';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">{t('projects.title')}</h2>
        
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <h3>{t('projects.gaitgpt.title')}</h3>
              <span className="project-period">{t('projects.gaitgpt.period')}</span>
            </div>
            <div className="project-content">
              <div className="project-section">
                <h4>Problem</h4>
                <p>{t('projects.gaitgpt.problem')}</p>
              </div>
              <div className="project-section">
                <h4>Data</h4>
                <p>{t('projects.gaitgpt.data')}</p>
              </div>
              <div className="project-section">
                <h4>Approach</h4>
                <p>{t('projects.gaitgpt.approach')}</p>
              </div>
              <div className="project-section">
                <h4>Outcome</h4>
                <p>{t('projects.gaitgpt.outcome')}</p>
              </div>
              <div className="project-section">
                <h4>My Contribution</h4>
                <p>{t('projects.gaitgpt.contribution')}</p>
              </div>
            </div>
            <div className="project-footer">
              <a href={t('projects.gaitgpt.link')} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>{t('projects.srr.title')}</h3>
              <span className="project-period">{t('projects.srr.period')}</span>
            </div>
            <div className="project-content">
              <div className="project-section">
                <h4>Problem</h4>
                <p>{t('projects.srr.problem')}</p>
              </div>
              <div className="project-section">
                <h4>Data</h4>
                <p>{t('projects.srr.data')}</p>
              </div>
              <div className="project-section">
                <h4>Approach</h4>
                <p>{t('projects.srr.approach')}</p>
              </div>
              <div className="project-section">
                <h4>Outcome</h4>
                <p>{t('projects.srr.outcome')}</p>
              </div>
              <div className="project-section">
                <h4>My Contribution</h4>
                <p>{t('projects.srr.contribution')}</p>
              </div>
            </div>
            <div className="project-footer">
              <a href={t('projects.srr.link')} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3 className="game-project-title">{t('projects.game.title')}</h3>
              <span className="project-period">{t('projects.game.period')}</span>
            </div>
            <div className="project-content">
              <div className="project-section">
                <h4>Problem</h4>
                <p>{t('projects.game.problem')}</p>
              </div>
              <div className="project-section">
                <h4>Data</h4>
                <p>{t('projects.game.data')}</p>
              </div>
              <div className="project-section">
                <h4>Approach</h4>
                <p>{t('projects.game.approach')}</p>
              </div>
              <div className="project-section">
                <h4>Outcome</h4>
                <p>{t('projects.game.outcome')}</p>
              </div>
              <div className="project-section">
                <h4>My Contribution</h4>
                <p>{t('projects.game.contribution')}</p>
              </div>
            </div>
            <div className="project-footer">
              <span className="project-link disabled">{t('projects.game.link')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
