
import { all, create } from 'mathjs';
import { Fraction2 } from '../../models/fractionModels/fraction.model';
import { HelperService } from '../shared/helper.service';
import { FractionAnswerKey } from '~/models/answerKey.model';
import { LetterAnswerService } from '../shared/letterAnswer.service';
export class FractionAnswerkeyService{

    math = create(all, {});
    helperService = new HelperService();
    letterAnswerService = new LetterAnswerService();
    
    getImproperFractionAnswers(correctAnswer:Fraction2): FractionAnswerKey{
        let answersArray: Fraction2[]= [{
            numerator: null,
            denominator: null,
            wholeNumber: null,
            isNegative: false
        },{
            numerator: null,
            denominator: null,
            wholeNumber: null,
            isNegative: false
        },{
            numerator: null,
            denominator: null,
            wholeNumber: null,
            isNegative: false
        },{
            numerator: null,
            denominator: null,
            wholeNumber: null,
            isNegative: false
        }];
        let correctAnswerIndex = this.math.randomInt(0,4);
        answersArray[correctAnswerIndex]=correctAnswer;

        let arrayCount = 0;
        while (arrayCount < 4){
            if(arrayCount === correctAnswerIndex){
                arrayCount++;
                continue;
            }
            if(!answersArray[arrayCount].denominator){
                let useSameDenominatorAsAnswer = this.helperService.getLogicDecision();
                if(useSameDenominatorAsAnswer === 1){
                    answersArray[arrayCount].denominator= correctAnswer.denominator;
                }
                else
                {
                    if(correctAnswer.denominator!==null){
                        answersArray[arrayCount].denominator = this.helperService.getRandomAnswerNumber(correctAnswer.denominator, correctAnswer.denominator+11);
                    }
                }
            }
            if(!answersArray[arrayCount].numerator){
                const thisDenominator= answersArray[arrayCount].denominator;
                if(thisDenominator){
                    answersArray[arrayCount].numerator = this.math.randomInt(
                        thisDenominator+1, thisDenominator + 20)
                }

            }
            arrayCount++;
        }
        return {
            answers: answersArray,
            letterAnswer: this.letterAnswerService.getLetterAnswer(correctAnswerIndex)
        };
    }

    getFractionAnswers(correctAnswer:Fraction2): FractionAnswerKey{
        
        let answerKeyArray: Fraction2[]= [{numerator: null, denominator: null, wholeNumber: null, isNegative:false},
            {numerator: null, denominator: null, wholeNumber: null, isNegative:false},
            {numerator: null, denominator: null, wholeNumber: null, isNegative:false},
            {numerator: null, denominator: null, wholeNumber: null, isNegative:false}];

        const correctAnswerIndex = this.math.randomInt(0,4);

        
        answerKeyArray[correctAnswerIndex] = {denominator: correctAnswer.denominator,
                                              numerator: correctAnswer.numerator,
                                              wholeNumber: correctAnswer.wholeNumber,
                                              isNegative: correctAnswer.isNegative
                                              }
        
        let tempAnswerKeyArray: Fraction2[]=[]
        tempAnswerKeyArray.push(answerKeyArray[correctAnswerIndex]);

        let arrayCount = 0

        while(arrayCount<4){
            if(arrayCount === correctAnswerIndex){
                arrayCount++;
                continue;
            }
            let answerChoiceDecimal = Number(this.math.random(0,1).toFixed(1));
            const useNegative =  (this.math.randomInt(0,10) % 2 === 0) && correctAnswer.isNegative? true : false
            const answerChoiceFraction = this.math.fraction(answerChoiceDecimal);

            const alreadyExists= tempAnswerKeyArray.includes({
                denominator: answerChoiceFraction.d === answerChoiceFraction.n ? 0 : answerChoiceFraction.d,
                numerator: answerChoiceFraction.d === answerChoiceFraction.n ? 0 :answerChoiceFraction.n,
                wholeNumber: this.helperService.getFractionWholeNumber(answerChoiceFraction.n, answerChoiceFraction.d),
                isNegative: useNegative
            })
            if(alreadyExists){
                continue;
            }
            answerKeyArray[arrayCount] = {
                denominator: answerChoiceFraction.d === answerChoiceFraction.n ? 0 : answerChoiceFraction.d,
                numerator: answerChoiceFraction.d === answerChoiceFraction.n ? 0 :answerChoiceFraction.n,
                wholeNumber: this.helperService.getFractionWholeNumber(answerChoiceFraction.n, answerChoiceFraction.d),
                isNegative: useNegative
            }
            

            if(answerChoiceFraction.d === answerChoiceFraction.n){
                if(answerKeyArray[arrayCount].wholeNumber!== null){
                    answerKeyArray[arrayCount].wholeNumber= Number(answerKeyArray[arrayCount].wholeNumber)+1;
                }
                else{
                    answerKeyArray[arrayCount].wholeNumber=1;
                }
            }
            tempAnswerKeyArray.push(answerKeyArray[arrayCount]);

            arrayCount++;

         }
         return{
            answers: answerKeyArray,
            letterAnswer: this.letterAnswerService.getLetterAnswer(correctAnswerIndex)
         }
    }

    getMixedNumberAnswers(correctAnswer: Fraction2): FractionAnswerKey {
        let answersArray: Fraction2[]= [{
            numerator: null,
            denominator: null,
            wholeNumber: null,
            isNegative: false
        },{
            numerator: null,
            denominator: null,
            wholeNumber: null,
            isNegative: false
        },{
            numerator: null,
            denominator: null,
            wholeNumber: null,
            isNegative: false
        },{
            numerator: null,
            denominator: null,
            wholeNumber: null,
            isNegative: false
        }];

        let correctAnswerIndex = this.math.randomInt(0,4);
        answersArray[correctAnswerIndex]=correctAnswer;
        let arrayCount = 0;
        while (arrayCount < 4){
            if(!answersArray[arrayCount].denominator){
                    if(correctAnswer.denominator){
                        let tempDenominator = correctAnswer.denominator;
                        let tempNumerator = this.math.randomInt(1, tempDenominator);
                        let answerAlreadyExists=answersArray.filter((f:Fraction2)=>f.denominator==tempDenominator 
                        && f.numerator==tempNumerator);
                        while(answerAlreadyExists.length>0){

                            tempDenominator = correctAnswer.denominator;
                            tempNumerator = this.math.randomInt(1, tempDenominator);
                            answerAlreadyExists=answersArray.filter((f:Fraction2)=>f.denominator==tempDenominator
                            && f.numerator==tempNumerator);     
                        }

                        answersArray[arrayCount].denominator= tempDenominator;
                        answersArray[arrayCount].numerator = tempNumerator;
                        
                    }
                    answersArray[arrayCount].wholeNumber = this.math.randomInt(1, 11);
            }
            arrayCount++;
        }
        return {
            answers: answersArray,
            letterAnswer: this.letterAnswerService.getLetterAnswer(correctAnswerIndex)
        };
    }
}