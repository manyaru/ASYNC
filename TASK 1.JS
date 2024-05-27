async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(value);
    }
  }
  
  iterateWithAsyncAwait(['value1', 'value2', 'value3']);