// var s = S$('en');
// console.log(s);
// console.log(s.getCurrentLang());

// var textAreaTag = 'inputArea';
// var textOutput  = 'txtOut';

// var jill = "oll ala  mala mango    bitch";

// var someX = s.inputDataParser(jill);
// console.log(someX);

// console.log(s.filterBlankStrInArray(someX));

// console.log(s.getSwears());
// console.log(s.getSwears().indexOf('bitch'));

// for (var i = 0 ; i < someX.length; i++){
//     if(s.isSwordWord(someX[i]))
//       console.log(someX[i] + ' is a swear');
//     else 
//        console.log(someX[i] + ' is NOT a swear');
    
// } 

// var someEmoji = s.generateStrMojis(4); 
// document.getElementById('killMong').innerHTML = someEmoji;
// console.log(someEmoji);


/// index2.html
// document.onclick('submitButton',function(){
//     var inputContent = document.getElementById('inArea').innerHTML;
//     var swordOutput = s.swordMachine(inputContent);
//     document.getElementById('inArea').innerHTML = inputContent;
//     document.getElementById('txtOut').innerHTML = swordOutput;
    
// });

// var i = 0;
$('#submitButton').click(function(){
    
    var s = S$('en');
    console.log(s);
    console.log(s.getCurrentLang());

    var textAreaTag = 'inArea';
    var textOutput  = 'txtOut';

    s.HTMLsword(textAreaTag,textOutput);

})