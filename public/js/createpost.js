document.addEventListener('vsdf', () => {
    const postForm = document.getElementById('post-form');
  
    postForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
  
      try {
        const response = await fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, description }),
        });
  
        if (response.ok) {
            window.location.href = '/homepage'
        } else {
          console.error('Failed to create a new post');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    });
  });
  