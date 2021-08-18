import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';
@Injectable()
export class DiskService {
    constructor(private powerService: PowerService){

    }

    getData() {
        console.log('calling powerservice from disk service')
        this.powerService.supplyPower(20)
        return 'data!';
    }
}
