export class LetterAnswerService{
        
    getLetterAnswer(correctAnswerIndex:number):string{
        if(correctAnswerIndex === 0){
            return 'A'
        }
        if(correctAnswerIndex === 1){
            return 'B'
        }
        if(correctAnswerIndex === 2){
            return 'C'
        }
        if(correctAnswerIndex === 3){
            return 'D'
        }
        return ''
    }
}