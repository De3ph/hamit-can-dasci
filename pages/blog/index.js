import React from "react";
import Blog from "@components/Blog/Blog";
// import { getClient } from "@lib/sanity/sanity";
// import { groq } from "next-sanity";

// const query = groq`
// *[_type == "post"] {
//   title,
//   mainImage,
//   author -> {
//     name,
//     image
//   }
// }
// `;

// export const getStaticProps = async ({ preview = false }) => {
//   const posts = await getClient(preview).fetch(query);
//   return {
//     props: {
//       posts,
//       preview,
//     },
//     revalidate: 30,
//   };
// };

const index = ({ posts }) => {
  return (
    <>
      {/* <Blog posts={posts} /> */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/V5nzZWEtCnE?autoplay=1"
        title="YouTube video player"
        allow="autoplay loop"
      ></iframe>
    </>
  );
};

export default index;
