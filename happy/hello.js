let scoreStr = localStorage.getItem('score') ;
let score ;
resetScore(scoreStr) ;
function resetScore(scoreStr) {
  score =  scoreStr ? JSON.parse(scoreStr) :  {
    win: 0, 
    lost: 0,
    tie: 0,
};
score.displayScore = function () {
    return `matches won:${score.win}, lost:${score.lost} , tie${score.tie} ` 
}};
function generatecomputerchoice() {
    let randomnumber = Math.random() * 3 ; 
 if (randomnumber > 0 && randomnumber <= 1) {
    return ('BAT') ;
 } else if (randomnumber > 1 && randomnumber <=2 ) {
    return ('BOLL') ;
 } else {
    return ('STUMP') ;
 } 
}

    function getResult(usermove, computermove  ) {
if (usermove === 'BAT') {
    if (computermove === 'BALL') {
        score.win++;
       return  'user won' ;
    } else if (computermove === 'BAT') {
        score.tie++;
        return `It's a tie ` ;
    } else if (computermove === 'STUMP') {
        score.lost++;
        return  'computer has won' ;
    }
} else if (usermove === 'BALL') {
    if (computermove === 'BAT') {
        score.win++;
        return  'user won' ;
    } else if (computermove === 'BALL') {
        score.tie++;
        return dod = `It's a tie ` ;
    } else if (computermove === 'STUMP') {
       score.lost++;
        return  'computer has won' ;
    }
} else if (usermove === 'STUMP') {
    if (computermove === 'BAT') {
       score.win++;
        return  'user won' ;
    } else if (computermove === 'STUMP') {
        score.tie++;
        return `It's a tie ` ;
    } else if (computermove === 'BALL') {
        score.lost++;
        return  'computer has won' ; 
    }
      } }
     function showResult (usermove, computermove, resultMsg) {
       localStorage.setItem('score',JSON.stringify(score)) ;
        
       let pop = document.querySelector('.user-move') ;
        pop.innerHTML=(`YOU HAVE CHOSEN ${usermove} `) 
         
        let pop1 = document.querySelector('.computermove') ;
         pop1.innerHTML = (`COMPUTER CHOICE IS ${computermove}`) 
    
         let pop2 = document.querySelector('.result') ; 
         pop2.innerHTML = (`${resultMsg}`)
         
         let pop3 = document.querySelector('.scorecard') ;
       pop3.innerHTML = (`${score.displayScore()}  `) ;
        } 