import { useEffect } from 'react';

const SubstackFeed = () => {
  useEffect(() => {
    // Dynamically add the Substack widget script
    const script = document.createElement('script');
    script.src = "https://substackapi.com/embeds/feed.js";
    script.async = true;
    
    // Set up the Substack feed configuration
    window.SubstackFeedWidget = {
      substackUrl: "geckogen.substack.com",
      posts: 5,
      layout: "center"
    };

    // Append the script to the document
    document.body.appendChild(script);

    // Clean up by removing the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this runs once after the first render

  return (
    <div className='flex flex-row' id="substack-feed-embed"></div>
  );
};

export default SubstackFeed;
