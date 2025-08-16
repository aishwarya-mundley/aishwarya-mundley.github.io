// Utility function to load markdown files
export const loadMarkdownFile = async (filename: string): Promise<string> => {
  try {
    // For Vite, we need to use dynamic imports for markdown files
    const response = await fetch(`/src/blog-posts/${filename}.md`);
    if (!response.ok) {
      throw new Error(`Failed to load markdown file: ${filename}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading markdown file:', error);
    throw error;
  }
};

// Alternative approach using Vite's import.meta.glob
export const getMarkdownFiles = () => {
  const markdownFiles = import.meta.glob('/src/blog-posts/*.md', { as: 'raw' });
  return markdownFiles;
};

// Function to get a specific markdown file content
export const getMarkdownContent = async (id: string): Promise<string> => {
  const markdownFiles = getMarkdownFiles();
  const filePath = `/src/blog-posts/${id}.md`;
  
  if (filePath in markdownFiles) {
    return await markdownFiles[filePath]();
  } else {
    throw new Error(`Markdown file not found: ${id}`);
  }
};
