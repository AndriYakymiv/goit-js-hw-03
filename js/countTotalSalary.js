function countTotalSalary(salaries) {
  let totalSalary = 0;
    
    const values = Object.values(salaries);

    for (const value of values) {
        console.log(value)
        totalSalary += value;
    }
    
  return totalSalary;
}


countTotalSalary({ mango: 100, poly: 150, alfred: 80 })