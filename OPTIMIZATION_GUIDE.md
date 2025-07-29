# Image Optimization Guide

## Large Images That Need Compression

Based on analysis, these images require optimization:

### Priority 1 - Largest Files
1. **asucircle-logo.png** (554KB) → Target: <100KB
   - Convert to WebP format
   - Resize if displayed smaller than source
   - Consider using responsive images

2. **Mumbai-university-LOGO.jpg** (147KB) → Target: <50KB
   - Compress JPEG quality to 80-85%
   - Convert to WebP if browser support allows
   - Resize to actual display dimensions

3. **Uncanny_Logo_Transp.png** (183KB) → Target: <50KB
   - Convert to WebP with transparency
   - Optimize PNG if WebP not suitable
   - Check if image can be resized

### Priority 2 - Medium Files
4. **contactMail.webp** (49KB) → Target: <30KB
5. **manOnTable.svg** (45KB) → Target: <30KB (optimize SVG)
6. **contactMailDark.svg** (29KB) → Target: <20KB (optimize SVG)

## Recommended Tools

### Command Line Tools
```bash
# WebP conversion
cwebp -q 85 input.jpg -o output.webp
cwebp -q 85 -alpha_q 85 input.png -o output.webp

# JPEG optimization
jpegoptim --max=85 --strip-all input.jpg

# PNG optimization
optipng -o7 input.png
pngquant --quality=80-90 input.png

# SVG optimization
svgo input.svg -o output.svg
```

### Online Tools
- [TinyPNG](https://tinypng.com/) - PNG/JPEG compression
- [Squoosh](https://squoosh.app/) - Modern image compression
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization

## Implementation Steps

1. **Backup original images**
2. **Compress images using tools above**
3. **Update image imports in React components**
4. **Add responsive image loading where needed**
5. **Test image quality on different devices**

## Additional Optimizations

### Lazy Loading
```jsx
// Add to image components
<img 
  src={imageSrc} 
  alt="Description"
  loading="lazy"
  decoding="async"
/>
```

### Responsive Images
```jsx
// For different screen sizes
<picture>
  <source media="(max-width: 768px)" srcSet="small.webp" type="image/webp" />
  <source media="(max-width: 768px)" srcSet="small.jpg" />
  <source srcSet="large.webp" type="image/webp" />
  <img src="large.jpg" alt="Description" />
</picture>
```

### Estimated Impact
- **Total size reduction**: ~400KB (40% smaller)
- **Improved load time**: 2-3 seconds faster on 3G
- **Better Core Web Vitals**: LCP improvement
- **SEO boost**: Faster page speed ranking factor