import React from 'react';

function App() {
  const frontPageHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Front Page</title>
    </head>
    <body>
        <h1>Front Page Content</h1>
        <p>This is your static HTML content rendered inside React.</p>
    </body>
    </html>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: frontPageHtml }} />
  );
}

export default App;
