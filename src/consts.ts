// Shared contact details — used in the nav menu, the About footer and the project footer.
export const EMAIL = 'arina.makhova@gmail.com';

export const SOCIALS = [
  { label: 'IG', name: 'Instagram', href: 'https://www.instagram.com/arinamakhova' },
  { label: 'BE', name: 'Behance', href: 'https://www.behance.net/Arina_Makhova' },
  { label: 'FB', name: 'Facebook', href: 'https://www.facebook.com/arina.makhova' },
  { label: 'LI', name: 'LinkedIn', href: 'https://www.linkedin.com/in/arina-makhova-82b46688' },
];

// ── Responsive media (served from R2 in per-width folders) ──
// Variants are 480 / 900 / 1440 / 1920 wide. The grid never grows past 1920
// (--grid-max), so that's the ceiling. <img> uses these as srcset widths (browser
// picks, DPR-aware); <video> has no srcset, so ResponsiveVideo picks in JS.
// Base URL for media assets. Set PUBLIC_ASSETS_URL in the build env (e.g. a
// custom domain in front of R2); falls back to the R2 public bucket so local
// `dev` works without any .env. Trailing slashes are trimmed — mediaSrc adds them.
export const MEDIA_BASE = (
  import.meta.env.PUBLIC_ASSETS_URL ?? 'https://pub-7f882894bce745c5be03e7449ef36235.r2.dev'
).replace(/\/+$/, '');
export const MEDIA_WIDTHS = [480, 900, 1440, 1920];

// Variant URL for an asset. `path` is '<project>/<file>' (e.g. 'omut/OMUT-01.mp4'); the
// width folder is inserted before the filename → <base>/omut/1920/OMUT-01.mp4.
export const mediaSrc = (path: string, width: number) => {
  const clean = path.replace(/^\/+/, '');
  const i = clean.lastIndexOf('/');
  return `${MEDIA_BASE}/${i >= 0 ? clean.slice(0, i) + '/' : ''}${width}/${clean.slice(i + 1)}`;
};

// Smallest variant width >= the viewport, capped at the largest (for <video>).
export const pickWidth = (viewport: number) =>
  MEDIA_WIDTHS.find((w) => viewport <= w) ?? MEDIA_WIDTHS[MEDIA_WIDTHS.length - 1];
