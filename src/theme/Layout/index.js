import React from 'react';
import Layout from '@theme-original/Layout';
import ChatbotWidget from '../ChatbotWidget'; // Adjust path if needed

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props}>
        {props.children}
      </Layout>
      <ChatbotWidget />
    </>
  );
}
