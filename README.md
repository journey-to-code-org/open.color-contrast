# open.color-contrast

Dependency-free WCAG relative-luminance and contrast-ratio helpers for sRGB colors.

## Install

```bash
npm install @journey-to-code/open-color-contrast
```

## Usage

```js
contrastRatio("#111111", "#ffffff");
meetsContrast("#777777", "#ffffff", 4.5);
```

## Runtime

- Node.js 18+
- modern ESM-capable tooling
- zero runtime dependencies

## Development

```bash
npm test
```

## Scope

This package intentionally focuses on one small, reusable responsibility.
Application-specific behavior belongs in higher-level packages.

## License

MIT
