import { Injectable } from '@angular/core';
import { MathProblem } from '../models/math-problem.model';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() {

   }
  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // generateAdditionProblems(numProblems: number, rangeMin: number, rangeMax: number):MathProblem[] {
  //   const problems: MathProblem[]=[];

  //   for (let i = 0; i < numProblems; i++) {
  //     const num1 = this.getRandomInt(rangeMin, rangeMax);
  //     const num2 = this.getRandomInt(rangeMin, rangeMax);
  //     const correctAnswer = num1 + num2;

  //     const answers = new Set<number>();
  //     answers.add(correctAnswer);

  //     while (answers.size < 4) {
  //       const wrongAnswer = this.getRandomInt(rangeMin, rangeMax) + this.getRandomInt(rangeMin, rangeMax);
  //       if (wrongAnswer !== correctAnswer) {
  //         answers.add(wrongAnswer);
  //       }
  //     }

  //     const answerArray = Array.from(answers);
  //     for (let j = answerArray.length - 1; j > 0; j--) {
  //       const k = Math.floor(Math.random() * (j + 1));
  //       [answerArray[j], answerArray[k]] = [answerArray[k], answerArray[j]];
  //     }

  //     problems.push({
  //       problem: `${num1} + ${num2}`,
  //       choices: answerArray,
  //       correctAnswer: correctAnswer
  //     });
  //   }

  //   return problems;
  // }

  generateAdditionProblems(numProblems: number, rangeMin: number, rangeMax: number, twoDigitPlusOneDigit: boolean): MathProblem[] {
    const problems: MathProblem[] = [];

    for (let i = 0; i < numProblems; i++) {
      let num1: number;
      let num2: number;

      if (twoDigitPlusOneDigit) {
        // Ensure one digit is single (0-9) and the other is double (10-99 or adjusted by rangeMax)
        num1 = this.getRandomInt(0, 9);
        num2 = this.getRandomInt(Math.max(10, rangeMin), rangeMax);

        // Randomly swap to ensure num1 or num2 can be the single digit or double digit number
        if (Math.random() < 0.5) {
          [num1, num2] = [num2, num1];
        }
      } else {
        // Generate both numbers within the given range
        num1 = this.getRandomInt(rangeMin, rangeMax);
        num2 = this.getRandomInt(rangeMin, rangeMax);
      }

      const correctAnswer = num1 + num2;

      const answers = new Set<number>();
      answers.add(correctAnswer);

      while (answers.size < 4) {
        const wrongAnswer = this.getRandomInt(rangeMin, rangeMax) + this.getRandomInt(rangeMin, rangeMax);
        if (wrongAnswer !== correctAnswer) {
          answers.add(wrongAnswer);
        }
      }

      const answerArray = Array.from(answers);
      // Shuffle the answerArray using Fisher-Yates algorithm
      for (let j = answerArray.length - 1; j > 0; j--) {
        const k = Math.floor(Math.random() * (j + 1));
        [answerArray[j], answerArray[k]] = [answerArray[k], answerArray[j]];
      }

      problems.push({
        problem: `${num1} + ${num2}`,
        choices: answerArray,
        correctAnswer: correctAnswer
      });
    }

    return problems;
  }

  generateSubtractionProblems(numProblems: number, rangeMin: number, rangeMax: number, allowNegative: boolean = false): MathProblem[] {
    const problems: MathProblem[] = [];

    for (let i = 0; i < numProblems; i++) {
      let num1 = this.getRandomInt(rangeMin, rangeMax);
      let num2 = this.getRandomInt(rangeMin, rangeMax);

      if (!allowNegative && num1 < num2) {
        [num1, num2] = [num2, num1];
      }

      const correctAnswer = num1 - num2;

      const answers = new Set<number>();
      answers.add(correctAnswer);

      while (answers.size < 4) {
        let wrongAnswer = this.getRandomInt(rangeMin, rangeMax) - this.getRandomInt(rangeMin, rangeMax);
        if (!allowNegative && wrongAnswer < 0) {
          wrongAnswer = Math.abs(wrongAnswer);
        }
        if (wrongAnswer !== correctAnswer) {
          answers.add(wrongAnswer);
        }
      }

      const answerArray = Array.from(answers);
      for (let j = answerArray.length - 1; j > 0; j--) {
        const k = Math.floor(Math.random() * (j + 1));
        [answerArray[j], answerArray[k]] = [answerArray[k], answerArray[j]];
      }

      problems.push({
        problem: `${num1} - ${num2}`,
        choices: answerArray,
        correctAnswer: correctAnswer
      });
    }

    return problems;
  }
}
