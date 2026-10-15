export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Vision Quest: A New Ascent Wiki",
  shortName: "Vision Quest",
  logoText: "VQ",
  tagline: "Boss Guides, Twin-Stick Combat, Abilities & Achievements",
  description: "Your ultimate guide to Vision Quest: A New Ascent. Explore dangerous mountain trails, master precise twin-stick combat, defeat multi-phase bosses, and unlock New Game+ with our boss strategies, abilities, achievements, and walkthroughs.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://vision-quest.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vision-quest.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/4142020/",
  heroVideoId: "M9OcYgjEMls", // Vision Quest: A New Ascent - official Gameplay Trailer
  social: {
    youtube: "https://www.youtube.com/watch?v=M9OcYgjEMls",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
