import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>{t('home.title')}</Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''}
                onClick={closeMenu}
              >
                {t('nav.home')}
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isActive('/about') ? 'active' : ''}
                onClick={closeMenu}
              >
                {t('nav.about')}
              </Link>
            </li>
            <li>
              <Link 
                to="/skills" 
                className={isActive('/skills') ? 'active' : ''}
                onClick={closeMenu}
              >
                {t('nav.skills')}
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={isActive('/projects') ? 'active' : ''}
                onClick={closeMenu}
              >
                {t('nav.projects')}
              </Link>
            </li>
            <li>
              <Link 
                to="/resume" 
                className={isActive('/resume') ? 'active' : ''}
                onClick={closeMenu}
              >
                {t('nav.resume')}
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isActive('/contact') ? 'active' : ''}
                onClick={closeMenu}
              >
                {t('nav.contact')}
              </Link>
            </li>
          </ul>
          
          <div className="language-switcher">
            <button 
              className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => {
                changeLanguage('en');
                closeMenu();
              }}
            >
              {t('language.en')}
            </button>
            <button 
              className={`lang-btn ${i18n.language === 'zh' ? 'active' : ''}`}
              onClick={() => {
                changeLanguage('zh');
                closeMenu();
              }}
            >
              {t('language.zh')}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;