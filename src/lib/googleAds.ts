declare global {
    interface Window {
      gtag?: (...args: any[]) => void;
    }
  }
  
  export function trackLead() {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17199578214/nDkmCI3pzsMbEOb4solA",
      });
    }
  }