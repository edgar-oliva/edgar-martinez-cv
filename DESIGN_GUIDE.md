# CV Website Design Guide

## Overview
This document captures the design decisions, UI patterns, and styling conventions used in the Edgar Martinez CV website. Use this as a reference for maintaining consistency across future updates.

## Color Palette

### Primary Colors
- **Blue**: `blue-500`, `blue-600` - Used for primary actions, first job experience
- **Purple**: `purple-500`, `purple-600` - Used for second job experience, section dividers
- **Pink**: `pink-500`, `pink-600` - Used for accent elements
- **Gradient Combinations**: 
  - Blue to Purple: `from-blue-500 to-purple-600`
  - Purple to Pink: `from-purple-500 to-pink-600`
  - Pink to Orange: `from-pink-500 to-orange-500`
  - Orange to Red: `from-orange-500 to-red-500`

### Background & Text
- **Light Mode**: White backgrounds with gray text (`text-gray-600`, `text-gray-700`, `text-gray-900`)
- **Dark Mode**: Dark gray backgrounds with light text (`dark:bg-gray-800`, `dark:text-gray-300`, `dark:text-white`)
- **Glassmorphism**: `bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm` for card-like sections

## Typography

### Headings
- **Main Title**: `text-4xl sm:text-5xl lg:text-6xl font-bold` with gradient text effect
- **Section Titles**: `text-3xl font-bold`
- **Job Titles**: `text-xl sm:text-2xl font-bold`
- **Job Positions**: `text-lg font-semibold italic` (italicized for distinction)

### Body Text
- **Descriptions**: `text-lg sm:text-xl` for hero section
- **Regular Content**: `text-gray-600 dark:text-gray-400`

### Special Text Effects
- **Gradient Text**: Use `bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent`
- **IMPORTANT**: Add `pb-1` to gradient text to prevent letter cutoff (especially descenders like 'g', 'j', 'p', 'q', 'y')

## Layout Patterns

### Section Structure
```tsx
<section id="section-name" className="scroll-mt-20 space-y-8">
  <div className="flex items-center gap-3">
    <div className="p-2 bg-[color]-100 dark:bg-[color]-900/30 rounded-lg">
      <Icon className="w-6 h-6 text-[color]-600 dark:text-[color]-400" />
    </div>
    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Section Title</h3>
  </div>
  {/* Section content */}
</section>
```

### Card Pattern
```tsx
<div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border-l-4 border-[color]-500 hover:shadow-xl transition-all">
  {/* Card content */}
</div>
```

### Section Dividers
```tsx
<div className="flex items-center gap-4">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
  <div className="w-2 h-2 bg-[color]-500 rounded-full"></div>
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
</div>
```

## List Styling

### Bullet Points - CRITICAL ALIGNMENT PATTERN
**ALWAYS use this exact pattern for bullet lists:**
```tsx
<ul className="space-y-3 text-gray-600 dark:text-gray-400">
  <li className="flex items-center gap-3">
    <span className="text-[color]-500 flex-shrink-0">▪</span>
    <span>List item text content</span>
  </li>
</ul>
```

**Key Requirements:**
- Use `items-center` on the `<li>` element (NOT `items-start`)
- NO margin-top on the bullet span
- ALWAYS include `flex-shrink-0` on the bullet span
- Use `gap-3` for spacing between bullet and text

**Why This Matters:**
- `items-center` vertically centers the bullet with the first line of text
- `flex-shrink-0` prevents the bullet from shrinking when text wraps
- This creates perfect visual alignment regardless of text length

## Skills Section

### Highlighted Skills
Use gradient backgrounds for primary/featured skills:
```tsx
<span className="px-4 py-2 bg-gradient-to-r from-[color1]-500 to-[color2]-600 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
  Skill Name
</span>
```

### Regular Skills
Use subtle backgrounds for secondary skills:
```tsx
<span className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
  Skill Name
</span>
```

### Currently Highlighted Skills
- **Digital Transformation**: AI, Python, Power BI, Power Query
- **Business Tools**: Salesforce, SAP

## Navigation

### Structure
- **Desktop**: Horizontal menu with smooth scroll links
- **Mobile**: Hamburger menu with overlay
- **Active State**: Dynamically highlights visible section
- **Smooth Scrolling**: Enabled via `scroll-behavior: smooth` in CSS

### Menu Items
Current navigation order:
1. About
2. Digital Transformation
3. Experience
4. Skills

## Date Formatting
**Format**: `Month YYYY - Current` or `Month YYYY - Month YYYY`
**Example**: `February 2025 - Current`
**Important**: Always include space before and after the dash

## Decorative Elements

### Background Shapes
Fixed geometric shapes for visual interest:
- Circles: `rounded-full` with gradient backgrounds
- Squares: `rounded-lg` with rotation transforms
- Positioned with `fixed` and specific coordinates

### Badges
```tsx
<span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
  <Icon className="w-4 h-4" />
  Badge Text
</span>
```

## Responsive Design

### Breakpoints
- **Mobile**: Default styles
- **Tablet**: `sm:` prefix (640px+)
- **Desktop**: `lg:` prefix (1024px+)

### Common Patterns
- Padding: `p-6 sm:p-8` or `p-8 sm:p-10`
- Text sizes: `text-xl sm:text-2xl`
- Flex direction: `flex-col sm:flex-row`

## Animation & Transitions

### Hover Effects
- Cards: `hover:shadow-xl transition-all`
- Skills: `hover:-translate-y-0.5 transition-all`
- Links: `hover:bg-[color]-700 transition-all`

### Scroll Behavior
- Smooth scrolling enabled globally
- Section offset: `scroll-mt-20` to account for fixed navigation

## Dark Mode

### Implementation
- Uses Tailwind's `dark:` variant
- Toggle component in navigation
- Persists preference in localStorage

### Color Adjustments
- Backgrounds: Lighter in light mode, darker in dark mode
- Text: Dark in light mode, light in dark mode
- Borders: Subtle opacity differences
- Glassmorphism: Adjusted opacity for both modes

## Icons

### Library
- **lucide-react** for all icons
- Consistent sizing: `w-6 h-6` for section headers, `w-4 h-4` for inline icons

### Current Icons
- Briefcase: Experience section
- Code2: Skills section
- Sparkles: Digital Transformation section
- Mail, Phone, Linkedin: Contact buttons

## Best Practices

1. **Always test in both light and dark modes**
2. **Maintain consistent spacing** using Tailwind's spacing scale
3. **Use semantic HTML** for accessibility
4. **Keep gradient combinations consistent** with established palette
5. **Test responsive behavior** at all breakpoints
6. **Ensure proper contrast ratios** for accessibility
7. **Use `flex-shrink-0`** on icons and bullets to prevent squishing
8. **Add `pb-1` to gradient text** to prevent letter cutoff

## Common Fixes Reference

### Text Cutoff Issues
- **Problem**: Letters with descenders (g, j, p, q, y) cut off in gradient text
- **Solution**: Add `pb-1` to the element with gradient text

### Bullet Alignment Issues
- **Problem**: Bullets not aligned with text
- **Solution**: Use `items-center` on `<li>` and remove margin-top from bullet span

### Date Spacing Issues
- **Problem**: Date ranges without proper spacing
- **Solution**: Ensure space before and after dash: `Month YYYY - Current`

---

**Last Updated**: November 2025
**Version**: 1.0
