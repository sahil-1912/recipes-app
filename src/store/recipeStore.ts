// src/store/recipeStore.ts
"use client"
import { create } from "zustand";

type Recipe = {
  id: number;
  title: string;
  ingredients: string;
  directions: string;
};

type RecipeState = {
  recipes: Recipe[];
  addRecipe: (recipe: Omit<Recipe, "id">) => void;
  updateRecipe: (updatedRecipe: Recipe) => void;
  deleteRecipe: (id: number) => void;
};

const useRecipeStore = create<RecipeState>((set) => ({
  recipes: [],
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { id: state.recipes.length + 1, ...recipe }],
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));

export default useRecipeStore;
