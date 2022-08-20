// code your solution here


function superbowlWin(record){
  const findItems = record.find(rray => rray.result === "W");
  if (findItems){
    return findItems.year;
  }
   }

