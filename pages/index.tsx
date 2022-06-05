import Question from '@comic/containers/Question'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Question type="OPEN" status="INDIVIDUAL" />
    </div>
  )
}

export default Home
