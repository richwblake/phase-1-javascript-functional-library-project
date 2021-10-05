const correctInput = structure => {
  return Array.isArray(structure) ? structure.slice() : Object.values(structure)
}

const myEach = (collection, cls) => {
  const arr = correctInput(collection);
  for (let i = 0; i < arr.length; i++) {
    cls(arr[i]);
  }
  return collection;
}

const myMap = (collection, cls) => {
  const arr = correctInput(collection);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cls(arr[i]));
  }
  return newArr;
}

const myReduce = (collection, cls, acc = undefined) => {
  const arr = correctInput(collection);
  const len = arr.length;
  let i = 0;
  if (acc === undefined) {
    acc = arr[i];
    i++;
  }

  for (; i < len; i++) {
    acc = cls(acc, arr[i], arr);
  }
  return acc;
}

const myFind = (collection, cls) => {
  const arr = correctInput(collection);
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (cls(arr[i])) {
      return arr[i];
    }
  }
}

const myFilter = (collection, cls) => {
  const arr = correctInput(collection);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cls(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const mySize = (collection) => {
  const arr = correctInput(collection);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count++;
  }
  return count;
}

const myFirst = (collection, n) => {
  const arr = correctInput(collection);
  if (n) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  } else {
    return arr[0];
  }
}

const myLast = (collection, n) => {
  const arr = correctInput(collection);
  const len = arr.length;
  let newArr = [];
  if (n) {
    for (let i = 0; i < n; i++) {
      newArr.unshift(arr[len - i - 1])
    }
    return newArr;
  } else {
    return arr[len - 1];
  }
}

const myKeys = obj => {
  return Object.keys(obj);
}

const myValues = obj => {
  return Object.values(obj);
}