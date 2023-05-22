import Blog from "@components/Blog/Blog"
import { getClient } from "@lib/sanity/sanity"
import { getAllPostQuery } from "queries"

export const getStaticProps = async ({ preview = false }) => {
  const posts = await getClient(preview).fetch(getAllPostQuery)

  return {
    props: {
      posts,
      preview
    },
    revalidate: 30
  }
}

const Index = ({ posts }) => {
  return (
    <>
      <Blog posts={posts} />
    </>
  )
}

export default Index
