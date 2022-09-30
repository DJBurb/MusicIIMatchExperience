import { Fraction } from 'mathjs';
import { Fraction2 } from './fraction.model';

export interface GeneratedFraction{
    firstFraction: Fraction;
    secondFraction: Fraction;
    originalFirstFraction: Fraction2,
    originalSecondFraction: Fraction2
}