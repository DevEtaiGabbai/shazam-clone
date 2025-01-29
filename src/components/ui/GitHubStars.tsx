"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Icons } from './global/icons';
import { Star } from 'lucide-react';

export function GitHubStars() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/DevEtaiGabbai/shazam-clone')
      .then(res => res.json())
      .then(data => {
        if (data.stargazers_count !== undefined) {
          setStars(data.stargazers_count);
        }
      })
      .catch(error => {
        console.error('Error fetching GitHub stars:', error);
      });
  }, []);

  return (
    <Link
      href="https://github.com/DevEtaiGabbai/shazam-clone"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors font-medium text-sm shine-large shadow-strong bg-[#333f43] px-4 py-2 rounded-full"
    >
      <Icons.github className="h-4 w-4" />
      <span>Star on GitHub</span>
      {stars !== null && (
        <>
          <span className="w-px h-4 bg-gray-600"></span>
          <Star fill="currentColor" className="h-4 w-4 text-yellow-300" />
          <span>{stars}</span>
        </>
      )}
    </Link>
  );
}
