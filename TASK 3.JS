async function awaitCall() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('An error occurred while fetching data:', error.message);
    }
  }
  
  awaitCall();