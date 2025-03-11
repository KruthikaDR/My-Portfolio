# Modern Portfolio Website with React and Tailwind CSS

A responsive and interactive portfolio website built with React, TypeScript, and Tailwind CSS, featuring smooth animations, modern UI components, and a seamless user experience.

This portfolio website showcases professional experience, skills, and projects through an elegant and user-friendly interface. It combines modern web technologies with sophisticated design patterns to create an engaging and performant web application.

## Repository Structure
```
frontend/
├── src/                      # Source code directory
│   ├── components/           # Reusable UI components (HeroSection, NavMenu, etc.)
│   ├── extensions/          
│   │   └── shadcn/          # Shadcn UI component library integration
│   ├── pages/               # Page components and routing logic
│   ├── utils/               # Utility functions and helpers
│   └── main.tsx            # Application entry point
├── public/                  # Static assets and images
├── index.html              # HTML entry point
├── vite.config.ts          # Vite build configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json            # Project dependencies and scripts
```

## Usage Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Basic knowledge of React and TypeScript

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install
# or
yarn install
```

### Quick Start
1. Start the development server:
```bash
npm run dev
# or
yarn dev
```

2. Open your browser and navigate to `http://localhost:5173`

### More Detailed Examples

#### Customizing the Hero Section
```tsx
// src/components/HeroSection.tsx
import { HeroSection } from "../components/HeroSection";

// Update the hero content
<HeroSection 
  className="custom-class"
/>
```

#### Adding Navigation Items
```tsx
// src/components/NavMenu.tsx
const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  // Add more navigation items
];
```

### Troubleshooting

#### Common Issues

1. Build Failures
```bash
# Clear node modules and reinstall
rm -rf node_modules
npm install
```

2. Styling Issues
- Ensure Tailwind CSS is properly configured in `tailwind.config.js`
- Check for proper class name usage with the `cn` utility

3. Component Loading Issues
- Check import paths are correct
- Verify component names match export names

#### Debug Mode
Enable debug logging by setting:
```bash
# In development
VITE_DEBUG=true
```

Log files location: `frontend/logs/`

## Data Flow

The application follows a component-based architecture with unidirectional data flow.

```ascii
[User Input] -> [Router] -> [Page Components]
                              |
                    [Reusable Components]
                              |
                    [UI State Management]
```

Component Interactions:
1. Router handles navigation and URL management
2. Page components organize layout and section composition
3. Reusable components handle specific UI functionality
4. State changes trigger re-renders through React's virtual DOM
5. Animations and transitions are managed through CSS classes
6. Form submissions and user interactions are handled through event handlers
7. Navigation state is managed through the NavMenu component
8. Intersection Observer API tracks scroll position for animations