import './Contact.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('In a real implementation, this would send the message to the server');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-section">
              <h3>{t('contact.getInTouch')}</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <h4>{t('contact.email')}</h4>
                  <p>haochenhou@LN.hk</p>
                  <p>h383842447@outlook.com</p>
                </div>
                <div className="contact-item">
                  <h4>{t('contact.phone')}</h4>
                  <p>+852 5988 3005</p>
                  <p>+86 15935154248</p>
                </div>
                <div className="contact-item">
                  <h4>{t('contact.address')}</h4>
                  <p>Parkview Villa, 1 Tuen On Lane</p>
                  <p>New Territories, Hong Kong</p>
                </div>
                <div className="contact-item">
                  <h4>{t('contact.github')}</h4>
                  <a href="https://github.com/HHC-1998" target="_blank" rel="noopener noreferrer">
                    github.com/HHC-1998
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('contact.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                {t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>

        <div className="social-links">
          <a href="https://github.com/HHC-1998" target="_blank" rel="noopener noreferrer" className="social-link">
            <span className="social-icon">GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <span className="social-icon">LinkedIn</span>
          </a>
          <a href="mailto:haochenhou@LN.hk" className="social-link">
            <span className="social-icon">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
