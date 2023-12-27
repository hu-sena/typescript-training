let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

/*
for (let i=0; i < sportsName.length; i++) {
    console.log(sportsName[i]);
}
*/

// use the simplified for loop

for (let tempSport of sportsOne) {
    if ( tempSport == "Cricket") {
        console.log(tempSport + " < My Favorite!")
    } else {
        console.log(tempSport);
    }
}