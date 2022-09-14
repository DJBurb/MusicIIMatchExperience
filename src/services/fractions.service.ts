
import { all, create, Fraction }  from 'mathjs';
import { Fraction2 } from '~/models/fractionModels/fraction.model';
import { MultipleFractionProblem } from '~/models/fractionModels/fractionMultiplicationProblem.model';
import { BasicMatchProblem } from '../models/basicMathProblem.model';
import { MixedNumberImproperFractionProblem } from "../models/fractionModels/mixedNumberToImproperFractionProblem";
import { BasicAnswerKeyService } from './answerKey/basicAnswerKey.service';
import { FractionAnswerkeyService } from './answerKey/fractionAnswerKey.service';
import { LetterAnswerService } from './shared/letterAnswer.service';
import { HelperService } from './shared/helper.service';
import { FractionProblemConfig } from '~/models/fractionModels/fractionProblemConfig.model';
import { FractionProblemType } from '~/enums/fractionProblemType.enum';

export class FractionService
{
    letterAnswerService = new LetterAnswerService();
    helperService = new HelperService();
    math = create(all, {})
    constructor(private answerKeyService: BasicAnswerKeyService, private fractionAnswerKeyService: FractionAnswerkeyService){

    }

    getNumeratorProblem(): BasicMatchProblem{
        let question="What is the numerator of the following fraction?"
        let firstNumber = this.math.randomInt(0, 29);
        let secondNumber = this.math.randomInt(firstNumber, 30)
        while(secondNumber === firstNumber)
        {
            firstNumber = this.math.randomInt(0, 29);
            secondNumber = this.math.randomInt(firstNumber, 30)
        }


        let answers:number[] =new Array(4).fill(null);
        answers[this.math.randomInt(0,3)] = secondNumber;
        let answerKey = this.answerKeyService.getNumberAnswers(firstNumber,answers, 10);

        return {
           question: question,
           firstNumber: firstNumber,
           secondNumber: secondNumber,
           answer: firstNumber,
           answerChoices: answerKey.answers,
           letterAnswer: answerKey.letterAnswer
        };
    }

    getDenominatorProblem(): BasicMatchProblem{
        let question="What is the denominator of the following fraction?"
        let firstNumber = this.math.randomInt(0, 29);
        let secondNumber = this.math.randomInt(firstNumber, 30)
        while(secondNumber === firstNumber)
        {
            firstNumber = this.math.randomInt(0, 29);
            secondNumber = this.math.randomInt(firstNumber, 30)
        }


        let answers:number[] =new Array(4).fill(null);
        answers[this.math.randomInt(0,3)] = firstNumber;
        let answerKey = this.answerKeyService.getNumberAnswers(secondNumber,answers, 10);

        return {
           question: question,
           firstNumber: firstNumber,
           secondNumber: secondNumber,
           answer: secondNumber,
           answerChoices: answerKey.answers,
           letterAnswer: answerKey.letterAnswer
        };
    }

    getFractionProblem(fractionProblemConfig: FractionProblemConfig= new FractionProblemConfig(), fractionProblemType: FractionProblemType):MultipleFractionProblem{
        const fractions= this.helperService.getTwoRandomFractions(fractionProblemConfig);
        let problemTypeString ='';
        let answerFraction:Fraction={d: 0, n: 0, s: 1};
        if(fractionProblemType=== FractionProblemType.Add){
            answerFraction = this.math.add(
                this.math.fraction(fractions.firstFraction), 
                this.math.fraction(fractions.secondFraction)
                );
            problemTypeString = 'Add';
        }
        else
        if(fractionProblemType=== FractionProblemType.Substract){
            answerFraction = this.math.subtract(
                this.math.fraction(fractions.firstFraction), 
                this.math.fraction(fractions.secondFraction)
                );
                problemTypeString = 'Subtract';
        }
        else
        if(fractionProblemType=== FractionProblemType.Multiply){
            answerFraction = this.math.multiply(
                this.math.fraction(fractions.firstFraction), 
                this.math.fraction(fractions.secondFraction)
                ) as Fraction;
            problemTypeString = 'Multiply';
        }
        else
        if(fractionProblemType=== FractionProblemType.Divide){
            answerFraction = this.math.divide(
                this.math.fraction(fractions.firstFraction), 
                this.math.fraction(fractions.secondFraction)
                ) as Fraction;
            problemTypeString = 'Divide';
        }

        const preparedAnswerFraction = this.helperService.convertImproperFractionToMixedNumber(answerFraction.n, answerFraction.d);
        const finalAnswerFraction: Fraction2 = {
            wholeNumber: preparedAnswerFraction ? Number(preparedAnswerFraction[0]): null,
            numerator: preparedAnswerFraction ? Number(preparedAnswerFraction[1]) : null,
            denominator: preparedAnswerFraction ? Number(preparedAnswerFraction[2]): null,
            isNegative: answerFraction.s < 0
        }
        
        const preparedFirstFraction = this.helperService.convertImproperFractionToMixedNumber(Number(fractions.originalFirstFraction.numerator), Number(fractions.originalFirstFraction.denominator));
        const preparedSecondFraction = this.helperService.convertImproperFractionToMixedNumber(Number(fractions.originalSecondFraction.numerator), Number(fractions.originalSecondFraction.denominator));
        return{
            question: problemTypeString + ' the following fractions. Put the answer in simplest form.',
            firstFraction: {
                wholeNumber: preparedFirstFraction ? Number(preparedFirstFraction[0]):null,
                numerator: preparedFirstFraction ? Number(preparedFirstFraction[1]) : null,
                denominator: preparedFirstFraction ? Number(preparedFirstFraction[2]): null,
                isNegative: fractions.firstFraction.s < 0
            },
            secondFraction: {
                wholeNumber: preparedSecondFraction ? Number(preparedSecondFraction[0]):null,
                numerator: preparedSecondFraction ? Number(preparedSecondFraction[1]) : null,
                denominator: preparedSecondFraction ? Number(preparedSecondFraction[2]): null,
                isNegative: fractions.secondFraction.s < 0
            },
            answer: {
                denominator: finalAnswerFraction.denominator,
                numerator: finalAnswerFraction.numerator,
                isNegative: finalAnswerFraction.isNegative,
                wholeNumber: finalAnswerFraction.wholeNumber
            },
            answerChoices:this.fractionAnswerKeyService.getFractionAnswers(finalAnswerFraction)
        }
    }


    getImproperToMixedNumberProblem(): MixedNumberImproperFractionProblem{
        let improperNumerator = this.math.randomInt(1,100);
        let denominator = this.math.randomInt(1,improperNumerator+1);


        let dividend: number | null; 
        let wholeNumber: number|null=null;
        let answerNumerator : number|null = null;
        for (dividend = improperNumerator - 1; dividend > 1; dividend--) {
            if ((dividend % denominator) === 0) {
                answerNumerator = improperNumerator - dividend;
                wholeNumber = dividend / denominator;
                break;
            }
        }

        return {
            question: "Pick the mixed number for this improper fraction",
            wholeNumber: wholeNumber,
            numerator: answerNumerator,
            denominator: denominator,
            improperNumerator: improperNumerator,
            answerChoices: this.fractionAnswerKeyService.getMixedNumberAnswers(
                {
                    wholeNumber: wholeNumber,
                    numerator: answerNumerator,
                    denominator: denominator,
                    isNegative:false
                }
            )
        };
    }

    getMixedNumberToImproperFractionProblem(): MixedNumberImproperFractionProblem{
        const wholeNumber = this.math.randomInt(1,11);
        let numerator =this.math.randomInt(1, 10);
        let denominator = this.math.randomInt(numerator, 10)
        while(numerator === denominator){
             numerator =this.math.randomInt(1, 10);
             denominator = this.math.randomInt(numerator, 10);
        }

        const improperFractionNumerator = (wholeNumber * denominator) + numerator;
        return{
            question: "Pick the improper fraction for this mixed number",
            wholeNumber: wholeNumber,
            numerator: numerator,
            denominator: denominator,
            improperNumerator: improperFractionNumerator,
            answerChoices: this.fractionAnswerKeyService.getImproperFractionAnswers({numerator:improperFractionNumerator,denominator, wholeNumber: null, isNegative: false})
        }
        
    }
}


