$('#submitButton').click(function(){
    
    var s = S$('en');
    console.log(s);
    console.log(s.getCurrentLang());

    var textAreaTag = 'inArea';
    var textOutput  = 'txtOut';

    s.HTMLsword(textAreaTag,textOutput);

})