import React, { useRef } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import ShazamIcon from './ui/ShazamIcon';

const Record: React.FC<{ onBlobReady: (blob: Blob) => void, isDisabled: boolean, setIsDisabled: (value: boolean) => void }> = ({ onBlobReady, isDisabled, setIsDisabled }) => {
  const recorderRef = useRef<any>(null);

  const startRecording = () => {
    recorderRef.current = new MicRecorder({ bitRate: 128 });
    recorderRef.current.start()
      .then(() => {
        setTimeout(() => {
          recorderRef.current.stop()
            .getMp3()
            .then(([, blob]: [any, Blob]) => {
              onBlobReady(blob); // Trigger the callback to process the blob
            })
            .catch((err: any) => {
              console.error('Stop recording failed', err);
            });
        }, 4000);
      })
      .catch((err: any) => {
        console.error('Recording failed', err);
      });
  };

  const handleClick = () => {
    startRecording();
    setIsDisabled(true)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen relative transition-all">
      <p className="text-white text-xl mb-8 font-semibold z-20 relative">
        {isDisabled ? 'Searching for song' : 'Tap to Shazam'}
      </p>
      <div className="relative flex justify-center items-center">
        {isDisabled && (
          <div className="circles-container absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div className="outer-circle absolute" style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              border: '5px solid #585c5f',
              animation: '0.5s ease-out outer-circle-fade, 2s linear infinite outer-circle',
              transform: 'translate(-50%, -50%) scale(2)',
              zIndex: '10',
            }}></div>
          </div>
        )}
        <button
          onClick={handleClick}
          disabled={isDisabled}
          className={`bg-[#4d545c] rounded-full p-8 relative z-20 transition-all animate-scale-up-down ${isDisabled ? 'animate-pulse cursor-not-allowed' : ''}`}
        >
          <ShazamIcon height='7em' width='7em' fill='#FFFFFF' />
        </button>
      </div>
    </div>
  );
};

export default Record;