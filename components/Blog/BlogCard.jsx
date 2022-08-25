import { Avatar, Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { urlFor } from "@lib/sanity/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import glassStlye from "@styles/Glass.module.css";

const BlogCard = ({ post }) => {
  return (
    <>
      <Link href={"/blog/post/" + post.slug}>
        <a>
          <Box
            className={glassStlye.glass}
            key={post.title}
            _hover={{
              bgGradient: "linear(to-r, blackAlpha.300, blackAlpha.900)",
            }}
          >
            <VStack>
              <Box display="flex" justifyContent="center" w="100%" p={4}>
                <Image
                  width="200"
                  height="200"
                  src={urlFor(post.mainImage).url()}
                  alt="img"
                />
              </Box>
              <Box w="100%" p={4}>
                <VStack spacing={4}>
                  <Box>
                    <Heading size="lg" color="white">
                      {post.title}
                    </Heading>
                  </Box>
                  <Box>
                    <VStack spacing="4">
                      <Box>
                        <Avatar
                          size="xl"
                          name={post.author.name}
                          src={urlFor(post.author.image).url()}
                        />
                      </Box>
                      <Box>
                        <Text>{post.author.name}</Text>
                      </Box>
                    </VStack>
                  </Box>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </a>
      </Link>
    </>
  );
};

export default BlogCard;
