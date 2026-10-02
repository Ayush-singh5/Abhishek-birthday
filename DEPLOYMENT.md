# Celebration Experience — Final QA & Deployment Notes

This version keeps the existing story, photographs, audio, animations, and transition timings unchanged. The added files make the project friendlier to static hosting.

## Local test

From this folder:

```powershell
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## Before publishing

Confirm this file exists:

```text
assets/audio/music.mp3
```

The six images should remain in:

```text
assets/images/
```

## GitHub Pages

1. Create a GitHub repository.
2. Upload the contents of this folder to the repository root.
3. In the repository, open **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select the main branch and the `/ (root)` folder.
6. Save and wait for GitHub to publish the site.
7. Open the published Pages URL and test the full journey again on desktop and mobile.

## Important privacy note

`robots.txt` and the `noindex` meta tag ask compliant search engines not to index the page. They are **not access control**. Anyone who receives the URL may still open it, and a public static site can be accessed directly.

For personal photos, avoid putting sensitive information in filenames or captions and use a non-obvious sharing URL where your hosting provider supports one.
