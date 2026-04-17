# 🍳 Recipe Finder

A visual and interactive recipe search engine built with **React** and **Vite**. This project was developed as a demonstration of frontend expertise in **Full Stack Open Part 2**, focusing on data fetching, state synchronization, and modern CSS layouts.

##  Preview
The app allows users to search through thousands of recipes in real-time. When a meal is selected, the app displays a high-quality image, a detailed list of ingredients with measurements, and step-by-step cooking instructions.

##  Features
- **Real-time Search:** Fetches data from TheMealDB API instantly as the user types using the `useEffect` hook.
- **Dynamic Content:** Updates the UI without page reloads through React state management.
- **Data Scrubbing:** Cleans and formats raw API data (transforming 20+ separate ingredient fields into a clean list).
- **Aesthetic Design:** A modern dashboard layout using **CSS Grid** and a warm, food-focused color palette.
- **Responsive:** Optimized for both desktop and mobile viewing.

##  Tech Stack
- **Frontend Framework:** [React](https://reactjs.org/) (via Vite)
- **API Client:** [Axios](https://axios-http.com/)
- **Styling:** Custom CSS (Grid & Flexbox)
- **Data Source:** [TheMealDB API](https://www.themealdb.com/api.php)

##  Key Learnings (Full Stack Open Part 2)
This project highlights the mastery of several core React concepts:
- **`useState`**: Managing search queries, result lists, and the currently selected recipe.
- **`useEffect`**: Handling side effects and synchronizing the application with an external API.
- **Asynchronous Programming**: Utilizing Axios and Promises to handle network requests gracefully.
- **Component Architecture**: Breaking the UI into reusable components like `RecipeDetail` and `RecipeList`.
- **Conditional Rendering**: Enhancing UX by showing specific views only when data is available.

##  Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/shyakacedrick/Recipe-finder.git](https://github.com/shyakacedrick/Recipe-finder.git)