# About

Simple Everforest theming for the privacy-focused search engine [kagi](https://kagi.com) and which provides [css customization](https://kagi.com/settings?p=custom_css).

# How to use

Place contents of the [`kagi.css` file](./kagi.css) into the [css customization page](https://kagi.com/settings?p=custom_css).

# All variables

```css
--graphite: #18181a;
--graphite-25: #fafafb;
--graphite-50: #f5f5f5;
--graphite-70: #f3f3f3;
--graphite-100: #e6e6e8;
--graphite-200: #cfcfd1;
--graphite-300: #acacaf;
--graphite-400: #9f9fa5;
--graphite-500: #87878e;
--graphite-600: #707077;
--graphite-700: #5a5a60;
--graphite-800: #454549;
--graphite-850: #39393c;
--graphite-900: #2f2f31;
--graphite-950: #232325;
--graphite-1000: #18181a;
--chrome-25: #fbfbfe;
--chrome-50: #f7f7fc;
--chrome-70: #f3f3fc;
--chrome-100: #e8e8f0;
--chrome-200: #cfcfdb;
--chrome-300: #b7b7c5;
--chrome-400: #9fa0af;
--chrome-500: #878898;
--chrome-600: #707181;
--chrome-700: #5a5a6a;
--chrome-800: #454553;
--chrome-850: #393947;
--chrome-900: #2f2f3b;
--chrome-950: #23232f;
--chrome-1000: #181824;
--purple-300: #c9c1ff;
--purple-400: #c0b8ff;
--purple-500: #9185e0;
--purple-600: #6c5edc;
--purple-800: #4d41a4;
--purple-900: #3f3399;
--yellow: #ffb319;
--warning: #ff964a;
--info: #78e7ff;
--danger: #ff5a0a;
--success: #74bd44;
--calm: #edf0f5;
--blue: #224fc1;
--color-scheme: light;
--app-bg: #fff;
--link: var(--purple-600);
--app-frame-bg: var(--app-bg);
--landing-bg: var(--app-bg);
--app-bg-opac: rgba(24,24,26,0);
--bottom-bar-bg: #ffb319;
--white: #fff;
--app-text: var(--primary);
--kagi-highlight: #ffb319;
--beta-tag-bg: #ffb319;
--beta-tag-text: #191919;
--beta-tag-inside-corners: #fd6820;
--kagi-light-cream: #f7f6f2;
--kagi-accent: #f7f6f2;
--kagi-sky: #9debfe;
--kagi-sky-b: #6bd0e9;
--kagi-sky-i: #9debfe;
--kagi-orange: #fd6820;
--resultsummary-highlight: #fafad2;
--resultsummary-highlight_text: var(--primary);
--kagi-graphite: #191919;
--kagi-graphite-s: #363636;
--kagi-graphite-text: #e5e5e5;
--kagi-graphite-ia: #191919;
--kagi-graphite-ia-color: #fff;
--inner-shadow: rgba(0,0,0,.05);
--settings-app-inner-bg: var(--app-bg);
--box-shadow: rgba(0,0,0,.09);
--box-shadow-15: rgba(0,0,0,.15);
--primary: var(--graphite);
--primary-25: var(--graphite-25);
--primary-50: var(--graphite-50);
--primary-70: var(--graphite-70);
--primary-100: var(--graphite-100);
--primary-200: var(--graphite-200);
--primary-300: var(--graphite-300);
--primary-400: var(--graphite-400);
--primary-500: var(--graphite-500);
--primary-600: var(--graphite-600);
--primary-700: var(--graphite-700);
--primary-800: var(--graphite-800);
--primary-850: var(--graphite-850);
--primary-900: var(--graphite-900);
--primary-950: var(--graphite-950);
--primary-1000: var(--graphite-1000);
--primary-g: var(--graphite);
--primary-g-2: var(--graphite-200);
--primary-g-6: var(--graphite-600);
--primary-g-8: var(--graphite-800);
--primary-300-solid: #d8d8d8;
--secondary: #fff;
--color-search-input-border: var(--primary-100);
--color-search-input: #fff;
--header-bg: var(--app-bg);
--header-bg-opac: var(--app-bg-opac);
--color-search-input-opac: var(--app-bg-opac);
--color-danger: #da5819;
--primary-hover: var(--purple-600);
--primary-hover-hover: var(--purple-500);
--primary-visited: #4d41a4;
--input-bg: var(--app-bg);
--doggo-color-1: #fff;
--doggo-bg-color: var(--app-bg);
--doggo-stroke-color: var(--primary-300);
--landing-page-clouds-opacity: 1;
--quick-search-bg: var(--graphite);
--quick-search-icon: #fff;
--app-logo: var(--primary);
--app-logo-bg: #ffb319;
--filters-clear-btn-icon: #fd6820;
--filter-dd-bg: #f2f0e7;
--k-tooltip-bg: rgba(25,25,25,.9);
--k-tooltip-text: #fff;
--dd-hover-bg: var(--primary-100);
--dd-hover-color: var(--primary);
--dd-list-input-bg: var(--input-bg);
--not-found-bubble-bg: #f2f2f2;
--app-sidebar-item-border: rgba(25,25,25,.2);
--app-sidebar-link: rgba(25,25,25,.6);
--app-sidebar-nav-item-bg_hover: #ffb319;
--app-sidebar-nav-item-icon_hover: #191919;
--ranked-box-shadow: rgba(0,0,0,.25);
--ranked-box-connection-secure: #529348;
--ranked-box-connection-insecure: #da5819;
--ranked-box-tracker-desc-danger: #da5819;
--ranked-box-tracker-desc-clear: #529348;
--site_info_bg: var(--app-bg);
--site_info_bottom_bg: var(--kagi-accent);
--result-item-title-border: var(--primary-400);
--result-item-title-border_hover: var(--primary-hover);
--result-item-title-visited-border: #e0d3e7;
--result-rank-icon-stroke_promoted: var(--primary);
--result-item-highlight: #6c5edc;
--search-result-content-text: var(--primary-700);
--search-result-url-link: var(--primary-600);
--search-result-title: var(--primary);
--search-result-title-hover: var(--primary-hover);
--search-result-date-bg: #f3f3f3;
--search-result-date-new-bg: #e2f9ff;
--search-result-date-new: #536471;
--domain-rank-icon-color-ban: var(--primary-200);
--domain-rank-icon-color-lower: var(--primary-200);
--domain-rank-icon-color-normal: var(--primary-200);
--domain-rank-icon-color-higher: var(--primary-200);
--domain-rank-icon-color-boosted: var(--primary-200);
--domain-rank-icon-color-trackers: #fd864d;
--domain-rank-icon-color-trackers-hover: #fd6820;
--domain-rank-icon-color-scam: #fd864d;
--domain-rank-icon-color-scam-hover: #fd6820;
--inline-header-title: var(--primary-700);
--inline-widget-bg: var(--primary-50);
--inline-widget-hover-bg: var(--primary-100);
--inline-header-border: var(--primary-200);
--inline-domain-tag-bg: var(--primary-70);
--related-item-bg: var(--primary-50);
--related-item-hover-bg: var(--primary-100);
--video-item-bg: var(--primary-50);
--auto-sugg-bg_hover: var(--inline-widget-bg);
--provider-breakdown_server: #79d5f1;
--provider-breakdown_client: orange;
--provider-breakdown_speed1: #ffefd5;
--provider-breakdown_speed2: #f08080;
--provider-breakdown_speed3: #ff4500;
--widget-progress_bar: var(--primary);
--translate-fc_icon: var(--primary);
--rating-star_background: #f2f2f2;
--wiki-content-links: var(--primary);
--m_sri_gap_color: #f2f2f2;
--btn-primary-bg: var(--primary);
--btn-primary-text: var(--secondary);
--btn-primary-color: var(--secondary);
--btn-group-bg: #fff;
--image_brightness: 100%;
--nav_n_se_line: #ffb319;
--nav_n_im_line: #0194ff;
--nav_n_vi_line: #ff2e00;
--nav_n_ne_line: #8f05e3;
--nav_n_ma_line: #8dc26a;
--onboarding_theme_options_dark_visibility: none;
--onboarding_theme_options_light_visibility: flex;
--onb_theme_light_preview_box: flex;
--onb_theme_calm_blue_preview_box: none;
--onb_theme_royal_blue_preview_box: none;
--onb_theme_moon_dark_preview_box: none;
--code-bg: #fff;
--code-border: #e5e5e5;
--code-k: #4835bc;
--code-s: #529348;
--code-cm-c1: #fd6820;
--code-n: #4835bc;
--code-p: #000;
--background-color-sky: #9debfe;
--ai_chat_buble_a_bg: var(--kagi-accent);
--ai_chat_buble_q_bg: var(--app-bg);
--ai_chat_buble_dd_q_bg: var(--kagi-accent);
--ai_chat_buble_dd_a_bg: #f2f2f2;
--ai_chat_buble_a_text: var(--app-text);
--ai_chat_buble_q_text: var(--app-text);
--ai_chat_input_text: var(--app-text);
--ai_chat_input_button: var(--primary-700);
--checkbox-bg: var(--yellow);
--checkbox-check: var(--graphite);
--as-dd-border: var(--app-bg);
--dd-list-input-bg: #fff;
--icon-purple: var(--purple-600);
```