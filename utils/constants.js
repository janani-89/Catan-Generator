export const resources = [
    { 
      name:'Wood',
      value :  1,
      availableCount: 4
    },
    { 
      name:'Brick',
      value :  2,
      availableCount: 3
    },
    { 
      name:'Hay',
      value :  3,
      availableCount: 4
    },
    { 
      name:'Ore',
      value :  4,
      availableCount: 3
    },
    {
      name: 'Sheep',
      value: 5,
      availableCount: 4
    },
    {
      name: 'Desert',
      value: 0,
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