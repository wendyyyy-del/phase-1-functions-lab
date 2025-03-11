// Code your solution in this file!
function distanceFromHqInBlocks(pickupBlock) {
    const destinationBlock = 42;
    if (pickupBlock > destinationBlock) {
      return pickupBlock - destinationBlock;
    }else {
        return destinationBlock - pickupBlock;
    }
  }
  function distanceFromHqInFeet(pickupBlock)
  {   
    const distanceInBlocks = distanceFromHqInBlocks(pickupBlock)
    return distanceInBlocks * 264;
  }
  function distanceTravelledInFeet(pickupBlock, destinationBlock){
    if (pickupBlock > destinationBlock){
        return (pickupBlock - destinationBlock) * 264;
    }else{
        return (destinationBlock - pickupBlock) * 264;
    }
  }
  function calculatesFarePrice(pickup,destinationBlock) {
    const totalFeetTraveled = distanceTravelledInFeet(pickup, destinationBlock);
    if (totalFeetTraveled <= 400) {
        return 0;
    } else if(totalFeetTraveled > 400 && totalFeetTraveled <=2000 ){
        const excessFeet = totalFeetTraveled - 400;
        return excessFeet * 0.02;
  
    }else if (totalFeetTraveled > 2000 && totalFeetTraveled <= 2500){
        return 25.0;
    }else {
        return 'cannot travel that far';
    }
  }