'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  interface SeoData {
    rank: number;
    keyword: string;
  }

  const [seoData, setSeoData] = useState<SeoData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/seo-rankings`);
      const data = await res.json();
      setSeoData(data);
    };
    fetchData();
  }, []);

  return (
    <main>
      <h1>SEO Rank</h1>
      {seoData ? (
        <div>
          <p>Rank: {seoData.rank}</p>
          <p>Keyword: {seoData.keyword}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}