const rajib = {name: 'Rajib', totalScore: 45, schoolGrade: 30, isFarmer: true}

function calculateFinalScore(rajib) {

    let finalScore = 0;

    const totalScore = 45;
    const schoolGrade = 30;
    const isFarmer = true;

    const totalBoth = totalScore + schoolGrade;


    if (isFarmer === true) {
        finalScore = finalScore + 20;
    }

    const totalNum = totalBoth + finalScore;
    if (totalNum >= 80) {
        return 'You are eligble to get admission'
    }

    else {
        return 'You are not elible :( better luck next time'
    }
}

const result = calculateFinalScore(80);
console.log (rajib.isFarmer);