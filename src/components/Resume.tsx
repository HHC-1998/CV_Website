import './Resume.css';
import { useTranslation } from 'react-i18next';

const Resume = () => {
  const { t, i18n } = useTranslation();

  // 根据当前语言获取PDF文件路径
  const getResumeUrl = () => {
    const basePath = import.meta.env.BASE_URL || '/';
    const fileName = i18n.language === 'zh' ? 'CV_cn.pdf' : 'CV_en.pdf';
    return `${basePath}cv/${fileName}`;
  };

  // 处理PDF下载
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = getResumeUrl();
    const link = document.createElement('a');
    link.href = url;
    link.download = `Haochen_Hou_Resume_${i18n.language === 'zh' ? 'CN' : 'EN'}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="resume">
      <div className="container">
        <h2 className="section-title">{t('resume.title')}</h2>
        
        <div className="resume-content">
          <div className="resume-header">
            <a 
              href={getResumeUrl()}
              className="download-btn"
              onClick={handleDownload}
            >
              {t('resume.download')}
            </a>
          </div>

          <div className="resume-sections">
            <div className="resume-section">
              <h3>{t('resume.summary')}</h3>
              <p>{t('resume.summaryText')}</p>
            </div>

            <div className="resume-section">
              <h3>{t('resume.education')}</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-date">Sep 2025 – Jun 2026</div>
                  <div className="timeline-content">
                    <h4>Master of Science in Artificial Intelligence and Business Analytics</h4>
                    <p className="timeline-subtitle">Lingnan University, Hong Kong</p>
                    <p>GPA: 3.53/4</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">2018 – 2022</div>
                  <div className="timeline-content">
                    <h4>Bachelor of Computer Science (Software Engineering Stream)</h4>
                    <p className="timeline-subtitle">Carleton University, Ottawa, Canada</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="resume-section">
              <h3>{t('resume.experience')}</h3>
              <div className="experience-list">
                <div className="experience-item">
                  <h4>GaitGPT - AI-Powered Gait Analysis System</h4>
                  <p className="experience-period">Jan 2026 – Present</p>
                  <ul>
                    <li>Developed intelligent gait analysis system for medical assessment</li>
                    <li>Implemented RAG pipeline and custom prompt engineering</li>
                    <li>Built agent workflow control for intelligent interaction</li>
                  </ul>
                </div>
                <div className="experience-item">
                  <h4>SRR Agentic Case Processing System</h4>
                  <p className="experience-period">Dec 2025 – Jan 2026</p>
                  <ul>
                    <li>Led development of enterprise-level AI processing system</li>
                    <li>Built RAG pipeline with vector databases and external APIs</li>
                    <li>Designed AI Agent scheduling logic and three-tier memory system</li>
                  </ul>
                </div>
                <div className="experience-item">
                  <h4>Multiplayer Online Web Game</h4>
                  <p className="experience-period">May 2023 – Jul 2023</p>
                  <ul>
                    <li>Developed real-time multiplayer web game with Spring Boot</li>
                    <li>Implemented WebSocket integration for real-time communication</li>
                    <li>Built responsive frontend with Bootstrap and JQuery</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="resume-section">
              <h3>Additional Information</h3>
              <p>{t('resume.languages')}</p>
              <div className="additional-info">
                <div className="info-item">
                  <strong>GitHub:</strong> <a href="https://github.com/HHC-1998" target="_blank" rel="noopener noreferrer">https://github.com/HHC-1998</a>
                </div>
                <div className="info-item">
                  <strong>Email:</strong> haochenhou@LN.hk / h383842447@outlook.com
                </div>
                <div className="info-item">
                  <strong>Phone:</strong> +852 5988 3005 / +86 15935154248
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;