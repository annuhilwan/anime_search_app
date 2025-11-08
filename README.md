🎬 Anime Search App

An Anime Search Web Application built with React, TypeScript, Redux Toolkit, and Chakra UI, fetching data from the Jikan API (MyAnimeList public API).
Users can search for anime titles, browse paginated results, and view anime details seamlessly with modern UI and state management.

🚀 Features

🔍 Search Anime by title using Jikan API

📄 Pagination Support — browse through multiple pages of results

⚡ Redux Toolkit + Async Thunks for clean and scalable state management

🎨 Chakra UI for modern and responsive UI components

🧩 TypeScript with strong typing for safety and maintainability

🧠 AI-assisted development documented in PROMPTS.md

🧱 Tech Stack
Layer	Technology
Frontend Framework	React (Vite + TypeScript)
UI Library	Chakra UI
State Management	Redux Toolkit
API Client	Axios
Language	TypeScript
API Source	Jikan REST API v4
📦 Installation
1️⃣ Clone the Repository
git clone https://github.com/yourusername/anime-search-app.git
cd anime-search-app

2️⃣ Install Dependencies
npm install


If you encounter Chakra UI compatibility errors, use:

npm install @chakra-ui/react@2.8.2 @emotion/react@11 @emotion/styled@11 framer-motion@10

3️⃣ Run the App
npm run dev


App will be available at
👉 http://localhost:4000

📂 Project Structure
src/
│
├── components/
│   ├── SearchBar.tsx
│   ├── SearchPage.tsx
│   └── Pagination.tsx
│
├── store/
│   ├── index.ts
│   └── animeSlice.ts
│
├── types/
│   └── index.ts
│
├── App.tsx
├── main.tsx
├── theme.ts
└── styles.css

⚙️ Environment

No API key is required.
This app uses the public Jikan API, which is rate-limited.
If requests fail due to rate limits, wait a few seconds and retry.

🧠 AI Collaboration

This project was developed with the assistance of ChatGPT (GPT-5) and GitHub Copilot for:

Structuring Redux Toolkit logic

Fixing TypeScript type issues

Setting up Chakra UI themes

Refactoring and error handling

All AI-assisted prompts are documented in PROMPTS.md
.

🧩 Example Usage

Type an anime title (e.g., Naruto, Attack on Titan)

Click Search

Browse the paginated results

Click Next / Previous to navigate pages

🧑‍💻 Author

Annuh Liwan Nahar
Fullstack Developer
💼 Expertise: React, Nuxt.js, Flutter, PHP (Laravel), Node.js
🌐 LinkedIn Profile

📄 License

MIT License © 2025 Annuh Liwan Nahar