function randomText(){

var QuoteOutput =["“You only live once, but if you do it right, once is enough.”" ,"“Be the change that you wish to see in the world.”","“In three words I can sum up everything I've learned about life: it goes on.”" , "“If you tell the truth, you don't have to remember anything.”" , "“Always forgive your enemies; nothing annoys them so much.”" ]
var AuthorOutput =["― Albert Einstein" , "― Frank Zappa" , "― Marcus Tullius Cicero" , "― Mae West" , "― Mahatma Gandhi" ]


var num = Math.floor(Math.random() * QuoteOutput.length)
var num = Math.floor(Math.random() * AuthorOutput.length)


document.getElementById("quoteOutput").innerHTML=QuoteOutput[num];
document.getElementById("authorOutput").innerHTML=AuthorOutput[num];
console.log(QuoteOutput[num]);
console.log(AuthorOutput[num])
}




//*************another solution************ */


// function randomText(){

// var QuoteOutput =[
//     {
//     'Quote' :'“Be yourself; everyone else is already taken.”' ,
//     'Author': '― Oscar Wilde'
//     }
// ,
//     {
//         'Quote' : '“So many books, so little time.” ',
//         'Author':'― Frank Zappa'
//     }

//     ,
//     {
//         'Quote' :'“A room without books is like a body without a soul.”' ,
//         'Author':'― Marcus Tullius Cicero'
//     }
//     ,
//     {
//     'Quote' :'“You only live once, but if you do it right, once is enough.”' ,
//     'Author':'― Mae West'
//     }
//     ,
//     {
//     'Quote' : '“Be the change that you wish to see in the world.”',
//     'Author': '― Mahatma Gandhi'
//     }
//     ,
//     {
//     'Quote' : '“We accept the love we think we deserve.”',
//     'Author':'― Stephen Chbosky, The Perks of Being a Wallflower'
//         }
// ]


// var num = Math.floor(Math.random() * QuoteOutput.length)




// document.getElementById("quoteOutput").innerHTML=QuoteOutput[num].Quote;
// document.getElementById("authorOutput").innerHTML=QuoteOutput[num].Author;
// console.log(QuoteOutput[num]);

// }

