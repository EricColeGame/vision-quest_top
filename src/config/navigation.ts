import type { ComponentType } from "react";

export interface NavItem {
  /** 翻译键（对应 en.json 的 nav 命名空间） */
  key: string;
  /** 站点内路径，用于 localizeHref 拼接语言前缀 */
  path: string;
  /** 侧边栏/移动端菜单图标 */
  icon: ComponentType<{ className?: string }>;
  /** 是否为 MDX 内容类型（决定是否生成列表页与 sitemap 条目） */
  isContentType: boolean;
}

/**
 * 导航配置：本阶段（新主题尚未产出内容）暂为空数组，
 * 待内容类型确定后按上方 NavItem 契约重建。
 */
export const NAVIGATION_CONFIG: readonly NavItem[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
