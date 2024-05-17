import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: 'Tín lý',
    tagline: 'Các tín lý đúc kết từ Thánh Kinh',
    favicon: 'img/favicon.ico',
    url: 'https://tinly.phucam.tv',
    baseUrl: '/',
    
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'phucamtv',
    projectName: 'tinly.phucam.tv',
    
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    
    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "vi",
        locales: ["vi"],
    },
    presets: [
        [
            "classic", {
            docs: {
                sidebarPath: "./sidebars.ts",
                path: "docs",
                routeBasePath: "/",
                sidebarCollapsible: true,
            },
            blog: false,
            theme: {
                customCss: "./src/css/custom.css",
            },
        } satisfies Preset.Options,
        ],
    ],
    
    themeConfig: {
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "Tín Lý Phúc Âm",
            logo: {
                alt: "My Site Logo",
                src: "img/logo.svg",
            },
            items: [
                {
                    href: "https://phucam.tv/",
                    label: "PhucAm.tv",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Tài Liệu",
                    items: [
                        {
                            label: "Tìm Hiểu Thánh Kinh",
                            to: "https://thanhkinh.vercel.app/",
                        },
                        {
                            label: "Lẽ thật Ngày Sa-bát",
                            to: "https://sabat.phucam.tv/",
                        },
                    ],
                },
                {
                    title: "Cộng Đồng",
                    items: [
                        {
                            label: "Facebook",
                            href: "https://www.facebook.com/phucamtv",
                        },
                        {
                            label: "Youtube",
                            href: "https://www.youtube.com/@70lan7",
                        },
                        {
                            label: "Twitter",
                            href: "https://twitter.com/70lan7",
                        },
                    ],
                },
                {
                    title: "Nội mạng",
                    items: [
                        {
                            label: "PhucAm.tv",
                            href: "https://phucam.tv",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()}, PhucAm.tv`,
        },
        prism: {
            theme: prismThemes.jettwaveLight,
            darkTheme: prismThemes.oneDark,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
