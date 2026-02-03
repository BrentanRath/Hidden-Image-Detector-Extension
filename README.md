# Image Visibility Tool

A browser extension that detects and reveals hidden images on web pages.

## Features

- Finds images hidden via CSS (`display: none`, `visibility: hidden`, `opacity: 0`)
- Makes all images visible with configurable options
- Logs detailed information about hidden elements
- Monitors dynamically added images

## Configuration

Edit `CONFIG` object to customize behavior:

```javascript
{
  shouldRunOnThisPage: () => true,  // Function to filter URLs
  findHiddenElements: true,          // Log hidden images
  changeHiddenElements: true         // Force images visible
}
```

## How It Works

1. Scans page for images on load
2. Identifies hidden images by computed styles
3. Optionally forces all images to be visible
4. Monitors DOM for dynamically added images

## Console Output

- Lists found hidden images with classes, IDs, and styles
- Reports total count of hidden images
- Confirms visibility changes

## Usage

Install as a browser extension and configure the `CONFIG` object in `content.js` to match your needs.

---

**Note:** Use responsibly and in accordance with website.

---

*This README.md was generated with AI (GitHub Copilot, model: Claude Sonnet 4.5, commit: 2948a11).*