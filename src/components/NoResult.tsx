import React from 'react';
import { Button } from './ui/button';
import { AlertCircle, X } from 'lucide-react';
import { Drawer, DrawerContent } from './ui/drawer';

interface NoResultProps {
  onTryAgain: () => void;
  open: boolean;
  onClose: () => void;
}

const NoResult: React.FC<NoResultProps> = ({ onTryAgain, open, onClose }) => {
  return (
    <Drawer open={open}>
      <DrawerContent className="h-[100dvh] bg-[#0a0a0a] border-none">
        <div className="relative h-full">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-4 top-4 bg-[#333f43] rounded-full hover:bg-[#454f55] text-white hover:text-gray-300"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>
          <div className="flex flex-col items-center justify-center h-full px-4">
            <div className="rounded-full p-4 mb-4 bg-white">
              <AlertCircle className="w-15 h-15 text-black" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">No Result</h2>
            <p className="text-gray-400 mb-6">We didn&apos;t quite catch that</p>
            <Button 
              onClick={onTryAgain}
              className="w-full rounded-lg max-w-xs bg-[#0077ff] hover:bg-blue-600 text-white"
            >
              Try Again
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default NoResult;
