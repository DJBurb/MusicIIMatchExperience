import { Injectable } from '@angular/core';
import { Problem } from '../models/problem.model';
import { random } from 'mathjs';

@Injectable({
  providedIn: 'root'
})
export class CreateProblemService {

  constructor() { }

  get2WholeNumberDivisionProblem(lowestNumber: number, highestNumber: number): Problem {
    let firstNumber = this.getRandomNumber(lowestNumber, highestNumber);
    let secondNumber = this.getRandomNumber(lowestNumber, highestNumber);
    let answer = 0;

    if(firstNumber === 0 || secondNumber === 0){
       answer = 0;
       firstNumber= 0;
       secondNumber = this.getRandomNumber(1, highestNumber);
    }
    else{
      answer = firstNumber * secondNumber;

      let temp = firstNumber;

      firstNumber= answer;
      let temp1 =secondNumber
      secondNumber = temp;
      answer= temp1;
    }


    const answerChoices = answer > 1 ?
      this.getAnswerChoices(lowestNumber, answer * 2, answer) :
      this.getAnswerChoices(lowestNumber, (answer + (this.getRandomNumber(2, highestNumber)))* 2, answer);
    let firstChoice= answerChoices[0];
    let secondChoice= answerChoices[1];
    let thirdChoice= answerChoices[2];
    let fourthChoice= answerChoices[3];

    const correctAnswerIndex =this.getRandomNumber(1,4);
    if(correctAnswerIndex==1){
      firstChoice=answer;
    }
    else
    if(correctAnswerIndex==2){
      secondChoice=answer;
    }
    else
    if(correctAnswerIndex==3){
      thirdChoice = answer;
    }
    else{
      fourthChoice= answer;
    }

    return {
      problemVariables: [firstNumber, secondNumber],
      answer: answer,
      firstChoice: firstChoice,
      secondChoice: secondChoice,
      thirdChoice: thirdChoice,
      fourthChoice: fourthChoice,
      correctAnswerIndex: correctAnswerIndex
    }
  }


  get2WholeNumberMultiplicationProblem(lowestNumber: number, highestNumber: number): Problem {
    const firstNumber = this.getRandomNumber(lowestNumber, highestNumber);
    const secondNumber = this.getRandomNumber(lowestNumber, highestNumber);

    const answer = firstNumber * secondNumber;

    const answerChoices = answer > 1 ?
      this.getAnswerChoices(lowestNumber, answer * 2, answer) :
      this.getAnswerChoices(lowestNumber, (answer + (this.getRandomNumber(2, highestNumber)))* 2, answer);
    let firstChoice= answerChoices[0];
    let secondChoice= answerChoices[1];
    let thirdChoice= answerChoices[2];
    let fourthChoice= answerChoices[3];

    const correctAnswerIndex =this.getRandomNumber(1,4);
    if(correctAnswerIndex==1){
      firstChoice=answer;
    }
    else
    if(correctAnswerIndex==2){
      secondChoice=answer;
    }
    else
    if(correctAnswerIndex==3){
      thirdChoice = answer;
    }
    else{
      fourthChoice= answer;
    }

    return {
      problemVariables: [firstNumber, secondNumber],
      answer: answer,
      firstChoice: firstChoice,
      secondChoice: secondChoice,
      thirdChoice: thirdChoice,
      fourthChoice: fourthChoice,
      correctAnswerIndex: correctAnswerIndex
    }
  }

  get2WholeNumberAdditionProblem(lowestNumber:number, highestNumber: number): Problem{

    const firstNumber = this.getRandomNumber(lowestNumber, highestNumber);
    const secondNumber = this.getRandomNumber(lowestNumber, highestNumber);

    const answer = firstNumber+secondNumber;

    const answerChoices = answer > 1 ?
      this.getAnswerChoices(lowestNumber, answer * 2, answer) :
      this.getAnswerChoices(lowestNumber, (answer + (this.getRandomNumber(2, highestNumber)))* 2, answer);
    let firstChoice= answerChoices[0];
    let secondChoice= answerChoices[1];
    let thirdChoice= answerChoices[2];
    let fourthChoice= answerChoices[3];

    const correctAnswerIndex =this.getRandomNumber(1,4);
    if(correctAnswerIndex==1){
      firstChoice=answer;
    }
    else
    if(correctAnswerIndex==2){
      secondChoice=answer;
    }
    else
    if(correctAnswerIndex==3){
      thirdChoice = answer;
    }
    else{
      fourthChoice= answer;
    }

    return {
      problemVariables: [firstNumber, secondNumber],
      answer: answer,
      firstChoice: firstChoice,
      secondChoice: secondChoice,
      thirdChoice: thirdChoice,
      fourthChoice: fourthChoice,
      correctAnswerIndex: correctAnswerIndex
    }
  }

  get2WholeNumberSubtractionProblem(lowestNumber:number, highestNumber: number): Problem{

    const firstNumber = this.getRandomNumber(lowestNumber, highestNumber);
    const secondNumber = this.getRandomNumber(lowestNumber, highestNumber);

    const answer = firstNumber > secondNumber? firstNumber-secondNumber : secondNumber - firstNumber;

    const answerChoices = answer > 1 ?
      this.getAnswerChoices(lowestNumber, answer * 2, answer) :
      this.getAnswerChoices(lowestNumber, (answer + (this.getRandomNumber(2, highestNumber)))* 2, answer);

    let firstChoice= answerChoices[0];
    let secondChoice= answerChoices[1];
    let thirdChoice= answerChoices[2];
    let fourthChoice= answerChoices[3];

    const correctAnswerIndex =this.getRandomNumber(1,4);
    if(correctAnswerIndex==1){
      firstChoice=answer;
    }
    else
    if(correctAnswerIndex==2){
      secondChoice=answer;
    }
    else
    if(correctAnswerIndex==3){
      thirdChoice = answer;
    }
    else{
      fourthChoice= answer;
    }

    return {
      problemVariables: firstNumber> secondNumber? [firstNumber, secondNumber]:[secondNumber, firstNumber],
      answer: answer,
      firstChoice: firstChoice,
      secondChoice: secondChoice,
      thirdChoice: thirdChoice,
      fourthChoice: fourthChoice,
      correctAnswerIndex: correctAnswerIndex
    }
  }



  getAnswerChoices(min: number, max: number, correctAnswer: number): number[] {

    const numbers: number[] = [];

    let availableNumbers: number[]=[];

    for (let i = min; i <= max; i++) {
      if (i !== correctAnswer) {
        availableNumbers.push(i);
      }
    }

    for (let i = 0; i < 4; i++) {
      const randomIndex = this.getRandomNumber(0, availableNumbers.length-1);
      const selectedNumber = availableNumbers[randomIndex];
      availableNumbers= availableNumbers.filter(a=>a!==selectedNumber);
      numbers.push(selectedNumber);
    }

    return numbers;
  }

  private getRandomNumber(min: number, max: number): number {
    const range = max - min + 1;
    const randomNumber = Math.floor(Math.random() * range) + min;
    return randomNumber;
  }

}
