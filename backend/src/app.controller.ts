import { Controller, Get, Res, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { BehaviorSubject, of } from 'rxjs';

const chunks: string[] = ['abc', 'def', 'ghi']

@Controller()
export class AppController {

  stream$ = new BehaviorSubject('')

  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Res() response): any {
    // getHello(@Res() response: Response): Promise<number> {

    // console.log(response)
    // console.log(typeof response)
    // response.status(200).start({ received: true, finishedProcessing: false })
    // response.status(200).send(this.stream$)

    // response.write({'foo': 'bar'})


    // return response.status(200).writeHead({ received: false, finishedProcessing: false })
    // return response.status(200).send({ received: true, finishedProcessing: false })

    // this.streamChunks(400)



    // return 'foo'
    // return of(['abc', 'def'])

    // return '3'
    // return new Promise(resolve => {

    //     setTimeout(() => {
    //     //     // response.status(200).send({ received: true, finishedProcessing: true })
    //     return response.status(200).send({ received: true, finishedProcessing: true })
    // //     return '4'
    // //     // response.write({'foo': 'bar'})
    //     resolve()
    //   }, 2000)

    // })
  }

  private streamChunks(addtionalSuspenseTime = 0) {

    setTimeout(() => {

      this.stream$.next(chunks[0])
      //     // response.status(200).send({ received: true, finishedProcessing: true })
      setTimeout(() => {
        this.stream$.next(chunks[1])
        //     // response.status(200).send({ received: true, finishedProcessing: true })
    //     return response.status(200).send({ received: true, finishedProcessing: true })
    // //     return '4'
    // //     // response.write({'foo': 'bar'})
    //     resolve()
      }, 2000)
    }, 2000)

  }
}
