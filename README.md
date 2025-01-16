# Job Board with Recommendations

A **high-performance**, **fully responsive** job board with a recommendation page, built using **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Radix UI** components. This project was designed and developed as part of a frontend engineering test.

## 🚀 Features

### ✅ Core Functionality
- **Job Board** – Displays job listings dynamically with an intuitive UI.
- **Recommendation Page** – Provides job recommendations based on predefined logic.
- **Interactive UI** – Smooth and engaging user interactions powered by Radix UI components.

### 📱 Responsive & Mobile-first
- Developed an **H5 mobile view** without explicit designs, using best practices.
- Adaptive layouts and navigation for a seamless mobile experience.

### 🎨 UI & UX Enhancements
- **Dark Mode Support** – Implemented theme toggling with `next-themes`.
- **Custom Animations** – Smooth transitions and effects for enhanced user experience.
- **Optimized Layouts** – Efficient UI structuring for a modern and clean look.

### ⚡ Performance & Optimizations
- **Optimized Bundle Size** – Leveraged Next.js 14 for server-side rendering (SSR) and static site generation (SSG).
- **Reusable Components** – Created modular components to improve maintainability.
- **Linting & Formatting** – Enforced best practices with ESLint and Prettier.

## 🛠 Tech Stack

| Tech | Description |
|------|------------|
| **Next.js 14** | React framework for server-side rendering and performance |
| **TypeScript** | Strict typing for reliability and maintainability |
| **Tailwind CSS** | Utility-first styling framework for rapid UI development |
| **Radix UI** | Accessible and customizable UI components |
| **React Hook Form** | Optimized form handling |
| **Zod** | Schema validation |
| **Lucide React** | Icon library for modern UI components |

## 📂 Project Structure

```
.
├── app
│   ├── globals.css  # Global styles
│   ├── layout.tsx   # Main layout
│   ├── page.tsx     # Main page
│
├── components
│   ├── jobs
│   │   ├── job-list.tsx  # Job listing component
│   ├── navigation
│   │   ├── sidebar.tsx   # Sidebar navigation
│   ├── ui               # UI components
│
├── hooks
│   ├── use-toast.ts   # Custom toast notifications
│
├── lib                # Utility functions
├── node_modules       # Dependencies
├── .eslintrc.json     # ESLint configuration
├── .gitignore         # Git ignore file
├── package.json       # Project dependencies
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
```

## 📦 Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-repo/job-board.git
   cd job-board
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Run the development server**
   ```sh
   npm run dev
   ```
4. **Build the project**
   ```sh
   npm run build
   ```
5. **Start the production server**
   ```sh
   npm run start
   ```

## 📌 Future Enhancements
- **AI-Powered Job Recommendations** – Leverage AI to personalize job suggestions.
- **User Authentication** – Implement login/signup using Clerk or NextAuth.
- **Bookmarking & Job Applications** – Allow users to save jobs and apply.

## 📜 License
This project is licensed under the **MIT License**.

---

💡 **Developed by Syed Moinuddin** | Pushing the boundaries of frontend excellence 🚀
