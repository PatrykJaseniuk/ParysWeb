'use client';
import { Welcome } from '../components/dziwne/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle';
import { HeaderMegaMenu } from '@/components/dziwne/Nav';
import { StronaTytulowa } from '@/components/dziwne/StronaTytulowa';
import { Usluga } from '@/components/dziwne/Usluga';
import { Shell } from '@/components/Shell';
import { Tytul } from '@/components/Sekcje/Tytul';
import { SekcjaUslugi } from '@/components/Sekcje/SekcjaUslugi';
import { SekcjaZajeciaIndywidualne } from '@/components/Sekcje/ZajeciaIndywidualne';
import { SekcjaZajeciaGrupowe } from '@/components/Sekcje/ZajeciaGrupowe';
import { Kontakt } from '@/components/Sekcje/Kontakt';
import { data } from '@/Data/data';

export default function HomePage() {
  return (
    <>
      <Shell
        elements={[
          { content: <Tytul data={data.header} /> },
          { content: <SekcjaUslugi data={data.Uslugi} />, name: 'Uslugi' },
          { content: <SekcjaZajeciaIndywidualne data={data.zajeciaIndywidualne} />, name: 'Zajecia Indywidualne' },
          { content: <SekcjaZajeciaGrupowe data={data.zajeciaGrupowe} />, name: 'Zajecia Grupowe' },
          { content: <Kontakt data={data.kontakt} />, name: 'Kontakt' },
        ]}
      />
    </>
  );
}
