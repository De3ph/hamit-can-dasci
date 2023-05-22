import React from "react"
import { Box, Heading } from "@chakra-ui/react"
import { getClient } from "@lib/sanity/sanity"
import { getAllPostQuery, getPostBySlug } from "queries"
import Image from "next/image"
import { urlFor } from "@lib/sanity/sanity"

const Post = ({ post }) => {
  return (
    <>
      <Box minH="50vh" px="32">
        <Box display="flex" flexDir="column" justifyContent="center" gap="8">
          <Box
            display="flex"
            flexDir={{
              base: "column"
            }}
            gap={{
              base: "8"
            }}
          >
            <Box>
              <Heading size="2xl">{post.title}</Heading>
            </Box>
            <Box>
              <Image
                width="200"
                height="200"
                src={urlFor(post.mainImage).url()}
                alt="Post Image"
              />
            </Box>
          </Box>
          <Box lineHeight="7" fontSize="2xl">
            {post.body.children.text}
          </Box>
          <Box>
            <p>{post.author.name}</p>
            <Image
              alt="author image"
              width={96}
              height={96}
              src={urlFor(post.author.image).url()}
              objectFit="cover"
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Post

export const getStaticPaths = async ({ preview = false }) => {
  const posts = await getClient(preview).fetch(getAllPostQuery)

  const paths = posts.map((post) => ({
    params: { slug: post.slug.current }
  }))

  return {
    paths: paths,
    fallback: "blocking"
  }
}

export const getStaticProps = async ({ params }) => {
  const post = await getClient(false).fetch(getPostBySlug, {
    slug: "first-post"
  })

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    }
  }
}
