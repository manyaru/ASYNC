async function concurrentRequests() {
    const [response1, response2] = await Promise.all([
      fetch('https://api.example.com/data1'),
      fetch('https://api.example.com/data2')
    ]);
    const [data1, data2] = await Promise.all([
      response1.json(),
      response2.json()
    ]);
    console.log(data1, data2);
  }
  
  concurrentRequests();