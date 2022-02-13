function countProps(object) {
  let propCount = 0;
  
  const propArray = Object.keys(object)
  propCount = propArray.length
  console.log(propCount)
  
  return propCount;
}

countProps({ name: "Mango", age: 2 })