// src/components/RecipeList.tsx
'use client';
import Link from 'next/link';
import { trpc } from '../utils/trpc';
const RecipeList = () => {


  const recipesQuery = trpc.recipe.getAll.useQuery();
  const deleteRecipeMutation = trpc.recipe.delete.useMutation();

  const deleteRecipe = async (id: string) => {
    try {
      await deleteRecipeMutation.mutateAsync(id);
      recipesQuery.refetch();
    } catch (error) {
      console.error("Failed to delete recipe", error);
    }
  };

  if (recipesQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (recipesQuery.error) {
    return <div>Error: {recipesQuery.error.message}</div>;
  }

  if (recipesQuery.data) {
    return (
      <div>
        <Link href="/">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4">
            Go Back
          </button>
        </Link>
        <h2 className="text-xl font-bold mb-4">Recipes</h2>
        {recipesQuery.data.map((recipe: any) => (
          <div key={recipe.id} className="mb-4">
            <h3 className="text-lg font-bold">{recipe.title}</h3>
            <p className="text-gray-700 mb-2">Ingredients: {recipe.ingredients}</p>
            <p className="text-gray-700 mb-2">Directions: {recipe.directions}</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => deleteRecipe(recipe.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default RecipeList;
