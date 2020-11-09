{//Genrate die rolls and calculate max die rools
    var map = new Map();
    var value_map = new Map();
    var dice_roll_number = 1;
    var random = 0;
    while(map.get(random)!=10){
        random = Math.floor(Math.random()*10)%6+1;
        value_map.set(dice_roll_number++,random);
        if(map.has(random))
            map.set(random, map.get(random)+1);
        else{
            map.set(random,1);
        }
    }
    console.log("Total no of dice rolls = " + dice_roll_number)
    console.log("Dice value having count 10 no of count = " + random)
}

{//Check the months of 50 people in the given 2 Years
    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    var storeDates = new Map();
    let a= 0

    for(i=1;i<51;i++){
        let date = randomDate(new Date(2008, 0, 1), new Date(2009, 11, 31))
        var month = date.getMonth() + 1;
        if(!storeDates.has(month)){
            let list = new Array();
            list.push(i);
            storeDates.set(month, list)
        } 
        else {
            templist = storeDates.get(month);
            templist.push(i);
            storeDates.set(month,templist);  
        }
    }
    console.log(storeDates)
}

