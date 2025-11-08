# 🎬 Anime Search App

An **Anime Search Web Application** built with **React**, **TypeScript**, **Redux Toolkit**, and **Chakra UI**, fetching data from the **Jikan API** (MyAnimeList public API).  
Users can search for anime titles, browse paginated results, and view anime details seamlessly with a modern UI and efficient state management.

---

## 🚀 Features

✅ **Search Anime** by title using [Jikan API](https://docs.api.jikan.moe)  
✅ **Pagination Support** — browse through multiple pages of results  
✅ **Redux Toolkit + Async Thunks** for clean, scalable state management  
✅ **Chakra UI** for beautiful and responsive UI components  
✅ **TypeScript** with strict typing for safety and maintainability  
✅ **AI-assisted development** documented in [`PROMPTS.md`](./PROMPTS.md)

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend Framework** | React (Vite + TypeScript) |
| **UI Library** | Chakra UI |
| **State Management** | Redux Toolkit |
| **API Client** | Axios |
| **Language** | TypeScript |
| **API Source** | [Jikan REST API v4](https://api.jikan.moe/v4/anime) |

---

## 📦 Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/anime-search-app.git
cd anime-search-app
```

### 2️⃣ Install Dependencies
```bash
npm install
```

If you encounter Chakra UI compatibility errors:
```bash
npm install @chakra-ui/react@2.8.2 @emotion/react@11 @emotion/styled@11 framer-motion@10
```

### 3️⃣ Run the App
```bash
npm run dev
```

App will be available at:  
👉 [http://localhost:4000](http://localhost:4000)

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── AnimeCard.tsx
│   ├── SearchPage.tsx
│   └── DetailPage.tsx
│
├── features/
│   └── animeSlice.ts
│
├── hoooks/
│   ├── reduxHooks.tsx
│   └── useDebouncedValue.ts
│
├── App.tsx
├── main.tsx
├── store.ts
├── theme.ts
├── types.ts
└── styles.css
```

---

## ⚙️ Environment

- 🚫 **No API key required**  
- 🌐 Uses **public Jikan API**, which may have rate limits  
- 🔁 If requests fail due to rate limits, wait a few seconds and retry  

---

## 🧠 AI Collaboration

This project was developed with the help of **ChatGPT (GPT-5)** and **GitHub Copilot** for:
- Structuring **Redux Toolkit logic**
- Fixing **TypeScript** type issues
- Setting up **Chakra UI themes**
- Refactoring code and **error handling**

All AI-assisted work is documented in [`PROMPTS.md`](./PROMPTS.md).

---

## 🧩 Example Usage

1. Type an anime title (e.g., *Naruto*, *Attack on Titan*)  
2. And showing results:
3. Browse paginated results  
4. Click **Next / Previous** to navigate between pages  

---
## Bonus Implementation
The AnimeCard component was redesigned to create a more engaging and visually appealing user experience with modern UI effects and richer content details.

💡 Visual Improvements

Eye-catching Hover Effect:
Each anime card slightly lifts and gains a soft shadow when hovered, creating a smooth depth illusion and interactivity.

Rounded Corners and Shadow:
Cards use a borderRadius with boxShadow to make the layout feel clean, modern, and elevated.

Responsive Image Display:
The anime cover image automatically fits and scales with the card width, maintaining aspect ratio.

🧩 Additional Anime Information

To provide users with more context at a glance, the following details were added below each anime title:

Information	Data Source	Example / Description
🗓 Airing Year / Season	anime.aired?.prop?.from?.year or anime.season	Displays the year or season when the anime first aired.
🏷 Genre	anime.genres?.[0]?.name	Shows the main genre (e.g., Action, Romance, Comedy).
🕒 Episode Duration	anime.duration	Indicates average duration per episode (e.g., 24 min per ep).
🧑‍🎤 Studio	anime.studios?.[0]?.name	Displays the animation studio (e.g., MAPPA, Ufotable).
🔥 Popularity / Members	anime.popularity or anime.members	Represents the anime’s overall popularity or member count.

---
## 👨‍💻 Author

**Annuh Liwan Nahar**  
🧑‍💻 Fullstack Developer  
💼 Expertise: React, Nuxt.js, Flutter, PHP (Laravel), Node.js  
🌐 [LinkedIn Profile](https://www.linkedin.com/in/annuh-liwan/)

---

## 📄 License

MIT License © 2025 **Annuh Liwan Nahar**
