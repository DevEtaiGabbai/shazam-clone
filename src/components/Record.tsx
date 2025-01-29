import React, { useRef, useState, useEffect } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import ShazamIcon from './ui/ShazamIcon';

const Record: React.FC<{ onBlobReady: (blob: Blob) => void, isDisabled: boolean, setIsDisabled: (value: boolean) => void }> = ({ onBlobReady, isDisabled, setIsDisabled }) => {
  const recorderRef = useRef<any>(null);
  const [queryStep, setQueryStep] = useState<string>('Tap to Shazam');
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [isRecording, setIsRecording] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isDisabled && !isRecording) {
      const steps = ['Searching...', 'Expanding search...'];
      interval = setInterval(() => {
        setStepIndex((prev) => {
          const newIndex = (prev + 1) % steps.length;
          setQueryStep(steps[newIndex]);
          return newIndex;
        });
      }, 4900);
    } else if (!isDisabled) {
      setQueryStep('Tap to Shazam');
      setStepIndex(0);
    }
    return () => clearInterval(interval);
  }, [isDisabled, isRecording]);

  const startRecording = () => {
    recorderRef.current = new MicRecorder({ bitRate: 128 });
    setIsRecording(true);
    setQueryStep('Listening for music...');
    recorderRef.current.start()
      .then(() => {
        setTimeout(() => {
          recorderRef.current.stop()
            .getMp3()
            .then(([, blob]: [any, Blob]) => {
              setIsRecording(false);
              setQueryStep('Searching...');
              onBlobReady(blob);
            })
            .catch((err: any) => {
              console.error('Stop recording failed', err);
              setIsDisabled(false);
              setIsRecording(false);
            });
        }, 4000);
      })
      .catch((err: any) => {
        console.error('Recording failed', err);
        setIsDisabled(false);
        setIsRecording(false);
      });
  };

  const handleClick = () => {
    startRecording();
    setIsDisabled(true);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen relative transition-all">
      <p className="text-white text-xl mb-8 font-semibold z-20 relative">
        {queryStep}
      </p>
      <div className="relative flex justify-center items-center">
        {isDisabled && (
          <>
            <div className="shazam-ring ring-1"></div>
            <div className="shazam-ring ring-2"></div>
            <div className="shazam-ring ring-3"></div>
          </>
        )}
        <button
          onClick={handleClick}
          disabled={isDisabled}
          className="shazam-button z-10 bg-[#4b555b] rounded-full p-8 cursor-pointer disabled:cursor-default hover:scale-105 transition-all duration-500 ease-in-out shine-large shadow-strong"
        >
          <ShazamIcon height="7rem" width="7rem" />
        </button>
      </div>
    </div>
  );
};

export default Record;