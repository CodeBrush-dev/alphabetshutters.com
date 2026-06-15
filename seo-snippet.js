// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.alphabetshutters.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.alphabetshutters.com/","title_tag":"Plantation shutters Muswell Hill | Alphabet Shutters London","meta_description":"Plantation shutters Muswell Hill and bespoke blinds. Quality shutters London, custom shutters North London and affordable window treatments with free consultations."},{"page_url":"https://www.alphabetshutters.com/product-1","title_tag":"Window solutions London | Alphabet Shutters and Blinds","meta_description":"Affordable window treatments and quality shutters London. Custom shutters North London and made-to-measure blinds with a free consultation for homes and projects."},{"page_url":"https://www.alphabetshutters.com/services-4","title_tag":"Custom shutters North London | Alphabet Shutters","meta_description":"See real installs of plantation shutters Muswell Hill and bespoke blinds Muswell Hill. Quality shutters London and affordable window treatments for every room."},{"page_url":"https://www.alphabetshutters.com/product","title_tag":"Plantation shutters Muswell Hill | Alphabet Shutters","meta_description":"Custom shutters North London including bay, tier-on-tier and shaped designs. Quality shutters London, affordable window treatments, expert shutter installation Muswell Hill."},{"page_url":"https://www.alphabetshutters.com/blinds","title_tag":"Made-to-measure blinds London | Alphabet Shutters","meta_description":"Made-to-measure blinds and bespoke blinds Muswell Hill. Affordable window treatments, quality blinds London and free consultation blinds for homes and businesses."},{"page_url":"https://www.alphabetshutters.com/contact-5","title_tag":"Free consultation blinds London | Alphabet Shutters","meta_description":"Contact us for free consultation blinds, plantation shutters Muswell Hill and bespoke blinds Muswell Hill. Affordable window treatments and quality shutters London."},{"page_url":"https://www.alphabetshutters.com/blog","title_tag":"Window solutions London blog | Alphabet Shutters","meta_description":"Guides to plantation shutters Muswell Hill, custom shutters North London and made-to-measure blinds. Discover affordable window treatments and window solutions London."}],"keywords":["Plantation shutters Muswell Hill","Blinds London","Custom shutters North London","Made-to-measure blinds","Affordable window treatments","Quality shutters London","Bespoke blinds Muswell Hill","Window solutions London","Shutter installation Muswell Hill","Free consultation blinds"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.alphabetshutters.com/#localbusiness",
  "name": "Alphabet Shutters and Blinds",
  "url": "https://www.alphabetshutters.com/",
  "image": [
    "https://static.wixstatic.com/media/047a96_1bbc94c6cea94e0d81ca3ec3312c4cdc~mv2.jpg/v1/fill/w_131,h_99,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/CD5411B1-87AE-421F-9460-68ED0F130AC0_edited_edited.jpg",
    "https://static.wixstatic.com/media/11062b_335bca27dee9467b86b5305109218621~mv2.jpeg/v1/fill/w_493,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_335bca27dee9467b86b5305109218621~mv2.jpeg",
    "https://static.wixstatic.com/media/047a96_962548c1c3e84233bd4011f257ac0cca~mv2.jpeg/v1/crop/x_0,y_8,w_1787,h_1957/fill/w_303,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%20(5).jpeg",
    "https://static.wixstatic.com/media/047a96_2eed565123094a6cb3ce6362309ea989~mv2.jpg/v1/crop/x_0,y_11,w_427,h_468/fill/w_303,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Alphabet%20Shutters%20and%20Blinds%20_edited.jpg",
    "https://static.wixstatic.com/media/047a96_9765df1295df4fe2ab413878fdef19ab~mv2.png/v1/crop/x_571,y_0,w_1857,h_2035/fill/w_303,h_332,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Alphabetshutters%20Full%20height.png",
    "https://static.wixstatic.com/media/047a96_2220fbe0375640c0aa0bd81d771540c8~mv2.jpg/v1/crop/x_26,y_0,w_457,h_303/fill/w_459,h_302,al_c,lg_1,q_80,enc_avif,quality_auto/Image%20(7)_edited.jpg",
    "https://static.wixstatic.com/media/047a96_6de70fa3271848ef86f5096e82be5ff3~mv2.jpg/v1/fill/w_109,h_107,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/047a96_6de70fa3271848ef86f5096e82be5ff3~mv2.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/047a96_a1650d4da7ac407dbc16480254341f62%7Emv2.jpeg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/047a96_a1650d4da7ac407dbc16480254341f62%7Emv2.jpeg",
  "description": "Alphabet Shutters London provides bespoke, made-to-measure plantation shutters and blinds for homes and businesses in Muswell Hill, Highgate and North London, offering free in-home consultations, expert measuring and installation, and a peace of mind guarantee.",
  "email": "info@alphabetshutters.com",
  "telephone": "07391 890774",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Muswell Hill",
    "addressRegion": "London",
    "addressCountry": "GB"
  },
  "areaServed": [
    "Muswell Hill",
    "Highgate",
    "Crouch End",
    "Wood Green",
    "Bounds Green",
    "Hampstead",
    "East Finchley",
    "Tottenham",
    "Southgate",
    "Palmers Green",
    "Cockfosters",
    "Holloway",
    "Finsbury Park",
    "Barnet",
    "Finchley",
    "Kentish Town",
    "Stamford Hill",
    "Winchmore Hill",
    "Islington",
    "Hornsey",
    "Harringey",
    "Enfield",
    "Potters Bar",
    "Camden",
    "Kilburn",
    "Archway",
    "Swiss Cottage",
    "Belsize Park",
    "Hendon",
    "Mill Hill",
    "Edgware"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "07:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "16:00"
    }
  ],
  "sameAs": [],
  "review": {
    "@type": "Review",
    "reviewBody": "We received a fantastic service from start to finish. I thoroughly recommend Alphabet Shutters and Blinds as they saved us over £2000 compared to a well-known company that came to give us a quote for the same products.. The craftsmanship is excellent. Thank you George and co",
    "reviewRating": {
      "@type": "Rating"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingCount": 1
  },
  "makesOffer": [
    {
      "@type": "Service",
      "name": "Bespoke plantation shutters",
      "description": "Design, measurement, supply and installation of bespoke, made-to-measure plantation shutters including full height, tier on tier, cafe style, solid raised, bay window and shaped shutters."
    },
    {
      "@type": "Service",
      "name": "Made-to-measure blinds",
      "description": "Design, measurement, supply and installation of made-to-measure blinds including roller, Venetian, Roman, perfect fit, motorised, and day & night blinds."
    },
    {
      "@type": "Service",
      "name": "Free in-home consultation",
      "description": "Free, no-obligation in-home consultation including window survey, product recommendations and samples for shutters and blinds."
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
