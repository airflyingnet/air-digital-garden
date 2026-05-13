import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "air-bento.pencil",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian", "air","categories","attachments", "references/templates"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "x12y12pxMaruMinyaHangul",
        body: "Wanted Sans Variable",
        code: "Wanted Sans Std Variable",
      },
      colors: {
        lightMode: {
          light: "#f8f8f8",
          lightgray: "#e5e5e5",
          gray: "#a0a0a0",
          darkgray: "#3a3a3a",
          dark: "#0a0a0a",
          secondary: "#000080",
          tertiary: "#rgba(0, 0, 0, 0.08)",
          highlight: "rgba(117, 117, 117, 0.08)",
          textHighlight: "#ffb1ee66",
        },
        darkMode: {
          light: "#000000",
          lightgray: "#1a1a1a",
          gray: "#808080",
          darkgray: "#c0c0c0",
          dark: "#ededed",
          secondary: "#ffb1ee",
          tertiary: "#BADA55",
          highlight: "rgba(255, 177, 238, 0.12)",
          textHighlight: "#ffb1ee44",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
