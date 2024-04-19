import { Layout } from '../components/src'
import Main from '../../components/main'
import { getCombinedContents } from '../../utils/contents'

const Index = ({ articles, commentary, count }) => {
  return (
    <Layout
      title={'Research – hahaHash'}
      description={
        'Articles, tools, and commentary on Ethereum Restaking'
      }
      card={'https://images.carbonplan.org/social/research.png'}
      links={'local'}
      metadata={`COUNT: ${count}`}
      nav={'research'}
      url={'https://hahahash.lol/research'}
    >
      <Main articles={articles} commentary={commentary} />
    </Layout>
  )
}

export const getStaticProps = () => {
  const { articles, commentary, comments, publications, tools } =
    getCombinedContents()

  return {
    props: {
      articles,
      commentary,
      count:
        articles.length +
        commentary.length +
        comments.length +
        publications.length +
        tools.length,
    },
  }
}

export default Index
