// pages/api/recipes/index.ts

import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    
    try {
      const recipes = await prisma.recipe.findMany();
      res.status(200).json(recipes);
    } catch (error) {
      res.status(500).json({ error: "Error fetching recipes" });
    }
  } else if (req.method === 'POST') {
    const { title, ingredients, directions } = req.body;
    
    try {
      const newRecipe = await prisma.recipe.create({
        data: {
          title,
          ingredients,
          directions,
        },
      });

      res.status(201).json(newRecipe);
    } catch (error) {
      console.error('Error creating recipe:', error);
      res.status(500).json({ error: 'Error creating recipe' });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
