'use client'

import { useEffect } from "react";

export const GoogleAnalytics: React.FC = () => {
    useEffect(() => {
        // Dodaj skrypt do tagu <head>
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-GKTQMBN0Y8";
        document.head.appendChild(script);

        // Konfiguracja gtag
        const initializeGtag = () => {
            (window as any).dataLayer = (window as any).dataLayer || [];
            function gtag(...args: any[]) {
                (window as any).dataLayer.push(args);
            }
            gtag("js", new Date());
            gtag("config", "G-GKTQMBN0Y8");
        };

        script.onload = initializeGtag;
    }, []);

    return null; // Nie renderuje nic w interfejsie użytkownika
};

