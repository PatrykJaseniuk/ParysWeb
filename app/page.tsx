'use client';
import { Shell } from '@/components/Shell';
import { Tytul } from '@/components/Sekcje/Tytul';
import { SekcjaUslugi } from '@/components/Sekcje/SekcjaUslugi';
import { SekcjaZajeciaIndywidualne } from '@/components/Sekcje/SekcjaZajeciaIndywidualne';
import { SekcjaZajeciaGrupowe } from '@/components/Sekcje/SekcjaZajeciaGrupowe';
import { Kontakt } from '@/components/Sekcje/Kontakt';
import { data } from '@/Data/data';

export default function HomePage() {
  return (
    <>
      <Shell
        elements={[
          { content: <Tytul data={data.header} /> },
          { content: <SekcjaUslugi data={data.Uslugi} />, name: 'Uslugi' },
          { content: <SekcjaZajeciaIndywidualne data={data.zajeciaIndywidualne} />, name: 'Trener osobisty' },
          { content: <SekcjaZajeciaGrupowe data={data.zajeciaGrupowe} />, name: 'Zajecia grupowe' },
          { content: <Kontakt data={data.kontakt} />, name: 'Kontakt' },
        ]}
      />
    </>
  );
}
