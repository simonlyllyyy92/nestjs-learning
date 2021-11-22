import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'
import { plainToClass } from "class-transformer";

// an interface of Any Class
interface ClassConstructor {
    new (...args: any[]): {}
}

export function Serialize(dto: ClassConstructor) {
    return UseInterceptors(new SerializerInterceptor(dto))
}

export class SerializerInterceptor implements NestInterceptor{
    //we put it into constructor to make it fully customizable
    constructor(private dto: ClassConstructor){}
    intercept(context: ExecutionContext, handler: CallHandler): Observable<any>{
        //Run something before a request is handled
        //by the request handler
        console.log('Im running before the handler', context) //Running number 1 (before handler)
        return handler.handle().pipe(
            map((data: ClassConstructor) => {
                // Run something before the response is sent out
                console.log('im running before the res is sent out', data) //Running number 3 (after handler)
                return plainToClass(this.dto, data, {
                    excludeExtraneousValues:true // Only Expose decorator in DTO will be shown
                })
            })
        )
    }
}