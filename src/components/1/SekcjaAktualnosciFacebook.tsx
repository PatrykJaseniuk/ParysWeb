import React, { useEffect } from 'react';
import { Sekcja } from './Sekcja';
import { Center } from '@mantine/core';
import { SectionI } from '@/src/interface/1/Section';
import { AktualnosciFacebookI } from '@/src/interface/1/Aktualnosci';

export const SekcjaAktualnosciFacebook = ({ data }: { data: SectionI<AktualnosciFacebookI> }) => {

    return (
        <Sekcja data={{ title: 'Aktualności', background: "" }}>

            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', justifyItems: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                <AktualnosciFacebook data={data.content} />
            </div>
        </Sekcja>
    )
}

// Deklaracja interfejsu dla FB SDK
interface FB {
    XFBML: {
        parse: () => void;
    };
}

// Rozszerzenie interfejsu Window
declare global {
    interface Window {
        FB?: FB;
    }
}

const AktualnosciFacebook = ({ data }: { data: AktualnosciFacebookI }) => {
    useEffect(() => {
        // Sprawdzanie, czy SDK Facebooka został już załadowany
        if (typeof window.FB === 'undefined') {
            // Tworzenie skryptu do załadowania SDK Facebooka
            const script = document.createElement('script');
            script.src = "https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v18.0";
            script.async = true;
            script.defer = true;
            script.crossOrigin = "anonymous";
            script.nonce = "gZb9l18O";
            document.body.appendChild(script);
        } else {
            // Ponowna inicjalizacja FB SDK
            window.FB.XFBML.parse();
        }
    }, []);

    return (
        <div style={{ width: '100%', maxWidth: '500px' }}>
            <div id="fb-root"></div>
            <div
                className="fb-page"
                data-href={data.pageSrc}
                data-tabs="timeline"
                data-width="500px"
                data-height="500px"
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="true"
                data-show-facepile="true">
                <blockquote cite={data.pageSrc}
                    className="fb-xfbml-parse-ignore">
                    <a href={data.pageSrc}>Siłownia-cross Parys Nysa</a>
                </blockquote>
            </div>
        </div>
    );
};