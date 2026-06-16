// Central place for third-party IDs. Update here if they ever change.
export const GA_MEASUREMENT_ID = "G-V56KD641DR";
export const ADSENSE_CLIENT_ID = "ca-pub-5550886433343844";
// Web3Forms access key — form submissions are delivered to the inbox registered with this key.
export const WEB3FORMS_ACCESS_KEY = "8983ae99-76af-4910-a048-6640052b8464";

// AdSense manual ad-unit slot IDs.
// Create the units in AdSense → Ads → By ad unit → Display (responsive) and
// In-article, then paste the numeric slot IDs below. While these are empty,
// AdPlaceholder safely renders the dev placeholder (no invalid/empty ad units
// are shipped). The moment a slot ID is filled in, every matching spot across
// the site goes live automatically. One unit can be reused on many pages.
export const AD_SLOTS = {
  display: "9913237355",   // Responsive "Display" unit — leaderboard/banner spots
  rectangle: "3675132069", // "In-article" unit — in-content rectangle spots
};
