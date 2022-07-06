import type { GetStaticProps, NextPage } from 'next'

import Prisma, {PrismaClient } from '@prisma/client';
import Head from 'next/head';


const Surveys: NextPage<{ surveys: Prisma.Survey[]}> = ({ surveys }) => {
  return (
    <>
      <Head>
        <title>Comic Surveys | Surveys</title>
      </Head>
      <main>
        <header>
          <h1>List of the Survey</h1>
        </header>
        {surveys?.map(({id, name}) => <p key={id}>{name}</p>)}
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismaClient = new PrismaClient();
  const surveys = await prismaClient.survey.findMany();

  return {
    props: {
      surveys: JSON.parse(JSON.stringify(surveys))
    },
    revalidate: 10
  }
}

export default Surveys;
