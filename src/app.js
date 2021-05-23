//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
let createManager = (managerName,managerAge,currentTeam,trophiesWon)=>{
  //Manager is the array to store the details in the order managerName,managerAge,currentTeam,trophiesWon
  var Manager = [];
  Manager.push(managerName);
  Manager.push(managerAge);
  Manager.push(currentTeam);
  Manager.push(trophiesWon); 
  return Manager;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
let createFormation=(formation)=>{
  //Creating an object 
  var teamformation={}
  if(formation.length==0){
      return null;
  }
  else{
    teamformation.defender=formation[0];
    teamformation.midfield=formation[1];
    teamformation.forward=formation[2];
    return teamformation;
  }
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
let filterByDebut=(year)=>{
  var count=0;
  var playerslist = [];
  for(let i=0;i<players.length;i++){
    if(players[i].debut==year){
      count++;
      playerslist.push(players[i]);    
    }
  }
  if(count==0)
    return [];
  else
    return playerslist;
}
//Progression 4 - Filter players that play at the position _______
let filterByPosition=(position)=>{
  var count=0;
  var playerslist = [];
  for(let i=0;i<players.length;i++){
    if(players[i].position==position){
      count++;
      playerslist.push(players[i]);    
    }
  }
  if(count==0)
    return [];
  else
    return playerslist;
}
//Progression 5 - Filter players that have won ______ award
let filterByAward=(Award)=>{
  var count=0;
  var playerslist = [];
  for(let i=0;i<players.length;i++){
    for(let j=0;j<(players[i].awards).length;j++){
    if(players[i].awards[j].name==Award){
      count++;
      playerslist.push(players[i]);    
    }
  }
  }
  if(count==0)
    return [];
  else
    return playerslist;
}
//Progression 6 - Filter players that won ______ award ____ times

let filterByAwardxTimes=(Award,noOftimes)=>{
  var count=0;
  //Times will increment when the award name is the same as the name given as argument
  var times=0;
  var playerslist = [];
  for(let i=0;i<players.length;i++){
    for(let j=0;j<(players[i].awards).length;j++){
    if(players[i].awards[j].name==Award){
      times++;
      if(times==noOftimes){
        count++;
      playerslist.push(players[i]);  
      }
    }
  }
  times=0;
  }
  if(count==0)
    return [];
  else
    return playerslist;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country

let filterByAwardxCountry=(Award,country)=>{
  var count=0;
  var playerslist = [];
  for(let i=0;i<players.length;i++){
    for(let j=0;j<(players[i].awards).length;j++){
    if(players[i].awards[j].name==Award&&players[i].country==country){
      count++;
      playerslist.push(players[i]);    
    }
  }
  }
  if(count==0)
    return [];
  else 
    return playerslist;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

let filterByNoOfAwardsxTeamxAge=(NoOfAwards,Team,Age)=>{
  var count=0;
  var playerslist = [];
  for(let i=0;i<players.length;i++){    
    if((players[i].awards).length>=NoOfAwards&&players[i].team==Team&&players[i].age<Age){
        count++;
        playerslist.push(players[i]);   
    }    
  }
  if(count==0)
    return [];
  else 
    return playerslist;
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
