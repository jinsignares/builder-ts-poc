# Design System Component Reference

This document provides a comprehensive overview of the design system's component architecture and available components for code generation and development reference.

## System Architecture

The design system follows a modular component-based architecture where each component provides specific functionality. Components are organized into logical groups that can work independently or in combination with other components.

### Component Organization Principles

- **Single Responsibility**: Each component serves a specific purpose
- **Composability**: Components can be combined to create complex interfaces
- **Consistency**: All components follow the same design patterns and API conventions
- **Accessibility**: Components are built with accessibility standards in mind

## Documentation Structure

For detailed documentation on any component, refer to the corresponding MDX file in the `design-system-docs` folder. The documentation files follow the naming convention:

```
design-system-docs/[componentname].mdx
```

For example:
- `design-system-docs/Button.mdx` - Detailed documentation for Button component
- `design-system-docs/Table.mdx` - Detailed documentation for Table component
- `design-system-docs/AnnotationContext.mdx` - Detailed documentation for AnnotationContext
- `design-system-docs/AppLayout.mdx` - Detailed documentation for AppLayout component

These MDX files contain comprehensive information including:
- Component API documentation
- Usage examples
- Props and configuration options
- Best practices and implementation guidelines
- Accessibility requirements
- Integration patterns with other components

## Components

**Counter**: An interactive counter component with increment, decrement, and reset buttons. Accepts an optional initial count value.
**RenderBuilderContent**: Renders Builder.io page content for a given model. Displays a 404 error page when no content is available and the page is not being previewed in Builder.
**Navbar**: A sticky top navigation bar for a fashion e-commerce site (Shopaholic) with brand logo, navigation links, cart icon, sign-in button, and a responsive mobile hamburger menu.
**Footer**: A site footer for a fashion e-commerce site (Shopaholic) with brand logo, navigation links, cart icon, sign-in button, and a short description text.
**Hero**: A full-width hero banner for the Josh Accessories storefront. Displays a background lifestyle image, a large branded title, and a "Shop Now" call-to-action button. Fully responsive across desktop, tablet, and mobile breakpoints.

## Icons

This design system provides an icon library. A list of icons available as well as icon usage examples can be found in `design-system-docs/icons.mdx`.  


## Design Tokens

This design system provides design tokens. A list of tokens available as well as token usage examples can be found in `design-system-docs/*-tokens.mdx`.  


## Usage Guidelines

### Component Dependencies
- Most components are self-contained and can be used independently
- Identify any components that require multiple components to work together
- Some components work better in combination (e.g., Form + FormField, Table + Pagination)

### Integration Patterns
- Layout components typically serve as containers for other components
- Form controls should be wrapped in FormField components for proper labeling
- Navigation components can be used independently or as part of larger layout structures
- Data display components can be enhanced with interactive elements like buttons and popovers

### Accessibility Considerations
- All components are built with accessibility in mind
- Use semantic HTML structures provided by the components
- Leverage built-in ARIA attributes and keyboard navigation
- The LiveRegion component provides additional accessibility announcements when needed

### Responsive Design
- Layout components provide responsive behavior out of the box
- Grid and ColumnLayout components adapt to different screen sizes
- Mobile-friendly navigation patterns are built into navigation components

## Usage Reference

This reference should be used to understand the available components and their intended purposes when generating code or building applications with this design system. For specific implementation details, always consult the corresponding MDX documentation file in the `design-system-docs` folder.
