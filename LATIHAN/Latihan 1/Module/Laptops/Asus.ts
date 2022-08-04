import BaseLaptop from "../Class/BaseLaptop";

class Asus<T> extends BaseLaptop<T> {
  constructor(type: T, withNumeric: boolean, withTouchButton: boolean) {
    super("Asus", type, withNumeric, withTouchButton);
  }
}

export default Asus;