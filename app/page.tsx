'use client';
import { Site } from '@/src/components/0/Site';
import { site } from '@/src/Data/0top/Site';


export default function HomePage() {
  return (
    <Site siteData={site} />
  );
}
