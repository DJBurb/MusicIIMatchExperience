import { all, create } from "mathjs";
import { NumberAnswerKey } from "~/models/answerKey.model";
import { HelperService } from "../shared/helper.service";
import { LetterAnswerService } from "../shared/letterAnswer.service";

export class BasicAnswerKeyService
{
    letterAnswerService = new LetterAnswerService();
    helperService = new HelperService();

    math = create(all, {});
    getNumberAnswers(correctAnswer: number, currentAnswers: number[], maxAnswerChoice:number): NumberAnswerKey{
          let correctAnswerIndex = this.math.randomInt(0,4);
          while(currentAnswers[correctAnswerIndex]!== null){
            correctAnswerIndex= this.math.randomInt(0,3);
          }
          currentAnswers[correctAnswerIndex]=correctAnswer;
          let tempCurrentAnswers = currentAnswers;
          currentAnswers = currentAnswers.map((a:number)=>{
            if(!a){
                while(tempCurrentAnswers.includes(a)){
                    a = this.helperService.getRandomAnswerNumber(correctAnswer, maxAnswerChoice);
                }
                tempCurrentAnswers.push(a);
                return a;

            }
            else{
                return a;
            }
          });

          

          return {
            answers: currentAnswers,
            letterAnswer: this.letterAnswerService.getLetterAnswer(correctAnswerIndex) 
          };
    }


}