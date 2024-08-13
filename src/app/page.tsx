"use client";

import React, { useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import Record from '@/components/Record';
import Form from '@/components/Form';

const App = () => {
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleBlobReady = (blob: Blob) => {
    setAudioBlob(blob);
    // Assuming you process the audio here or in the Form component
    setIsDisabled(true); // Disable button during processing
  };

  const handleResultReceived = () => {
    setIsDisabled(false); // Re-enable button after processing
  };

  return (
    <div className="h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col justify-center items-center overflow-hidden">
      <Toaster />
      <Record
        onBlobReady={handleBlobReady}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled} // Pass the setter function down to the Record component
      />
      <Form
        audioBlob={audioBlob}
        onResultReceived={handleResultReceived}
      />
    </div>
  );
};

export default App;
