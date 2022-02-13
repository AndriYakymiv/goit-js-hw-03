function countProps(object) {
  let propCount = 0;
  
  const keys = Object.keys(object)
  propCount = keys.length
  console.log(propCount)
  
  return propCount;
}

countProps({ name: "Mango", age: 2, location: "Ukraine"})