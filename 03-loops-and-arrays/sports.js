var sportsName = ["Golf", "Cricket", "Tennis", "Swimming"];
/*
for (let i=0; i < sportsName.length; i++) {
    console.log(sportsName[i]);
}
*/
// use the simplified for loop
for (var _i = 0, sportsName_1 = sportsName; _i < sportsName_1.length; _i++) {
    var tempSport = sportsName_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + " < My Favorite!");
    }
    else {
        console.log(tempSport);
    }
}
