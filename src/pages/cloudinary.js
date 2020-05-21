import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
 
export default () => {
    const data = useStaticQuery(graphql`
      query {
        file(name: { eq: "gatsby-icon" }) {
          childCloudinaryAsset {
            fluid {
              ...CloudinaryAssetFluid
            }
          }
        }
      }
    `);
   
    return <Image fluid={data.file.childCloudinaryAsset.fluid} alt="avatar" />;
  };