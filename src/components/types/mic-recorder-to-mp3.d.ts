declare module 'mic-recorder-to-mp3' {
    interface MicRecorderOptions {
      bitRate?: number;
    }
  
    class MicRecorder {
      constructor(options: MicRecorderOptions);
      start(): Promise<void>;
      stop(): Promise<[Buffer, Blob]>;
      getMp3(): Promise<[Buffer, Blob]>;
    }
  
    export = MicRecorder;
  }