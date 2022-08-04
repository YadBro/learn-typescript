export default interface ILaptop <T> {
  name: string,
  type: T,  // generic type
  withNumeric: boolean, // numpad
  withTouchButton: boolean, // click right and left in laptop
}