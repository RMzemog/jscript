function ageInDays(){
    var birthYear = prompt('what year were you born...');
    var ageInDayss =(2018 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}
function reset(){
    document.getElementById('ageInDays').remove();

}
function generatecat(){
    var image=document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSs79jT2FClQIzi-uPrSJ4Cm_GZiJG2A92DU_xf-r9qGlbnasaa";
    div.appendChild(image);
}

function rpsGame(yourChoice){
console.log(yourChoice);
var humanChoice, botChoice;
humanChoice = yourChoice.id;
botChoice = numberToChoice(randToRpsInt())
console.log('computer choice:',botChoice);
results = decideWinner(humanChoice,botChoice);
console.log(results);
message = finalMessage(results);
console.log(message);
rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock' , 'paper' , 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase ={
        'rock':{'scissors':1,'rock':0.5, 'paper':0},
        'paper':{'scissors':1,'rock':0, 'paper':1},
        'scissors':{'scissors':0.5,'rock':0, 'paper':1},
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore,computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return{'message':'You lost!','color':'red'};
    }
    else if(yourScore === 0.5){
        return {'message':'You tied','color':'yellow'}
    }else {
        return {'message':'You won','color':'green'}
    }
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imageDatabase={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv =  document.createElement('div');
    var messageDiv = document.createElement('div');
    humanDiv.innerHTML="<img src'" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 styles='color: " + finalMessage['color']+"; font-size: 60px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML="<img src'" + imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: rgba(243, 50, 233, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}
