import { create, all, Fraction, transposeDependencies } from 'mathjs';
import { MixedNumber } from "~/models/fractionModels/mixedNumber.model";
import {rando} from '@nastyox/rando.js';
import { Fraction2 } from '../../models/fractionModels/fraction.model';
import { MixedNumberImproperFractionProblem } from '../../models/fractionModels/mixedNumberToImproperFractionProblem';
import { FractionProblemConfig } from '../../models/fractionModels/fractionProblemConfig.model';
import { GeneratedFraction } from '~/models/fractionModels/generatedFraction.model';

export class HelperService{
    math = create(all, {});
    
    /// This is a  randomized decision maker.. it will send back a random 0 or 1, to 
    /// be used to make random decision in logic
    getLogicDecision(): number{
        return rando(0,10) % 2 === 0 ? 0 : 1;
    }

    // gets a random number that is not the seed number and lower than the maxAnswerChoice number 
    getRandomAnswerNumber(seed: number, maxAnswerChoice: number=10): number{
        let choiceDirection = this.getLogicDecision();
        if(choiceDirection===0){
            return seed - rando(0,seed);
        }
        else{
            return seed + rando(seed, maxAnswerChoice)
        }
    }

    convertImproperFractionToMixedNumber(numerator: number, denominator: number){
        if(denominator===0){
            return null;
        }
        let i = parseInt((numerator / denominator).toString());
        if(numerator % denominator === 0){
            return [i, 0, 0];
        }
        numerator -= i * denominator;
        return [i, numerator, denominator]; 
    }

    getTwoRandomFractions(fractionProblemConfig: FractionProblemConfig):GeneratedFraction{

        let firstFraction: Fraction2= {numerator: null, denominator: null, wholeNumber: null, isNegative: false};
        let secondFraction: Fraction2= {numerator: null, denominator: null, wholeNumber: null, isNegative: false};

        firstFraction.denominator = rando(1, fractionProblemConfig.maxDenominator);
        secondFraction.denominator = fractionProblemConfig.useSameDenominator ? 
                                     firstFraction.denominator : 
                                     secondFraction.denominator = rando(1, fractionProblemConfig.maxDenominator);
        
        firstFraction.numerator = rando(0, fractionProblemConfig.maxNumerator);
        secondFraction.numerator = rando(0, fractionProblemConfig.maxNumerator);

        if(!fractionProblemConfig.allowNegatives){
            const comparableFraction1: Fraction = {d: Number(firstFraction.denominator), n: Number(firstFraction.numerator), s:1};
            const comparableFraction2: Fraction = {d: Number(secondFraction.denominator), n: Number(secondFraction.numerator), s:1};
            if(comparableFraction2 > comparableFraction1){
                const tempFraction = firstFraction;
                firstFraction=secondFraction;
                secondFraction=tempFraction;
            }
        }
      
        firstFraction.isNegative = fractionProblemConfig.allowNegatives && this.getLogicDecision() === 1;
        secondFraction.isNegative = fractionProblemConfig.allowNegatives && this.getLogicDecision() === 1;


        const calculationFirstFraction : Fraction = {n: Number(firstFraction.numerator), 
            d: Number(firstFraction.denominator), 
            s: firstFraction.isNegative? -1:1}
        const calculationSecondFraction : Fraction = {n: Number(secondFraction.numerator), 
                d: Number(secondFraction.denominator), 
                s: secondFraction.isNegative? -1:1}
        
        return {
            firstFraction: calculationFirstFraction,
            secondFraction: calculationSecondFraction,
            originalFirstFraction: firstFraction,
            originalSecondFraction: secondFraction
        };
    }

    getFractionWholeNumber(numerator: number, denominator: number): number | null{
        if(numerator>= denominator){
            return Math.trunc(numerator/denominator);
        }
        return null;
    }
}