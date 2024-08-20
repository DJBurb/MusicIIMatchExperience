import { ProblemSettings } from './problem-settings.model';

export class AdditionProblemSettings extends ProblemSettings {
  minAddend: number = 0;
  maxAddend: number = 10;
  twoDigitPlusOneDigit: boolean;
  isBaseTen: boolean= false;
}
