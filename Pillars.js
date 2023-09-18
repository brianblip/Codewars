function pillars(numPill, dist, width) {
    // your code here
   if(numPill === 1){return 0}
    else{
      let distance = (dist * (numPill - 1) * 100)
      let pillars = numPill - 2
      
      return distance + (width * pillars)
    }
    
  }

  //explaination
    //if there is only one pillar, there is no distance between pillars, so return 0
    
    //else, the distance between pillars is the distance between the first and last pillar, which is the number of pillars minus 1, times the distance between each pillar, times 100
    //the width of the pillars is the number of pillars minus 2, times the width of each pillar
    //add the distance between pillars and the width of the pillars together to get the total distance between the first and last pillar
    //return the total distance between the first and last pillar
    //example: pillars(2, 20, 25) => 2000
    //example: pillars(11, 15, 30) => 15270
    //example: pillars(1, 10, 20) => 0