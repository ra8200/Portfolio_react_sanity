import React, { useState, useEffect } from "react";
import sanityClient from "../client"

export default function Post() {
  const [postData, setPost] + useState(null);

  useEffect() => {
    sanityClient
      .fetch(`*[_type == "post"] {
        title,
        slug,
        mainImage{
          _id.
          url
        },
        alt
      }`)
  }
  
  return 
