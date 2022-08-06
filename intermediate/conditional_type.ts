class Admin {
  public create() {}
  public read() {}
  public update() {}
  public delete() {}
}

class Guest {
  public read() {}
  public comment() {}
}


type User<T> = T extends 'admin' ? Admin : Guest;
/*
  Sama seperti
  if (T === 'admin') {
    new Admin();
  }else {
    new Guest();
  }
*/

const yanto: User<'admin'> = new Admin();
// const suparman: User<'guest'> = new Admin(); // error karena typenya Guest
const suparman: User<'guest'> = new Guest();