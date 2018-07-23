// SWORD - SWEAR Words

(function(global,$){
    var specialChars = ['.',';','?','!',','];
    var supportedLangs =  ['en','fr','pt','es'];
    var emojiPrex = '&#x1'; 
    var emojis = ['F47B','F479','F608','F921','F92C','F621','F910',
                  'F30B','F926','F9DB','F9D9','F930','F468','F63F',
                  'F9DF','F952','F955','F346','F352','F34C','F4A9',
                  'F984','F4AB','F4A3','F44E','F4AA','F6C0','F47D',
                  'F480','F92E','F922','F637','F635','F92F','F631',
                  'F40A','F432','F437','F42E','F9DF','F9DC','F64A'
    ];
    
    var SwordWords = {
        pt : [],
        en : ['arse','ass', 'asshole','bitch','bollocks',
            'fucker','crap','cunt','fuck','fucking','fucker','goddman','cocksucker',
            'hell','shit','motherfucker','nigga','nigger','shitass',
            'shithole','fuckpants','whore','twat','hoe'],
        fr : []
    }


    var Sword = function(language){
       return new Sword.init(language);
    }    
    
    Sword.prototype = {
        // set the current language
        setCurrentLang: function(lang){
            if(supportedLangs.indexOf(lang)== -1)
               throw 'Invalid Language : ' + lang + ' is not set in the application';
            this.language = lang;
            return this;
        },
        // get the current lang setted
        getCurrentLang : function(){
            return this.language;
        },
        // get the current list of swears in the current language
        getSwears(){
            return SwordWords[this.language];
        }
        ,
       // check if the given language its a valid one
         langValidation: function(lang){
             if(supportedLangs.indexOf(lang) == -1)
                throw 'Invalid Language: The language : ' + lang + ' is not currently defined.';
         },

        // function used to given an string ,split it using blank splace as delimitator
        inputDataParser: function (inputData){
            console.log(inputData);
            if(inputData == 0)
            throw 'Invalid Operation: Trying to parse an empty array';
            return inputData.split(" ");
        },
        // function used to filter strings with only blanks spaces by checking
        //     if last position of string is blank space
        filterBlankStrInArray: function (inputArray){
        // TO DO try to check if its possible to use regex to substitute more than
          var result = [];
          for (var i = 0; i < inputArray.length; i++){
                if(inputArray[i].lastIndexOf(" ") != (inputArray[i].length -1))
                result.push(
                    inputArray[i]
                ) ;   
          }
          return result;
        },
         ///  remove special caracteres {.,;} in string {#IWILLBEBACK}
         removeSpecialChar: function(s){
             console.log("Entered Content 00 " ,s);
           if(specialChars.lastIndexOf(s.substring(s.length -1)) != -1){
                s = s.substring(0,s.length -1);
                console.log('RemoveSpecial 01 : ', s);
            }
             console.log("Returned String 02 : ",s);
            return s;
          },



        // for each str elem applyFilter if its sweard
        processContent(arr){
            
            for(var i=0 ; i < arr.length; i++){
                arr[i] = this.removeSpecialChar(arr[i]);
                arr[i]= this.isSwordWord(arr[i].toLowerCase()) == true ? this.applyFilter(arr[i]) : arr[i];
            }
            return  this.getfilteredContent(arr);
        }
        ,
        // check if the word is swear in the current language
        isSwordWord : function (inputString) {
            return (SwordWords[this.language].indexOf(inputString) == -1) ? false : true; 
         },
        // given inputData string : calculate length an apply it a filter
        applyFilter: function(inputData){
           var patternSize = inputData.length;
           return  this.generateStrMojis(patternSize);
        },
        
        // generate string pattern of an given size of substitute an sword
        generateStrMojis: function(patternSize){
           var  stringMoji='';
           var numbOfEmojis = emojis.length;
           for (var i = 0 ; i < patternSize; i++){
               var index = this.getRandomInt(numbOfEmojis);
               stringMoji += this.getMoji(emojis[index]);
           }
          return stringMoji;
        },
        // given a emoji string code : concatenate it with emoji prefix ()
        getMoji: function(emCode){
           return  emojiPrex + emCode;
        },
        getfilteredContent: function(arr){
          return arr.join(" ");
        },
        // function that agregate all
        swordMachine: function(data){
            console.log("Data :", data);
            var auxData = this.inputDataParser(data);
            auxData = this.filterBlankStrInArray(auxData);

            return this.processContent(auxData);
        },
        HTMLsword: function(inputSelector, outputSelector){
              var cont_info = $('#' + inputSelector ).val();
            //   console.log('HTML cont_info : ',cont_info );
              cont_info = this.swordMachine(cont_info);

              $('#' + outputSelector).html(cont_info);
              return this;
        }
        ,
        // get a random int between (0 and max(the arg) - 1)
        // (from mdn javascript Math.random )
        getRandomInt : function (max) {
            return Math.floor(Math.random() * Math.floor(max));
          }


    }

   Sword.init = function(language){
    var self = this;
   // self.inputContent = content ;
    self.language = language || 'en';
   } 

   Sword.init.prototype =  Sword.prototype;
   // creating global alias to the object
   global.Sword = global.S$ = Sword;

}(window,jQuery));