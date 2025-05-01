import { HelloModel } from "../models/hello.model";

export class HelloController {
  static sayHello(): string {
    return HelloModel.getMessage();
  }
}
