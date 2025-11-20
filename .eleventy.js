const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  
  // 1. Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // 2. Passthrough Copies (Moving files)
  // Moves CSS
  eleventyConfig.addPassthroughCopy("src/css");
  
  // Moves the documents folder to the root of the site
  // This maps src/documents -> _site/documents
  eleventyConfig.addPassthroughCopy({ "src/documents": "documents" });

  // [NEW] 2. Configure Markdown to allow HTML
  const mdOptions = {
    html: true,       // Enable HTML tags in source
    breaks: true,     // Convert line breaks to <br>
    linkify: true     // Autoconvert URLs to links
  };
  eleventyConfig.setLibrary("md", markdownIt(mdOptions));

  // 3. Collections
  // "posts" collection
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts").reverse();
  });

  // "work" collection
  eleventyConfig.addCollection("work", function(collectionApi) {
    return collectionApi.getFilteredByTag("work").reverse();
  });

  eleventyConfig.addPassthroughCopy("script.js");

eleventyConfig.addGlobalData("lastUpdated", () => {
    return new Date().toLocaleString('en-US', { 
      timeZone: 'America/Los_Angeles', // Sets it to your local time
      month: 'short', 
      day: 'numeric', 
      year: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric'
    });
  });

  // 4. Configuration Return
  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      layouts: "_includes/layouts"
    }
  };
};