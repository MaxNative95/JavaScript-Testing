// Example og higher-order functions 
const makeAdjectifier = (adjective) => {
  return (string) => {
    return adjective + " " + string
  };
};

let coolifier = makeAdjectifier("cool");
coolifier("conference");
