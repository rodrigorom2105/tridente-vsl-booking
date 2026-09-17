"use client";

import { useEffect } from "react";

const widgetId = "6aa9795078b1e20914350562";
const scriptId = "tridente-home-lead-widget";

export function cleanupHomeLeadWidget() {
  const selectors = [
    `script#${scriptId}`,
    `script[data-widget-id="${widgetId}"]`,
    `iframe[src*="widgets.leadconnectorhq.com/chat-widget"]`,
    `iframe[src*="chat-widget"]`,
    `[data-widget-id="${widgetId}"]`,
    `[id*="lc_chat"]`,
    `[class*="lc_chat"]`,
    `[id*="leadconnector"]`,
    `[class*="leadconnector"]`,
    `[id*="chat-widget"]`,
    `[class*="chat-widget"]`,
  ];

  document.querySelectorAll(selectors.join(",")).forEach((element) => {
    element.remove();
  });
}

export default function HomeLeadWidget() {
  useEffect(() => {
    cleanupHomeLeadWidget();

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.async = true;
    script.dataset.resourcesUrl =
      "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
    script.dataset.widgetId = widgetId;
    script.dataset.source = "WEB_USER";

    document.body.appendChild(script);

    return cleanupHomeLeadWidget;
  }, []);

  return null;
}
