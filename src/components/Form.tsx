"use client";

import React, { useState, useEffect } from 'react';
import Result from './Result';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from './ui/drawer';
import { toast } from 'sonner';
import Image from 'next/image';
import Link from 'next/link';

interface Action {
  uri: any;
}

interface Provider {
  type: string;
  actions: Action[];
}

interface Hub {
  providers: Provider[];
}

interface Track {
  title: string;
  subtitle: string;
  images: {
    coverart: string;
  };
  hub?: Hub;
}

const Form: React.FC<{ audioBlob: any, onResultReceived: () => void }> = ({ audioBlob, onResultReceived }) => {
  const [resultsData, setResultsData] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [noMatches, setNoMatches] = useState<boolean>(false);
  const [previousShazams, setPreviousShazams] = useState<boolean>(false);
  const [showMyMusic, setShowMyMusic] = useState<boolean>(false);

  const gcfURL: any = process.env.NEXT_PUBLIC_GCF_URL;

  const onSubmit = (e: any): void => {
    e.preventDefault();
    if (!audioBlob) return;
  
    const formData = new FormData();
    formData.append("file", audioBlob, "audio.mp3");
  
    setIsLoading(true);
    fetch(gcfURL, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        onResultReceived();
        if (!data[1]?.matches || data[1]?.matches.length === 0) {
          setNoMatches(true);
          // Do not clear previous Shazams or resultsData here
        } else {
          setNoMatches(false);
          const track: Track = data[1]?.track;
          if (track) {
            setResultsData(prevResultsData => [...prevResultsData, track]);
            const hasSpotifyUri = !!track.hub?.providers?.find(provider => provider.type === 'SPOTIFY')?.actions?.[0]?.uri;
            setPreviousShazams(hasSpotifyUri);
          }
        }
      })
      .catch(error => {
        setIsLoading(false);
        onResultReceived();
        console.error(error);
      });
  };  

  useEffect(() => {
    if (audioBlob) {
      onSubmit(new Event('submit'));
    }
  }, [audioBlob]);

  useEffect(() => {
    if (noMatches) {
      toast.warning(`Couldn't Detect a Song`);
      setTimeout(() => setNoMatches(true), 500);
    }
  }, [noMatches]);

  const handleShowMyMusicClick = () => {
    setShowMyMusic(!showMyMusic);
  };

  return (
    <div>
      <form onSubmit={onSubmit}></form>
      {/* Only render Result components if noMatches is false */}
      {resultsData.length > 0 && !noMatches && resultsData.map((resultData, index) => (
        <div key={index}>
          <Result
            title={resultData.title}
            subtitle={resultData.subtitle}
            coverArtUrl={resultData.images.coverart}
            spotifyUri={resultData.hub?.providers?.find(provider => provider.type === 'SPOTIFY')?.actions?.[0]?.uri}
          />
        </div>
      ))}
      {previousShazams && (
        <>
          <Button variant="ghost" className='bg-secondary-foreground text-white w-full mb-10' onClick={handleShowMyMusicClick}>
            My Shazam&apos;s
          </Button>
          {showMyMusic && (
            <Drawer open={showMyMusic}>
              <DrawerContent className="bg-black border-gray-700">
                <div className="w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle className="text-white">Your Music</DrawerTitle>
                    <DrawerDescription>Recent Shazam&apos;s</DrawerDescription>
                  </DrawerHeader>
                </div>
                <div className="pr-4 pl-4">
                  {resultsData.map((resultData, index) => (
                    <Link href={resultData.hub?.providers.find(provider => provider.type === 'SPOTIFY')?.actions[0].uri} key={`link-${index}`}>
                      <div className='mt-2 mb-2 rounded-xl bg-secondary transition-all border-gray-800'>
                        <div className="flex items-center p-3">
                          <Image width={100} height={100} src={resultData.images.coverart} alt="Cover Art" className="h-10 w-10 rounded-md mr-4" />
                          <div>
                            <div className="text-md font-semibold px-2 item-body text-black">{resultData.title}</div>
                            <div className="text-sm px-2 item-body text-muted-foreground" style={{ marginTop: '-0.2rem' }}>
                              {resultData.subtitle}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                  <Button className="w-full mb-3" onClick={() => setShowMyMusic(false)}>Close</Button>
                </div>
              </DrawerContent>
            </Drawer>
          )}
        </>
      )}
    </div>
  );
};

export default Form;
