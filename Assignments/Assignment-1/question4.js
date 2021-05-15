var names=['Tom','Ivan','Jerry'];

 var newArrayOfObjects = names.map( x => ({name:x, length: x.length}));

  console.log(newArrayOfObjects);