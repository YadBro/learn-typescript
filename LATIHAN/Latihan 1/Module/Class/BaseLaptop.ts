import ILaptop from "../Interface/ILaptop";
import * as Keyboard from "./Keyboard";

abstract class BaseLaptop<T> implements ILaptop<T> {
  public name: string;
  public type: T;
  public withNumeric: boolean;
  public withTouchButton: boolean;

  constructor (name: string, type: T, withNumeric: boolean, withTouchButton: boolean) {
    this.name = name;
    this.type = type;
    this.withNumeric = withNumeric;
    this.withTouchButton = withTouchButton;
  }

  public a(): void {
    console.log(Keyboard.a());
  }

  public b(): void {
    console.log(Keyboard.b());
  }
}


export default BaseLaptop;