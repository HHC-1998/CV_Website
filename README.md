# Personal Job-Seeking Website

A modern, responsive personal portfolio website built with React, TypeScript, and Vite. This website showcases professional skills, projects, and contact information for job-seeking purposes.

## 🌟 Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite
- **Responsive Design**: Fully responsive across all device sizes
- **Multi-language Support**: English and Chinese language support
- **Professional UI**: Clean, modern design with consistent color scheme
- **Interactive Elements**: Smooth animations and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Optimized with Vite for fast build times

## 📁 Project Structure

```
d:/CV_Website/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # React components
│   │   ├── Header/        # Navigation header
│   │   ├── Home/          # Home section
│   │   ├── About/         # About Me section
│   │   ├── Skills/        # Skills showcase
│   │   ├── Projects/      # Project portfolio
│   │   ├── Resume/        # Resume/CV section
│   │   └── Contact/       # Contact information
│   ├── i18n/              # Internationalization
│   │   └── locales/       # Translation files
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies
├── vite.config.ts         # Vite configuration
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd CV_Website

# Install dependencies
npm install
```

### Development
```bash
# Start development server
npm run dev
```
Open http://localhost:5173 to view the website.

### Build for Production
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

### Color Palette
- **Primary Text**: `#1a1a1a` (Light) / `#f8f9fa` (Dark)
- **Secondary Text**: `#666666` (Light) / `#adb5bd` (Dark)
- **Accent Color**: `#2d3436` (Dark Blue/Gray)
- **Background**: `#ffffff` (Light) / `#121212` (Dark)

### Typography
- **Primary Font**: System font stack (San Francisco, Segoe UI, etc.)
- **Headings**: Bold weights with proper hierarchy
- **Body Text**: Readable line heights and spacing

### Components
- **Header**: Sticky navigation with language switcher
- **Cards**: Consistent card design for projects
- **Buttons**: Interactive buttons with hover states
- **Tags**: Skill tags with hover effects

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: > 768px

## 🌐 Internationalization

The website supports two languages:
- **English** (Default)
- **中文** (Chinese)

Translation files are located in `src/i18n/locales/`.

## 📊 Project Sections

### 1. Home / Headline
- Positioning statement for job targeting
- Key skill tags
- Quick links to important sections

### 2. About Me
- Professional introduction
- Education background
- Personal strengths and focus areas

### 3. Skills
- **Technical Skills**: Programming languages, frameworks, tools
- **Business Skills**: Problem-solving, communication, project management
- **Tools & Technologies**: Development tools and platforms

### 4. Projects Portfolio
- **GaitGPT System**: AI-powered gait analysis system
- **SRR Agentic Case Processing**: Enterprise AI processing system
- **Multiplayer Online Web Game**: Real-time web game development

### 5. Resume / CV
- Downloadable PDF resume
- Professional summary
- Education and experience timeline

### 6. Contact
- Contact information (email, phone, location)
- Social media links (GitHub, LinkedIn)
- Contact form

## 🔧 Technical Implementation

### Key Technologies
- **React 18**: Component-based architecture
- **TypeScript**: Type safety and better developer experience
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **i18next**: Internationalization framework
- **CSS Variables**: Custom properties for theming

### Code Quality
- **ESLint**: Code linting and quality checks
- **TypeScript**: Strict type checking
- **Modular CSS**: Component-scoped styles
- **Clean Architecture**: Separation of concerns

### Performance Optimizations
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Proper image formats and sizes
- **CSS Minification**: Production CSS optimization

## 🚀 Deployment

This project can be deployed to various platforms:

### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
"homepage": "https://username.github.io/repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel
1. Import your Git repository
2. Automatic detection of Vite project
3. Deploy with zero configuration

## 📝 Assignment Compliance

This project was created as an academic assignment with the following requirements:

### Required Sections (6/6 Completed)
1. ✅ Home / Headline with positioning statement
2. ✅ About Me with education and strengths
3. ✅ Skills organized by category
4. ✅ Projects with detailed descriptions
5. ✅ Resume/CV with download option
6. ✅ Contact information with social links

### Rubric Alignment
- **Basic Information**: Clear job targeting and positioning
- **Completeness**: All 6 sections included with clear navigation
- **Skills Presentation**: Organized skills mapped to projects
- **Project Showcase**: Detailed project narratives with clear outcomes
- **Professional Presentation**: Clean layout, mobile-friendly, working links

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is created for educational purposes as part of an academic assignment.

## 👤 Author

**Haochen Hou**
- GitHub: [@HHC-1998](https://github.com/HHC-1998)
- LinkedIn: [Haochen Hou](https://linkedin.com/in/haochen-hou)

## 🙏 Acknowledgments

- React and Vite teams for amazing tools
- i18next for internationalization support
- All open-source contributors whose work made this project possible

---

*Last Updated: April 2026*