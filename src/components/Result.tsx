"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter, DrawerClose, DrawerDescription } from "@/components/ui/drawer";
import Image from "next/image";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons'; // Import the Spotify icon

const Result: React.FC<{ title: string, subtitle: string, coverArtUrl: string, spotifyUri: string }> = ({ title, subtitle, coverArtUrl, spotifyUri }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    // Optional: Implement logic to handle when the drawer should open or close based on props
  }, [title, subtitle, coverArtUrl, spotifyUri]);

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <Drawer open={isOpen}>
      <DrawerContent className="bg-black border-gray-700">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-white">{title}</DrawerTitle>
            <DrawerDescription>{subtitle}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <Image width={1000} height={1000} alt="Cover" src={coverArtUrl} priority className="w-full h-full rounded-md" />
          </div>
          <DrawerFooter>
            <Link href={spotifyUri}>
              <Button className="bg-green-500 hover:bg-green-400 w-full"><FontAwesomeIcon icon={faSpotify} className="w-5 h-5 mr-2"/> Open in Spotify</Button>
            </Link>
            <DrawerClose asChild>
              <Button variant="outline" onClick={closeDrawer}>Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Result;
