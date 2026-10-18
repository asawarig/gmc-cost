import { defineConfig } from 'astro/config';

// The page is mounted at plumhq.com/group-health-insurance-cost. Astro bakes
// asset URLs at build time, so the base path has to match the mount path.
// (On Webflow Cloud the builder sets it from the mount path in its UI.)
const MOUNT_PATH = '/group-health-insurance-cost';

export default defineConfig({
  site: 'https://www.plumhq.com',
  base: MOUNT_PATH,
});
