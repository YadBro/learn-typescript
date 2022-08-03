class List<T> {
  private data: T[];

  constructor(elements: T[]) {
    this.data = elements;
  }

  add(element: T):void {
    this.data.push(element);
  }

  addMultiple(elements: T[]): void {
    this.data.push(...elements);
  }

  public getAll(): T[] {
    return this.data;
  }
}

let numbersAku = new List<number>([1, 2, 3]);
numbersAku.add(4);
numbersAku.addMultiple([1,12,3]);
console.log(numbersAku.getAll());