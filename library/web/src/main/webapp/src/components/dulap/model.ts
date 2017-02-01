export class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public publisher: string,
    public year: number,
    public department: Department,
    public availableNo: number
  ) { }
}

export class Department{
  constructor(
    public id: number,
    public name: string){
  }
}

export class BookList{
  constructor(
    public books: Book[]
  ){
  }
}

export class Tipuri{
  constructor(
    public name: string)
    {

    }

}
