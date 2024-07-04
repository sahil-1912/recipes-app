import { z } from 'zod';
import { router, publicProcedure } from '../trpc';

export const recipeRouter = router({
  // Get all recipes
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.recipe.findMany();
  }),

  // Get a single recipe by ID
  getById: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    return ctx.prisma.recipe.findUnique({
      where: { id: input },
    });
  }),

  // Create a new recipe
  create: publicProcedure.input(z.object({
    title: z.string(),
    description: z.string().optional(),
    ingredients: z.string().array(),
    instructions: z.string().array(),
  })).mutation(async ({ ctx, input }) => {
    return ctx.prisma.recipe.create({
      data: {
        title: input.title,
        description: input.description,
        ingredients: input.ingredients,
        instructions: input.instructions,
      },
    });
  }),

  // Update an existing recipe
  update: publicProcedure.input(z.object({
    id: z.string(),
    title: z.string().optional(),
    description: z.string().optional(),
    ingredients: z.string().array().optional(),
    instructions: z.string().array().optional(),
  })).mutation(async ({ ctx, input }) => {
    return ctx.prisma.recipe.update({
      where: { id: input.id },
      data: {
        title: input.title,
        description: input.description,
        ingredients: input.ingredients,
        instructions: input.instructions,
      },
    });
  }),

  // Delete a recipe
  delete: publicProcedure.input(z.string()).mutation(async ({ ctx, input }) => {
    return ctx.prisma.recipe.delete({
      where: { id: input },
    });
  }),
});
