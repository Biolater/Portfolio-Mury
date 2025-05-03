"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeFaviconSwitcher() {
  const { theme } = useTheme();

  useEffect(() => {
    // Attempt to find an existing favicon link
    let faviconLink =
      document.querySelector<HTMLLinkElement>("link[rel='icon']");

    // If no link exists, create one and append it to the head
    if (!faviconLink) {
      faviconLink = document.createElement("link");
      faviconLink.rel = "icon";
      document.head.appendChild(faviconLink);
    }

    // Update the href based on the current theme
    if (faviconLink) {
      if (theme === "dark") {
        faviconLink.href = "/favicon-dark.ico";
      } else {
        // Default to light favicon for 'light' or system/undefined themes
        faviconLink.href = "/favicon-light.ico";
      }
    }
  }, [theme]); // Rerun effect when theme changes

  // This component doesn't render anything visible in the DOM
  return null;
}
