function add(...args) {
  return args.reduce((previous, current) => {
    return previous + current;
  });


}