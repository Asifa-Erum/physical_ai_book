import React from 'react';
import Layout from '@theme-original/Layout';
import FloatingChatbot from '@site/src/components/FloatingChatbot'; // Import the new component

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      {/* Render the new floating chatbot component */}
      <FloatingChatbot />
    </>
  );
}
