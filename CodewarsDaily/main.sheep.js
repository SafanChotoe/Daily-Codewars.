function warnTheSheep(queue) {
    //first needs to check which place the wolf is.
    //this place must be stored.
    //if it is not the last place, then warn the next sheep after wolf(in front of wolf)
    //else ask wolf to leave and stop eating sheep.
    
      if(queue[queue.length - 1] === "wolf") {
        return "Pls go away and stop eating my sheep";
      }else {
        const numberSheep = queue.length - (queue.indexOf("wolf") + 1);
        return `Oi! Sheep number ${numberSheep}! You are about to be eaten by a wolf!`
      }
  }