async function parallelCalls(urls) {
    const responses = await Promise.all(urls.map(url => fetch(url)));
    const data = await Promise.all(responses.map(response => response.json()));
    console.log(data);
  }
  
  parallelCalls(['https://api.example.com/data1', 'https://api.example.com/data2']);