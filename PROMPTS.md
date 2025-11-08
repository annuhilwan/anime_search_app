## PROMPTS.md

### Project Context  
This project is an **Anime Search App** built using **React**, **TypeScript**, **Redux Toolkit**, and **Axios**, fetching data from the **Jikan API**.  
AI tools such as **ChatGPT (GPT-5)** and **GitHub Copilot** were used throughout development for generating boilerplate code, debugging TypeScript issues, and optimizing logic.  
The goal was to improve productivity and ensure clean, type-safe, and scalable architecture.

---

### Prompt 1 — Create Redux Slice for Anime Search  

**Prompt:**  
> “Help me write a Redux Toolkit slice in TypeScript to fetch anime data from the Jikan API with pagination and error handling.”

**Context:**  
Used for `src/store/animeSlice.ts` to manage search query, pagination, and API requests using `createAsyncThunk`.

**AI Contribution:**  
ChatGPT generated the initial slice structure including:
- `fetchAnimes` async thunk  
- Error handling with `rejectWithValue`  
- Loading and fulfilled reducers  

Then I customized it to handle pagination state and store API response metadata.

---

### Prompt 2 — Implement Pagination Functionality  

**Prompt:**  
> “How can I make my pagination work in Redux Toolkit so that when clicking ‘Next’, it fetches the next page from API and updates results?”

**Context:**  
Used in both the Redux slice and `SearchPage.tsx` for pagination UI logic.  

**AI Contribution:**  
ChatGPT suggested using a `setPage` reducer and triggering a refetch when the page changes.  
It also proposed an approach to append new results for infinite scroll:

```ts
state.results = state.page === 1
  ? action.payload.data
  : [...state.results, ...action.payload.data];
```

---

### Prompt 3 — Fix TypeScript Error on Optional Fields  

**Prompt:**  
> “I got a TypeScript error: 'anime.images.jpg' is possibly 'undefined'. How can I fix it safely?”

**Context:**  
Used in `SearchPage.tsx` where anime image rendering caused a potential undefined error.  

**AI Contribution:**  
ChatGPT explained the use of **optional chaining** to prevent runtime crashes:

```tsx
<img src={anime.images?.jpg?.image_url ?? '/placeholder.jpg'} />
```

This resolved both TypeScript warnings and ensured safer rendering of image URLs.

---

### Prompt 4 — Fix Chakra UI Theme Import Error  

**Prompt:**  
> “After installing Chakra UI, I get an error: 'does not provide an export named extendTheme'. How can I fix this?”

**Context:**  
Encountered while configuring Chakra UI in `theme.ts` and `main.tsx`.  

**AI Contribution:**  
ChatGPT identified a **version mismatch** between Chakra UI v3 and v2, and suggested using compatible versions:

```bash
npm install @chakra-ui/react@2.8.2 @emotion/react@11 @emotion/styled@11 framer-motion@10
```

This resolved the theme import issue and restored correct UI rendering.

---

### Tools Used  

- **ChatGPT (GPT-5):** for architecture planning, debugging, and optimizing Redux + TypeScript code.  
- **GitHub Copilot:** for inline code suggestions and repetitive syntax generation.  
