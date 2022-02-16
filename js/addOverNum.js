function addOverNum(firstNumber, ...args) {
  let total = 0;

  for (const arg of args) {
    if (firstNumber < arg ) {
      total += arg;
    }
    
  }

  return total;