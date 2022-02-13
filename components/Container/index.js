import React from "react";
import Head from "next/head";
import { company } from "@utils/config";

export const Container = ({ title, description, keywords, children }) => {
  return (
    <div>
      <Head>
        <title>
          {title} | {company.name}
        </title>
        <meta name="descriptions" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      {children}
    </div>
  );
};

Container.defaultProps = {
  title: `Get Awesome Sports Updates`,
  description: "A website that brings latest sports news for you.",
  keywords:
    "sports, latest sports news, cricket, football, badminton, tennis, all sports",
};
