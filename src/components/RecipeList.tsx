// src/components/RecipeList.tsx
"use client";
import Link from "next/link";
import { trpc } from "../utils/trpc";
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
        <div className="min-h-screen bg-gray-50">
          <main className="container mx-auto px-6 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Recipes</h1>
              <p className="text-lg text-gray-700">
                We’ve organized these recipes every way we could think of so you
                don't have to! Dietary restrictions, weeknight dinners, meal
                prep recipes, some of our most tried-and-true... no matter how
                you browse, we’re sure you’ll find just what you were looking
                for.
              </p>
            </div>

            <div className="relative mb-12">
              <input
                type="text"
                className="w-full p-4 border border-gray-300 rounded-lg"
                placeholder="Search by keyword"
              />
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Top Rated Recipes</h2>
              <p className="text-lg text-gray-700 mb-6">
                Out of all the many recipes on Pinch of Yum, these are our
                shining stars - the recipes we come back to again and again (and
                again).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/path/to/image1.jpg"
                    alt="Recipe 1"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold">
                      The Best Soft Chocolate Chip Cookies
                    </h3>
                    <div className="text-yellow-500 mt-2">⭐⭐⭐⭐⭐</div>
                    <p className="text-gray-700 mt-1">
                      1720 reviews / 4.6 average
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/path/to/image2.jpg"
                    alt="Recipe 2"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold">The Best Sunday Chili</h3>
                    <div className="text-yellow-500 mt-2">⭐⭐⭐⭐⭐</div>
                    <p className="text-gray-700 mt-1">
                      109 reviews / 4.9 average
                    </p>
                  </div>
                </div>
                {/* Add more recipes as needed */}
              </div>
            </div>
          </main>
        </div>
        <Link href="/">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4">
            Go Back
          </button>
        </Link>
        <h2 className="text-xl font-bold mb-4">Recipes</h2>
        {recipesQuery.data.map((recipe: any) => (
          <div key={recipe.id} className="mb-4">
            <h3 className="text-lg font-bold">{recipe.title}</h3>
            <p className="text-gray-700 mb-2">
              Ingredients: {recipe.ingredients}
            </p>
            <p className="text-gray-700 mb-2">
              Directions: {recipe.directions}
            </p>
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
