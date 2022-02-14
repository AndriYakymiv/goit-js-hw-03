// Change code below this line
function findMatches(firstNumber, ...otherArgs) {
    const matches = []; // Don't change this line
    
    for (const arg of otherArgs) {
        
        if (firstNumber.includes(arg)) {

            matches.push(arg)
            
        }
    
    }
    console.log(matches)

  // Change code above this line
  return matches;
}

findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)