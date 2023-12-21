import React, { useEffect } from 'react';
import { Sekcja } from './Sekcja';
import { Center, Container } from '@mantine/core';
import { SectionI } from '@/src/interface/1/Section';
import { AktualnosciFacebookI } from '@/src/interface/1/Aktualnosci';

export const SekcjaAktualnosci = ({ data }: { data: SectionI<AktualnosciFacebookI> }) => {

    return (
        <Sekcja data={{ title: 'Aktualności', background: "" }}>
            <Container size={'xl'}>
                {/* <TwitterTimeline /> */}
            </Container>
            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', justifyItems: 'center', alignItems: 'center', marginBottom: '1rem' }}>

            </div>
            {/* <AktualnosciFacebook data={data.content} /> */}

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

    useEffect(() => {
        // Funkcja do ładowania skryptu Twittera
        const loadTwitterScript = () => {
            const script = document.createElement('script');
            script.src = 'https://platform.twitter.com/widgets.js';
            script.async = true;
            script.charset = 'utf-8';
            document.body.appendChild(script);
        };

        loadTwitterScript();
    }, []);

    return (
        <>
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
        </>
    );
};

const TwitterTimeline = () => {
    useEffect(() => {
        // Funkcja do ładowania skryptu Twittera
        const loadTwitterScript = () => {
            const script = document.createElement('script');
            script.src = 'https://platform.twitter.com/widgets.js';
            script.async = true;
            script.charset = 'utf-8';
            document.body.appendChild(script);
        };

        loadTwitterScript();
    }, []);

    return (
        <div style={{ height: '1500px', overflow: 'hidden' }}>
            {/* Użyj dangerouslySetInnerHTML do osadzenia widgetu */}
            <a
                className="twitter-timeline"
                // data-theme="light"
                href="https://twitter.com/XDevelopers?ref_src=twsrc%5Etfw"
                data-tweet-limit="3"
            // data-height='1000'
            >
                twitter
            </a>
        </div>
    );
};


export default TwitterTimeline;
