
import { all, create, Fraction }  from 'mathjs';
import { Fraction2 } from '../models/fractionModels/fraction.model';
import { BasicAnswerKeyService } from './answerKey/basicAnswerKey.service';
import { FractionAnswerkeyService } from './answerKey/fractionAnswerKey.service';
import { LetterAnswerService } from './shared/letterAnswer.service';
import { HelperService } from './shared/helper.service';
import { FractionProblemConfig } from '../models/fractionModels/fractionProblemConfig.model';
import { FractionProblemType } from '../enums/fractionProblemType.enum';
import { Injectable } from '@angular/core';
import { QuestionAnswerViewModel } from '../models/questionAnswerViewModel.model';



@Injectable()
export class FractionService
{
    letterAnswerService = new LetterAnswerService();
    helperService = new HelperService();
    math = create(all, {})
    constructor(private answerKeyService: BasicAnswerKeyService, private fractionAnswerKeyService: FractionAnswerkeyService){

    }

    getFractionQuestion(fractionProblemConfig: FractionProblemConfig): QuestionAnswerViewModel | undefined{
      const questionDecision =  this.helperService.getRandomInt(1,9);
      switch(questionDecision){
          case 1:{
              return this.getNumeratorProblem();
          }
          case 2:{
              return this.getDenominatorProblem();
          }
          case 3:{
              return this.getFractionProblem(fractionProblemConfig, FractionProblemType.Add);
          }
          case 4:{
              return this.getFractionProblem(fractionProblemConfig, FractionProblemType.Substract);
          }
          case 5:{
              return this.getFractionProblem(fractionProblemConfig, FractionProblemType.Multiply);
          }
          case 6:{
              return this.getFractionProblem(fractionProblemConfig, FractionProblemType.Divide);
          }
          case 7:{
              return this.getImproperToMixedNumberProblem();
          }
          case 8:{
              return this.getMixedNumberToImproperFractionProblem();
          }
      }
      return undefined;
    }

    getNumeratorProblem(): QuestionAnswerViewModel{
        let question="What is the numerator of the following fraction?"
        let firstNumber = this.math.randomInt(1, 29);
        let secondNumber = this.math.randomInt(firstNumber, 30)
        while(secondNumber === firstNumber)
        {
            firstNumber = this.math.randomInt(1, 29);
            secondNumber = this.math.randomInt(firstNumber, 30)
        }


        let answers:number[] =new Array(4).fill(null);
        answers[this.math.randomInt(0,3)] = secondNumber;
        let answerKey = this.answerKeyService.getNumberAnswers(firstNumber,answers, 10);

        return {
          question: question,
          answer: firstNumber.toString(),
          answerChoices: answerKey.answers.map((a:number)=>a.toString()),
          letterAnswer: answerKey.letterAnswer,
          problem: firstNumber+"/"+secondNumber
        }
    }

    getDenominatorProblem(): QuestionAnswerViewModel{
        let question="What is the denominator of the following fraction?"
        let firstNumber = this.math.randomInt(1, 29);
        let secondNumber = this.math.randomInt(firstNumber, 30)
        while(secondNumber === firstNumber)
        {
            firstNumber = this.math.randomInt(1, 29);
            secondNumber = this.math.randomInt(firstNumber, 30)
        }


        let answers:number[] =new Array(4).fill(null);
        answers[this.math.randomInt(0,3)] = firstNumber;
        let answerKey = this.answerKeyService.getNumberAnswers(secondNumber,answers, 10);

        return {
          question: question,
          answer: secondNumber.toString(),
          answerChoices: answerKey.answers.map((a:number)=>a.toString()),
          letterAnswer: answerKey.letterAnswer,
          problem: firstNumber+"/"+secondNumber
        }
    }

    getFractionProblem(fractionProblemConfig: FractionProblemConfig= new FractionProblemConfig(), fractionProblemType: FractionProblemType):QuestionAnswerViewModel{
        let fractions= this.helperService.getTwoRandomFractions(fractionProblemConfig);

        while(Number(fractions.firstFraction.n) % Number(fractions.firstFraction.d) === 0
              || Number(fractions.secondFraction.n) % Number(fractions.secondFraction.d) === 0){
          fractions = this.helperService.getTwoRandomFractions(fractionProblemConfig);
        }

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

        let firstFractionString="";
        if(fractions.firstFraction.s<0){
          firstFractionString="-"
        }
        if(preparedFirstFraction && preparedFirstFraction[0]!== null && preparedFirstFraction[0] > 0){
          firstFractionString= firstFractionString+preparedFirstFraction[0]+" ";
        }
        if(preparedFirstFraction && !(preparedFirstFraction[1]===0 && preparedFirstFraction[2]===0)){
          firstFractionString = firstFractionString+preparedFirstFraction[1]+"/"+preparedFirstFraction[2];
        }

        let operationSign =  "";
        switch(problemTypeString){
          case "Add":{
            operationSign="  +  "
            break;
          }
          case "Subtract":{
            operationSign="  -  "
            break;
          }
          case "Multiply":{
            operationSign="  x  "
            break;
          }
          case "Divide":{
            operationSign="  	÷  "
            break;
          }
        }

        let secondFractionString="";
        if(fractions.secondFraction.s<0){
          secondFractionString="-"
        }
        if(preparedSecondFraction && preparedSecondFraction[0]!== null && preparedSecondFraction[0] > 0){
          secondFractionString= secondFractionString+preparedSecondFraction[0]+" ";
        }
        if(preparedSecondFraction && !(preparedSecondFraction[1]===0 && preparedSecondFraction[2]===0)){

          secondFractionString = secondFractionString+preparedSecondFraction[1]+"/"+preparedSecondFraction[2];
        }

        let answerString="";
        if(finalAnswerFraction.isNegative){
          answerString="-"
        }
        if(finalAnswerFraction.wholeNumber && finalAnswerFraction.wholeNumber > 0){
          answerString= answerString+finalAnswerFraction.wholeNumber+" ";
        }

        answerString = answerString+finalAnswerFraction.numerator+"/"+finalAnswerFraction.denominator;

        let answerKey = this.fractionAnswerKeyService.getFractionAnswers(finalAnswerFraction);
        let answerChoices = answerKey.answers.map((a:Fraction2)=>{
          let choice="";
          if(a.isNegative){
            choice="-"
          }
          if(a.wholeNumber && a.wholeNumber > 0){
            choice= choice+a.wholeNumber+" ";
          }
          if(!(a.numerator===0 && a.denominator === 0)){
            choice = choice+a.numerator+"/"+a.denominator;
          }

          return choice;
        })


        return{
          question: problemTypeString + ' the following fractions. Put the answer in simplest form.',
          problem: firstFractionString + operationSign + secondFractionString,
          answer: answerString,
          letterAnswer: answerKey.letterAnswer,
          answerChoices: answerChoices
        }
    }



    getImproperToMixedNumberProblem(): QuestionAnswerViewModel{


        let improperNumerator = this.math.randomInt(2,100);
        let numerator = improperNumerator;
        let denominator = this.math.randomInt(1,numerator-1);
        let i = (numerator/denominator) >> 0
        numerator -= i * denominator;
        let mixed = [i, numerator, denominator];

        let answerKey =this.fractionAnswerKeyService.getMixedNumberAnswers(
          {
              wholeNumber: mixed[0],
              numerator: mixed[1],
              denominator: mixed[2],
              isNegative:false
          });

        let answerChoices = answerKey.answers.map((a:Fraction2)=>{
          let choice="";
          if(a.isNegative){
            choice="-"
          }
          if(a.wholeNumber && a.wholeNumber > 0){
            choice= choice+a.wholeNumber+" ";
          }

          if(!(a.numerator===0 && a.denominator === 0)){
            choice = choice+a.numerator+"/"+a.denominator;
          }
          return choice;
        });
        return {
          question: "Pick the mixed number for this improper fraction",
          answer: mixed[0] + " "+ mixed[1]+"/"+mixed[2],
          answerChoices: answerChoices,
          letterAnswer: answerKey.letterAnswer,
          problem: improperNumerator +"/"+ mixed[2]
        }
    }

    getMixedNumberToImproperFractionProblem(): QuestionAnswerViewModel{
        const wholeNumber = this.math.randomInt(1,11);
        let numerator =this.math.randomInt(1, 10);
        let denominator = this.math.randomInt(numerator, 10)
        while(numerator === denominator){
             numerator =this.math.randomInt(1, 10);
             denominator = this.math.randomInt(numerator, 10);
        }

        const improperFractionNumerator = (wholeNumber * denominator) + numerator;
        let answerKey = this.fractionAnswerKeyService.getImproperFractionAnswers({numerator:improperFractionNumerator,denominator, wholeNumber: null, isNegative: false});
        let answerChoices = answerKey.answers.map((a:Fraction2)=>{
          let choice="";
          if(a.isNegative){
            choice="-"
          }
          if(a.wholeNumber && a.wholeNumber > 0){
            choice= choice+a.wholeNumber+" ";
          }

          if(!(a.numerator===0 && a.denominator === 0)){
            choice = choice+a.numerator+"/"+a.denominator;
          }
          return choice;
        })

        return {
          question: "Pick the improper fraction for this mixed number",
          answer: improperFractionNumerator+"/"+denominator,
          problem: wholeNumber + " "+ numerator + "/"+ denominator,
          answerChoices: answerChoices,
          letterAnswer: answerKey.letterAnswer
        }

    }
}


