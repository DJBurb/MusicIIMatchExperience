import { MathTypes } from "../enums/math-type.enum";

export class ProblemSettings{
  level: number;
  allowNegatives: boolean;
  numberOfProblems: number= 10;
  songFile: string;
  mathType: number = MathTypes.Addition;
}
