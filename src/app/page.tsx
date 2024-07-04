// src/app/page.tsx
'use client'
import RecipeForm from "../components/RecipeForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-2xl mt-10">
        <h1 className="text-4xl font-bold mb-4">Add a New Recipe</h1>
        <RecipeForm />
      </div>
    </main>
  );
}
