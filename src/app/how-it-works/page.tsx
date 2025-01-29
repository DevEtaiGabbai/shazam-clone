import React from 'react';
import { WrapText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Icons } from '@/components/ui/global/icons';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-8">
          How it Works 🛠️
        </h1>

        <div className="bg-card/80 rounded-2xl p-8 shadow-2xl backdrop-blur-sm border border-border">
          <div className="mb-6 flex items-center">
            <WrapText className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold ml-3 text-primary">Summary</h3>
          </div>
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              The app uses records a short sample of audio which is fingerprinted and queries Shazam's database to identify songs. Here's how it works:
            </p>
            <ol className="list-decimal list-inside space-y-6 pl-4">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary min-w-[24px]">1.</span>
                <span><strong className="text-foreground">Audio Sampling:</strong> Records a 4 seconds of audio at 16kHz.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary min-w-[24px]">2.</span>
                <span><strong className="text-foreground">Spectrogram Creation:</strong> Converts the audio into a frequency-time-decibel representation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary min-w-[24px]">3.</span>
                <span><strong className="text-foreground">Feature Extraction:</strong> Identifies unique patterns and peaks in the spectrogram to create a fingerprint.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary min-w-[24px]">4.</span>
                <span><strong className="text-foreground">Pattern Matching:</strong> Compares these fingerprints with Shazam's database.</span>
              </li>
            </ol>
            <p className="text-lg leading-relaxed mt-8">
              This process happens in real-time, with high accuracy and precision.
            </p>
            <div className="mt-10 bg-secondary/50 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-primary">Technologies Used</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Front End</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Next.js 14
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Tailwind CSS
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Vercel
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Backend</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Google Cloud Function with Python 3.10 Runtime
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Flask
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Numpy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-border my-12" />

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {/* Introduction */}
          <h2 id="introduction" className="text-3xl font-bold mb-6 text-primary">Introduction</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Have you ever been in a situation where you hear a catchy song playing somewhere, and you just <em className="text-primary">have</em> to know what it is? Apps like Shazam have made it incredibly easy to identify music by simply "listening" to a snippet through your device's microphone.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            In this blog post, we'll delve into how to build a basic version of a Shazam-like application. We'll explore the underlying concepts of audio recognition without getting bogged down in overly technical jargon. By the end, you'll understand how audio fingerprinting works and how different components come together to create a music recognition system.
          </p>

          {/* Lifecycle Image */}
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-4 text-primary">System Architecture</h3>
            <div className="relative bg-card/50 rounded-xl p-6 border border-border">
              <Image
                src="/lifecycle.png"
                alt="Shazam Clone System Architecture"
                width={800}
                height={500}
                className="w-full h-auto"
              />
              <p className="mt-4 text-sm text-muted-foreground">
                The diagram above illustrates the complete lifecycle of a song recognition request:
                from audio capture through fingerprint generation to final song identification.
              </p>
            </div>
          </div>

          {/* Understanding Audio Fingerprinting */}
          <h2 id="understanding-audio-fingerprinting" className="text-3xl font-bold mt-12 mb-6 text-primary">Understanding Audio Fingerprinting</h2>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">What is Audio Fingerprinting?</h3>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Audio fingerprinting is a technique used to identify audio samples based on unique characteristics extracted from the audio signal. Think of it like a "digital fingerprint" for audio. Just as human fingerprints are unique identifiers, audio fingerprints help recognize and distinguish one piece of audio from another.
          </p>
          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">How Does It Help in Recognizing Music?</h3>
          <p className="text-lg leading-relaxed text-muted-foreground">
            When you feed an audio clip into a recognition system, the system generates a fingerprint of that clip and compares it against a database of known fingerprints. If a match is found, the system can identify the song, artist, album, and other metadata associated with the audio.
          </p>

          {/* Breaking Down the Algorithm */}
          <h2 id="breaking-down-the-algorithm" className="text-3xl font-bold mt-12 mb-6 text-primary">Breaking Down the Algorithm</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Creating an audio recognition system involves several key steps:
          </p>
          <ol className="list-decimal list-inside space-y-4 pl-4 my-6">
            <li className="text-lg text-muted-foreground"><strong className="text-foreground">Audio Preprocessing</strong></li>
            <li className="text-lg text-muted-foreground"><strong className="text-foreground">Feature Extraction</strong></li>
            <li className="text-lg text-muted-foreground"><strong className="text-foreground">Peak Detection</strong></li>
            <li className="text-lg text-muted-foreground"><strong className="text-foreground">Fingerprint Generation</strong></li>
          </ol>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Let's explore each of these components.
          </p>

          {/* Audio Preprocessing */}
          <h3 id="audio-preprocessing" className="text-2xl font-semibold mt-8 mb-4 text-foreground">Audio Preprocessing</h3>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Before we can analyze the audio, we need to ensure it's in a consistent and suitable format.
          </p>
          <h4 className="text-xl font-semibold mt-6 mb-3 text-foreground">Normalization</h4>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Audio recordings can vary in volume, quality, and format. Normalization adjusts the audio to a standard level so that the analysis is not affected by these variations.
          </p>
          <h4 className="text-xl font-semibold mt-6 mb-3 text-foreground">Sampling Rate and Channels</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
              <div>
                <strong className="text-foreground">Sampling Rate:</strong> The number of audio samples per second, measured in Hertz (Hz). We typically use 16,000 Hz (16 kHz) for efficient processing while maintaining quality.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
              <div>
                <strong className="text-foreground">Channels:</strong> We convert stereo audio (two channels) to mono (one channel) for simplified processing.
              </div>
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-muted-foreground">
            By normalizing the sample width (bit depth), sample rate, and number of channels, we ensure that the audio data is consistent and ready for analysis.
          </p>

          {/* Feature Extraction */}
          <h3 id="feature-extraction" className="text-2xl font-semibold mt-8 mb-4 text-foreground">Feature Extraction</h3>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Once we have normalized audio, we need to extract features that can be used to create a fingerprint.
          </p>
          <h4 className="text-xl font-semibold mt-6 mb-3 text-foreground">Fast Fourier Transform (FFT)</h4>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The Fast Fourier Transform is a mathematical algorithm that converts a time-domain signal (like audio) into its frequency components. Essentially, it tells us which frequencies are present in the audio and in what amounts.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            By performing FFT on the audio samples, we can obtain a spectrum that represents the amplitude of various frequencies at different points in time.
          </p>
          <h4 className="text-xl font-semibold mt-6 mb-3 text-foreground">Frequency Domain Analysis</h4>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Analyzing the audio in the frequency domain allows us to identify patterns and characteristics that are not easily observable in the time domain. By examining how the frequency content changes over time, we can extract meaningful features for fingerprinting.
          </p>
          <h4 className="text-xl font-semibold mt-6 mb-3 text-foreground">Windowing with Hanning Window</h4>
          <p className="text-lg leading-relaxed text-muted-foreground">
            When performing FFT, we divide the audio signal into small segments or "windows." To reduce artifacts and improve the accuracy of the frequency analysis, we apply a window function. The Hanning window is a commonly used function that tapers the signal at the beginning and end of each segment, minimizing discontinuities.
          </p>

          {/* Peak Detection */}
          <h3 id="peak-detection" className="text-2xl font-semibold mt-8 mb-4 text-foreground">Peak Detection</h3>
          <p className="text-lg leading-relaxed text-muted-foreground">
            After obtaining the frequency spectrum, the next step is to detect significant peaks.
          </p>
          <h4 className="text-xl font-semibold mt-6 mb-3 text-foreground">Identifying Significant Frequencies</h4>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Not all frequencies in the spectrum are equally important. We focus on frequencies that have a high amplitude compared to their neighbors, as these represent dominant tones in the audio.
          </p>
          <h4 className="text-xl font-semibold mt-6 mb-3 text-foreground">Enhancing Peaks</h4>
          <p className="text-lg leading-relaxed text-muted-foreground">
            To ensure that we capture the most significant peaks, we perform <strong className="text-foreground">peak spreading</strong>. This involves enhancing the amplitude of a frequency bin if it is close to other high-amplitude bins. By spreading the peaks, we make them more distinguishable and easier to detect.
          </p>

          {/* Fingerprint Generation */}
          <h3 id="fingerprint-generation" className="text-2xl font-semibold mt-8 mb-4 text-foreground">Fingerprint Generation</h3>
          <p className="text-lg leading-relaxed text-muted-foreground">
            With the significant peaks identified, we can now generate the audio fingerprint.
          </p>
          <h4 className="text-xl font-semibold mt-6 mb-3 text-foreground">Creating a Unique Signature</h4>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The fingerprint consists of a collection of the strongest frequency peaks along with their corresponding times. This collection captures the unique characteristics of the audio clip.
          </p>
          <h4 className="text-xl font-semibold mt-6 mb-3 text-foreground">Organizing Frequency Bands</h4>
          <p className="text-lg leading-relaxed text-muted-foreground">
            For efficiency, we categorize peaks into frequency bands. For example:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <strong className="text-foreground">Band 1</strong>: 250 Hz to 520 Hz
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <strong className="text-foreground">Band 2</strong>: 520 Hz to 1,450 Hz
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <strong className="text-foreground">Band 3</strong>: 1,450 Hz to 3,500 Hz
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <strong className="text-foreground">Band 4</strong>: 3,500 Hz to 5,500 Hz
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-muted-foreground">
            By organizing peaks into bands, we can create a more robust fingerprint that's less sensitive to noise and other variations.
          </p>

          {/* Backend Processing */}
          <h2 id="backend-processing" className="text-3xl font-bold mt-12 mb-6 text-primary">Backend Processing</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The backend of our system is responsible for processing the audio data, generating fingerprints, and communicating with a song database to find matches.
          </p>
          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Handling Incoming Audio</h3>
          <p className="text-lg leading-relaxed text-muted-foreground">
            When the backend receives an audio clip, it:
          </p>
          <ol className="list-decimal list-inside space-y-4 pl-4 my-6">
            <li className="text-lg text-muted-foreground"><strong className="text-foreground">Loads the Audio</strong>: Reads the audio data from the request.</li>
            <li className="text-lg text-muted-foreground"><strong className="text-foreground">Normalizes the Audio</strong>: Ensures the audio has the correct sample rate, bit depth, and channels.</li>
            <li className="text-lg text-muted-foreground"><strong className="text-foreground">Processes the Audio</strong>: Passes the normalized audio through the fingerprinting algorithm.</li>
          </ol>
          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Generating the Fingerprint</h3>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The backend uses the steps outlined in the algorithm breakdown to produce the fingerprint:
          </p>
          <ol className="list-decimal list-inside space-y-4 pl-4 my-6">
            <li className="text-lg text-muted-foreground"><strong className="text-foreground">Divides the Audio into Chunks</strong>: Processes the audio in segments (e.g., 128 samples at a time).</li>
            <li className="text-lg text-muted-foreground"><strong className="text-foreground">Applies FFT to Each Chunk</strong>: Converts each chunk to the frequency domain.</li>
            <li className="text-lg text-muted-foreground"><strong className="text-foreground">Detects Peaks in Each Chunk</strong>: Identifies significant frequencies.</li>
            <li className="text-lg text-muted-foreground"><strong className="text-foreground">Aggregates Peaks Across Chunks</strong>: Builds a comprehensive fingerprint representing the entire audio clip.</li>
          </ol>
          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Communicating with the Song Database</h3>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Once the fingerprint is generated, the backend:
          </p>
          <ol className="list-decimal list-inside space-y-4 pl-4 my-6">
            <li className="text-lg text-muted-foreground"><strong className="text-foreground">Encodes the Fingerprint</strong>: Transforms the fingerprint into a format suitable for transmission (e.g., base64 encoding).</li>
            <li className="text-lg text-muted-foreground"><strong className="text-foreground">Sends a Recognition Request</strong>: Posts the encoded fingerprint to an external service (like Shazam's API) or queries its own database.</li>
            <li className="text-lg text-muted-foreground"><strong className="text-foreground">Receives the Response</strong>: Processes the response to determine if a match was found.</li>
          </ol>
          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Handling the Response</h3>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The backend interprets the response:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <strong className="text-foreground">Successful Match</strong>: Extracts song information (title, artist, album art, etc.) and prepares it for the frontend.
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <strong className="text-foreground">No Match Found</strong>: Prepares a response indicating that the song couldn't be identified.
            </li>
          </ul>

          {/* Frontend Interaction */}
          <h2 id="frontend-interaction" className="text-3xl font-bold mt-12 mb-6 text-primary">Frontend Interaction</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The frontend provides the user interface that allows users to interact with the application.
          </p>
          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Recording Audio</h3>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Users can record audio directly from the browser:
          </p>
          <ol className="list-decimal list-inside space-y-4 pl-4 my-6">
            <li className="text-lg text-muted-foreground"><strong className="text-foreground">Microphone Access</strong>: The app requests permission to use the device's microphone.</li>
            <li className="text-lg text-muted-foreground"><strong className="text-foreground">Recording Session</strong>: Records a short snippet (e.g., 4 seconds) when the user initiates the search.</li>
            <li className="text-lg text-muted-foreground"><strong className="text-foreground">Audio Format</strong>: Ensures the recorded audio is in the correct format (e.g., MP3).</li>
          </ol>
          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Sending Audio to the Backend</h3>
          <p className="text-lg leading-relaxed text-muted-foreground">
            After recording:
          </p>
          <ol className="list-decimal list-inside space-y-4 pl-4 my-6">
            <li className="text-lg text-muted-foreground"><strong className="text-foreground">Form Submission</strong>: The audio blob is sent to the backend via an HTTP POST request.</li>
            <li className="text-lg text-muted-foreground"><strong className="text-foreground">Transporting the Audio</strong>: The audio data is included in the request payload.</li>
          </ol>

          {/* Putting It All Together */}
          <h2 id="putting-it-all-together" className="text-3xl font-bold mt-12 mb-6 text-primary">Putting It All Together</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Let's walk through the entire process:
          </p>
          <ol className="space-y-8 list-none pl-0 my-8">
            <li className="relative">
              <div className="flex items-center mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-border bg-card text-foreground font-semibold mr-3">1</span>
                <strong className="text-xl text-foreground">User Interaction</strong>
              </div>
              <ul className="space-y-3 ml-11">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                  <span>The user opens the app and taps a button to identify a song.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                  <span>The app prompts for microphone access if not already granted.</span>
                </li>
              </ul>
            </li>

            <li className="relative">
              <div className="flex items-center mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-border bg-card text-foreground font-semibold mr-3">2</span>
                <strong className="text-xl text-foreground">Audio Recording</strong>
              </div>
              <ul className="space-y-3 ml-11">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                  <span>The app records a short audio clip from the microphone.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                  <span>A visual indicator shows that the app is "listening."</span>
                </li>
              </ul>
            </li>

            <li className="relative">
              <div className="flex items-center mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-border bg-card text-foreground font-semibold mr-3">3</span>
                <strong className="text-xl text-foreground">Audio Transmission</strong>
              </div>
              <ul className="space-y-3 ml-11">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                  <span>The recorded audio is sent to the backend server.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                  <span>The app may display a "searching" message or animation.</span>
                </li>
              </ul>
            </li>

            <li className="relative">
              <div className="flex items-center mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-border bg-card text-foreground font-semibold mr-3">4</span>
                <strong className="text-xl text-foreground">Backend Processing</strong>
              </div>
              <ul className="space-y-3 ml-11">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                  <span>The backend normalizes the audio.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                  <span>It processes the audio to generate the fingerprint.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                  <span>It sends the fingerprint to the song database or recognition service.</span>
                </li>
              </ul>
            </li>

            <li className="relative">
              <div className="flex items-center mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-border bg-card text-foreground font-semibold mr-3">5</span>
                <strong className="text-xl text-foreground">Matching and Response</strong>
              </div>
              <ul className="space-y-3 ml-11">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                  <span>The recognition service compares the fingerprint against its database.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                  <span>If a match is found, song details are returned.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                  <span>If no match is found, a "no match" response is sent.</span>
                </li>
              </ul>
            </li>

            <li className="relative">
              <div className="flex items-center mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-border bg-card text-foreground font-semibold mr-3">6</span>
                <strong className="text-xl text-foreground">Displaying Results</strong>
              </div>
              <ul className="space-y-3 ml-11">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                  <span>The frontend receives the response.</span>
                </li>
                <li>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                    <span>For a match:</span>
                  </div>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                      <span><strong className="text-foreground">Displays Song Information:</strong> Shows the song title, artist, and album art.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                      <span><strong className="text-foreground">Interactive Links:</strong> Provides options to listen to the song on streaming platforms.</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                    <span>For no match:</span>
                  </div>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                      <span><strong className="text-foreground">Notification:</strong> Informs the user that the song couldn't be identified.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                      <span><strong className="text-foreground">Retry Option:</strong> Allows the user to try again.</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="relative">
              <div className="flex items-center mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-border bg-card text-foreground font-semibold mr-3">7</span>
                <strong className="text-xl text-foreground">User Engagement</strong>
              </div>
              <ul className="space-y-3 ml-11">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                  <span>The user can interact with the results.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                  <span>The app may store recent searches for future reference.</span>
                </li>
              </ul>
            </li>
          </ol>

          {/* Conclusion */}
          <h2 id="conclusion" className="text-3xl font-bold mt-12 mb-6 text-primary">Conclusion</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Building a Shazam clone is an exciting project that combines signal processing, algorithm design, and user interface development. By understanding audio fingerprinting and the steps involved in processing and matching audio data, we've created a system that can identify songs based on short audio clips.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            While our clone is a simplified version, the concepts and techniques used are foundational to many audio recognition systems. By refining the algorithms and expanding the song database, this system could be enhanced to provide more accurate and faster results.
          </p>

          {/* Source Code */}
          <h2 id="code-availability" className="text-3xl font-bold mt-12 mb-6 text-primary">Source Code</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            The source code for this Shazam clone is available here. You can explore the implementation details, experiment with the code, and even contribute to its development.
          </p>
          <Button className='mt-5'>
            <Icons.github className="mr-2 h-4 w-4" />
            <Link href="https://github.com/DevEtaiGabbai/shazam-clone">View on GitHub</Link>
          </Button>

          <hr className="border-border mt-7 mb-4" />
          <p className="text-sm text-muted-foreground italic">
            *Note: This blog post provides an overview of how a Shazam-like application works without delving into specific code implementations. For detailed code examples and further technical explanations, please refer to the GitHub repository.*
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;