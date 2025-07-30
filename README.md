# @couleetech/lcars

A React UI Framework for creating LCARS (Library Computer Access/Retrieval System) interfaces, inspired by the iconic computer interface from Star Trek.

**⚠️ Early Development Notice:** This framework is currently in early development. APIs and components may change as we work towards a stable release.

## Features

- **TypeScript Support**: Fully typed components for better developer experience
- **Theme System**: Comprehensive theming with LCARS-authentic colors and styles
- **Component Library**: Pre-built LCARS UI components including frames, corners, and sidebars
- **Storybook Integration**: Interactive component documentation and development environment
- **Vite-Powered**: Fast development builds and hot module replacement

## Installation

```bash
npm install @couleetech/lcars
```

## Getting Started

### Basic Usage

```tsx
import { ThemeProvider, Frame } from '@couleetech/lcars';

function App() {
  return (
    <ThemeProvider>
      <Frame>
        <div>Your LCARS interface content</div>
      </Frame>
    </ThemeProvider>
  );
}
```

### Available Components

- **Frame**: Main container component that creates the classic LCARS frame layout
- **Corner**: LCARS-style corner components for custom layouts
- **Sidebar**: Vertical sidebar components for frame edges
- **ThemeProvider**: Context provider for theming

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/couleetech/lcars.git
cd lcars
npm install
```

### Development Commands

- `npm run dev` - Start the Vite development server
- `npm run storybook` - Launch Storybook on port 5000 for component development
- `npm run build` - Build the library for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview the production build

### Storybook

This project uses Storybook for component development and documentation. Run Storybook to explore available components and their props:

```bash
npm run storybook
```

Visit http://localhost:5000 to view the component library.

## Theming

The framework includes a comprehensive theme system that supports:

- **Colors**: Main, alternative 1, and alternative 2 color schemes
- **Frame Sizes**: Small, medium, and large frame configurations
- **Typography**: LCARS-authentic font settings
- **Spacing**: Consistent spacing values

### Custom Theme Example

```tsx
import { ThemeProvider } from '@couleetech/lcars';

const customTheme = {
  colors: {
    main: '#FF9900',
    alt1: '#CC99CC',
    alt2: '#9999CC'
  }
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

## Contributing

We welcome contributions! As this project is in early development, please open an issue to discuss proposed changes before submitting pull requests.

## Acknowledgments

Special thanks to:
- [LCARS UI](https://lcars-ui.com) - For excellent LCARS implementation reference
- [The LCARS](https://www.thelcars.com) - For comprehensive LCARS design resources and inspiration

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Star Trek and LCARS are registered trademarks of CBS Studios Inc. This project is not affiliated with or endorsed by CBS Studios Inc.*