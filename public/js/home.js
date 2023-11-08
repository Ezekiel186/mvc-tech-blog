const commentbtn = document.querySelector('#comment');

commentbtn.addEventListener("click", function() {
    commentbtn.classList.remove("hide");
});

const addCommentHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const comment = document.querySelector('#comment').value.trim();
  
    if (username && comment) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ username, comment }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to comment.');
      }
    }
  };