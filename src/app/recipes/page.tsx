// src/app/page.tsx
import RecipeList from '../../components/RecipeList';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-2xl mt-10">
        <h1 className="text-4xl font-bold mb-4">Add a New Recipe</h1>
        <RecipeList />
      </div>
    </main>
  );
}
