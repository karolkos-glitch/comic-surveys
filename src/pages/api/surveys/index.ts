import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

export default async function handle(
  req: NextApiRequest, res: NextApiResponse
  ) { 
    const prisma = new PrismaClient();

    if(req.method === 'POST'){
      const survey = await prisma.survey.create({
        data: {
          name: 'Ankieta DHL'
        }
      });
      
      res.status(200);
      res.json(survey);
    }
}