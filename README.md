# BrandKlout - Fully Organized React + Vite Project

A professionally structured React application with proper separation of concerns, reusable components, custom hooks, and organized data management.

## ✨ Features

- 🎨 **Component-Based Architecture** - Each section is its own modular component
- 🪝 **Custom React Hooks** - Reusable logic for theme, animations, and scrolling
- 📊 **Centralized Data** - All content in organized data files
- 🎭 **Dark/Light Theme** - With localStorage persistence
- ⚡ **Vite** - Lightning-fast development and optimized builds
- 📱 **Fully Responsive** - Mobile-first design
- 🎬 **Scroll Animations** - Smooth reveal effects
- 🎠 **Interactive Carousel** - Touch-friendly navigation

## 📁 Project Structure

```
brandklout-vite-organized/
├── src/
│   ├── components/          # React components
│   │   ├── BackgroundGradient.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── Features.jsx
│   │   ├── Testimonials.jsx
│   │   ├── TransformationSection.jsx
│   │   ├── WhyChoose.jsx
│   │   ├── CTA.jsx
│   │   ├── FAQ.jsx
│   │   └── Footer.jsx
│   │
│   ├── hooks/              # Custom React hooks
│   │   ├── useTheme.js
│   │   ├── useScrollAnimations.js
│   │   └── useSmoothScroll.js
│   │
│   ├── data/               # Content data files
│   │   ├── statsData.js
│   │   ├── featuresData.js
│   │   ├── testimonialsData.js
│   │   ├── whyChooseData.js
│   │   └── faqData.js
│   │
│   ├── styles/             # CSS files
│   │   └── global.css
│   │
│   ├── App.jsx             # Main application component
│   └── main.jsx            # Application entry point
│
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   
   Opens at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📦 Components

### Core Components

| Component | Purpose | Data Source |
|-----------|---------|-------------|
| `BackgroundGradient` | Animated gradient orbs | - |
| `Header` | Navigation with theme toggle | - |
| `Hero` | Main hero section with CTA | - |
| `Stats` | Animated statistics | `statsData.js` |
| `Features` | Services grid | `featuresData.js` |
| `Testimonials` | Video testimonials | `testimonialsData.js` |
| `TransformationSection` | 3-step transformation flow | - |
| `WhyChoose` | Interactive carousel | `whyChooseData.js` |
| `CTA` | Call-to-action section | - |
| `FAQ` | Accordion FAQ | `faqData.js` |
| `Footer` | Contact and links | - |

## 🪝 Custom Hooks

### `useTheme()`
Manages dark/light theme with localStorage persistence.

```javascript
import { useTheme } from './hooks/useTheme';

function MyComponent() {
  useTheme(); // Automatically handles theme toggle
}
```

### `useScrollAnimations()`
Handles scroll-triggered animations and stat counter animations.

```javascript
import { useScrollAnimations } from './hooks/useScrollAnimations';

function MyComponent() {
  useScrollAnimations(); // Activates on scroll
}
```

### `useSmoothScroll()`
Enables smooth scrolling for anchor links.

```javascript
import { useSmoothScroll } from './hooks/useSmoothScroll';

function MyComponent() {
  useSmoothScroll(); // Smooth anchor navigation
}
```

## 📊 Data Management

All content is centralized in the `src/data/` directory:

### Example: Adding a New Testimonial

Edit `src/data/testimonialsData.js`:

```javascript
export const testimonialsData = [
  // ... existing testimonials
  {
    id: 4,
    name: "Dr. New Doctor",
    practice: "New Practice",
    avatar: "ND",
    rating: 5,
    videoUrl: "https://youtube.com/embed/...",
    quote: "Amazing results!"
  }
];
```

The component automatically updates!

## 🎨 Styling

All styles are in `src/styles/global.css`:

- **Base styles** - Reset, body, typography
- **Components** - Component-specific styles
- **Animations** - Scroll animations, transitions
- **Responsive** - Mobile-first breakpoints
- **Theme** - Dark/light mode variables

### Theme Colors

```css
Primary Gradient: #667eea → #764ba2
Secondary Gradient: #f093fb → #f5576c
Tertiary Gradient: #4facfe → #00f2fe
```

## ✏️ Customization Guide

### 1. Update Content

Edit data files in `src/data/`:
- `statsData.js` - Statistics numbers
- `featuresData.js` - Feature cards
- `testimonialsData.js` - Client testimonials
- `whyChooseData.js` - Service offerings
- `faqData.js` - FAQ questions

### 2. Modify Components

Edit component files in `src/components/`:
- Each component is self-contained
- Easy to update individual sections
- Clear separation of concerns

### 3. Customize Styles

Edit `src/styles/global.css`:
- Search for color hex codes
- Update gradients
- Modify spacing
- Adjust animations

### 4. Add New Sections

1. Create new component: `src/components/MySection.jsx`
2. Import in `App.jsx`
3. Add to render tree
4. Create data file if needed

Example:
```javascript
// src/components/MySection.jsx
const MySection = () => {
  return (
    <section className="my-section">
      <h2>My New Section</h2>
    </section>
  );
};

export default MySection;

// src/App.jsx
import MySection from './components/MySection';

function App() {
  return (
    <>
      {/* ... other components */}
      <MySection />
    </>
  );
}
```

## 🎯 Key Benefits

### 1. **Maintainable**
- Clear file structure
- Single responsibility principle
- Easy to find and update code

### 2. **Scalable**
- Add new components easily
- Reusable hooks
- Centralized data management

### 3. **Professional**
- Industry-standard structure
- Best practices throughout
- Clean code organization

### 4. **Developer-Friendly**
- Fast hot reload with Vite
- Clear component boundaries
- Intuitive naming conventions

## 🛠️ Development Tips

### Hot Reload
Changes to components, hooks, or styles update instantly during development.

### Component Isolation
Each component can be developed and tested independently.

### Data Updates
Modify data files without touching component logic.

### Adding Animations
Use existing animation classes in `global.css`:
- `.scroll-fade-in`
- `.scroll-slide-left`
- `.scroll-slide-right`
- `.scroll-scale`

## 📱 Responsive Breakpoints

```css
Desktop: > 1024px
Tablet: 768px - 1024px
Mobile: < 768px
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🚢 Deployment

After running `npm run build`, deploy the `dist/` folder to:
- **Netlify** - Drag and drop `dist/` folder
- **Vercel** - Connect Git repository
- **GitHub Pages** - Use `gh-pages` package
- **Any static host** - Upload `dist/` contents

## 📄 License

Private and proprietary to BrandKlout Inc.

## 🤝 Contributing

This is a production website. Follow the existing patterns when making changes.

---

**Need Help?** Check the component files - they're well-commented and easy to understand!
