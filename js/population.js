// FB Population Algorithm
// 
// Given a list of people with their birth and death years,
// Find the year with the highest population.

// input is array of objects: [{birth: yyyy, death: yyyy}]

const people = [
  {'birth': 1974, 'death': 2074},
  {'birth': 1971, 'death': 2014},
  {'birth': 1944, 'death': 2000},
  {'birth': 2001, 'death': 2094},
  {'birth': 1905, 'death': 1979},
  {'birth': 2007, 'death': 2104}
]

var population = {};
var largest = 0;
var lyear = [];
  

people.forEach(function(person){
  for (var i=person.birth; i<person.death; i++){
    
    if (population[i]) {
      population[i] = population[i] + 1;
      if (population[i] >= largest) {
        //console.log(i);
        largest = population[i];
        lyear.push(i);
      }
    } else {
      population[i] = 1;
    }
  }
});

//console.log(largest);
console.log(lyear);
//console.log(population);