import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    axios
      .get('/front_page.html')
      .then((response) => setHtmlContent(response.data))
      .catch((error) => console.error('Error loading HTML file:', error));
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default App;
