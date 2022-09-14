import Phaser from 'phaser'
import { BasicAnswerKeyService } from '~/services/answerKey/basicAnswerKey.service';
import { FractionAnswerkeyService } from '~/services/answerKey/fractionAnswerKey.service';
import { FractionService } from '../services/fractions.service';
import { FractionProblemConfig } from '../models/fractionModels/fractionProblemConfig.model';
import { FractionProblemType } from '~/enums/fractionProblemType.enum';

export default class HelloWorldScene extends Phaser.Scene
{
    fractionService = new FractionService(new BasicAnswerKeyService(), new FractionAnswerkeyService())
	constructor()
	{
		super('hello-world');
        
	}

	preload()
    {
        this.load.setBaseURL('http://labs.phaser.io')

        this.load.image('sky', 'assets/skies/space3.png')
        this.load.image('logo', 'assets/sprites/phaser3-logo.png')
        this.load.image('red', 'assets/particles/red.png')


        const fractionProblemConfig: FractionProblemConfig={
            maxWholeNumber: 10,
            allowNegatives: true,
            maxDenominator: 10,
            useSameDenominator: true,
            maxNumerator: 20
        }

        console.log(this.fractionService.getFractionProblem(fractionProblemConfig, FractionProblemType.Add));
        console.log (this.fractionService.getFractionProblem(fractionProblemConfig, FractionProblemType.Substract));
        console.log (this.fractionService.getFractionProblem(fractionProblemConfig, FractionProblemType.Multiply));
        console.log (this.fractionService.getFractionProblem(fractionProblemConfig, FractionProblemType.Divide));
        // console.log(this.fractionService.getAdditionFractionProblem(fractionProblemConfig));
        // console.log(this.fractionService.getSubtractionFractionProblem(fractionProblemConfig));
        // console.log(this.fractionService.getMultiplicationFractionProblem(fractionProblemConfig));
        // console.log(this.fractionService.getDivisionFractionProblem(fractionProblemConfig));
        // let mathProblem = this.fractionService?.getNumeratorProblem();
        // console.log(mathProblem);
        // let mathProblem = this.fractionService?.getDenominatorProblem();
        // console.log(mathProblem);
        // let fractionMathProblem = this.fractionService.getMixedNumberToImproperFractionProblem();
        // console.log(fractionMathProblem);
        // console.log(this.fractionService.getImproperToMixedNumberProblem());
         


    }

    create()
    {
        this.add.image(400, 300, 'sky')

        const particles = this.add.particles('red')

        const emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        })

        const logo = this.physics.add.image(400, 100, 'logo')

        logo.setVelocity(100, 200)
        logo.setBounce(1, 1)
        logo.setCollideWorldBounds(true)

        emitter.startFollow(logo)
    }
}
