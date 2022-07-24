// ini sama seperti inheritance pada oop

interface HasName {
  name: string
}

interface HasPassword extends HasName {
  password?: string
}


let andri: HasPassword = {
  name: 'Andri Sukma',
  password: 'andri ganteng pisan',
}

console.log(andri);
