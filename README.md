# Shazam Clone in Next.js 🎵

Created by Etai Gabbai on 8/13/2024

## How It Works 🤔

This Shazam clone leverages a Next.js front-end to capture a 4-second audio sample. The sample is sent to a Google Cloud Function (backend) written in Python 3.10 for detection. The backend processes the audio and returns the result, including confidence scores, possible matches, and their respective song information.

## Requirements

- Next.js 14+
- Node.js
- Google Cloud CLI
- Python 3.10
- Flask

## Installation 👩‍💻

1. Clone the repository: `git clone https://github.com/DevEtaiGabbai/shazam-clone.git`
2. Navigate to the project directory and run `npm install`
3. Change directory to the `python` folder and install the dependencies: `pip install -r requirements.txt`
4. Start the Google Cloud Function locally: `functions-framework --target=recognize`
5. Rename `.env.example` to `.env.local` and set `NEXT_PUBLIC_GCF_URL` to `http://127.0.0.1:8080/recognize`
6. Return to the project root directory and run the development server: `npm run dev`
7. Open [localhost:3000](http://localhost:3000) in your browser and you're all set!

## Contributing & Improving 📈

The clone currently fulfills its basic purpose, but there’s always room for enhancement!

Feel free to dive into the code and contribute at any skill level. Here are some potential improvements:

- [ ] Implement Light/Dark mode.
- [ ] Add an authentication system to save Shazams under user accounts.
- [ ] Refine the UI to better match the mobile app experience.
- [x] Improve result speed with an upcoming ShazamAPI rewrite - still in the works 🔜
- [ ] Incorporate a previous Shazam card feature similar to the mobile app.
- [ ] Automatically add results to a Spotify playlist connected by the user.

## Developers and Maintainers

**Etai Gabbai** - [GitHub](https://github.com/DevEtaiGabbai) (Original Creator)

A special thanks to **@Numenorean** - [GitHub](https://github.com/Numenorean/) for creating the original [ShazamAPI](https://github.com/Numenorean/ShazamAPI).
