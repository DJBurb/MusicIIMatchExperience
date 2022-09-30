
import { all, create } from 'mathjs';
import { Fraction2 } from '../../models/fractionModels/fraction.model';
import { HelperService } from '../shared/helper.service';
import { FractionAnswerKey } from '../../models/answerKey.model';
import { LetterAnswerService } from '../shared/letterAnswer.service';
import { Injectable } from '@angular/core';

@Injectable()
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


        let tempAnswerKeyArray: Number[]=[0,0,0,0]

        let arrayCount = 0

        while(arrayCount<4){

            let answerChoiceDecimal = Number(this.math.random(0.1,.9).toFixed(1));
            if(tempAnswerKeyArray.includes(answerChoiceDecimal)){
              continue;
            }

            tempAnswerKeyArray[arrayCount]=answerChoiceDecimal;

            arrayCount++;

         }
         arrayCount=0;
         while(arrayCount < 4){

          const possibleAnswer = this.math.fraction(Number(tempAnswerKeyArray[arrayCount]));

          const useNegative =  (this.math.randomInt(0,10) % 2 === 0) && correctAnswer.isNegative? true : false
          answerKeyArray[arrayCount]= {denominator: possibleAnswer.d,
                                       numerator: possibleAnswer.n,
                                       wholeNumber:answerKeyArray[correctAnswerIndex].wholeNumber && Number(answerKeyArray[correctAnswerIndex].wholeNumber)>0 ?
                                       Number(answerKeyArray[correctAnswerIndex].wholeNumber) + this.math.randomInt(0,5): null,
                                       isNegative: useNegative
                                      }
          arrayCount++;
         }

         answerKeyArray[correctAnswerIndex] = {denominator: correctAnswer.denominator,
          numerator: correctAnswer.numerator,
          wholeNumber: correctAnswer.wholeNumber,
          isNegative: correctAnswer.isNegative
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
            if(arrayCount === correctAnswerIndex){
              arrayCount++;
              continue;
            }
            if(!answersArray[arrayCount].denominator){
                    if(correctAnswer.denominator){
                      console.log('d');
                        let tempDenominator = correctAnswer.denominator;
                        let tempNumerator = this.math.randomInt(1, tempDenominator);


                        while(tempNumerator === tempDenominator){
                          tempNumerator = this.math.randomInt(1, tempDenominator);
                        }
                        const reducedFraction= this.math.fraction(tempNumerator +"/"+tempDenominator);
                        answersArray[arrayCount].denominator= reducedFraction.d;
                        answersArray[arrayCount].numerator = reducedFraction.n;
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
