import type { GetStaticProps, NextPage } from 'next'

import Prisma, {PrismaClient} from '@prisma/client';
import Head from 'next/head';


const FillTheSurvey: NextPage<{ surveys: Prisma.Survey[]}> = ({ surveys }) => {
  return (
    <>
      <Head>
        <title>Comic Surveys | Surveys</title>
      </Head>
      <main>
        <header><h1>List of the Survey</h1></header>
        {surveys.map(({id, name }) => <p key={id}>{name}</p>)}
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismaClient = new PrismaClient();
  const survey = await prismaClient.survey.findUnique({
    where: {
      id: Number(params?.id)
    }
  })

  if(survey) return {
    props: {
      survey
    },
  }

  return {
    notFound: true
  }

}

export default FillTheSurvey;