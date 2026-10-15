import type { ComponentType } from "react";
import { BookOpen, Clapperboard, ScrollText, Star, Tv, Users } from "lucide-react";

export interface NavItem {
  /** 翻译键（对应 en.json 的 nav 命名空间） */
  key: string;
  /** 站点内路径，用于 localizeHref 拼接语言前缀 */
  path: `/${string}`;
  /** 侧边栏/移动端菜单图标 */
  icon: ComponentType<{ className?: string }>;
  /** 是否为 MDX 内容类型（决定是否生成列表页与 sitemap 条目） */
  isContentType: boolean;
}

/**
 * 导航配置：分类 slug 与 content/<locale>/ 下的文章子目录名、
 * content.ts 的 GROUP_TITLES/GROUP_ORDER、en.json 的 nav 键一一对应。
 */
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "media", path: "/media", icon: Clapperboard, isContentType: true },
  { key: "lore", path: "/lore", icon: ScrollText, isContentType: true },
  { key: "reviews", path: "/reviews", icon: Star, isContentType: true },
  { key: "episodes", path: "/episodes", icon: Tv, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
