export const resources = [
    { 
      name:'Wood',
      availableCount: 4
    },
    { 
      name:'Brick',
      availableCount: 3
    },
    { 
      name:'Hay',
      availableCount: 4
    },
    { 
      name:'Ore',
      availableCount: 3
    },
    {
      name: 'Sheep',
      availableCount: 4
    },
    {
      name: 'Desert',
      availableCount: 1
    }
];
  
export const numberMap = {
  2: 1,
  3: 2,
  4: 2,
  5: 2,
  6: 2,
  8: 2,
  9: 2,
  10: 2,
  11: 2,
  12: 1
}

export const numbers = Object.keys(numberMap).reduce((arr, key) => {
  return arr.concat( new Array(numberMap[key]).fill(key) );
}, []);

export const getRandomInt = (max) =>  {
  return Math.floor(Math.random() * max);
}

export const shuffle = (arr) => {
    for(let i= arr.length-1;i>0;i--) {
        let j = Math.floor(Math.random() * (i+1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
}

export const resourceGenerator = (data) => {
  const resourcePool = [];
  data.map(resource => {
      for(let i=0; i < resource.availableCount; i++) {
        resourcePool.push(resource.name)
    }
  });
  return resourcePool;
}