// tsc.cmd --init
// tsc.cmd -w

console.log("THIS IS REHAN");
console.log("IM WORKING!!");

// CLASSES -

// class User {
//  public email: string;
//   name: string;
//   readonly #city: string = "LA";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     ;
//   }
// }

class User {
  readonly #city: string = "LA";
  private course_count: number = 1;
  protected count: number = 1;

  constructor(public email: string, private name: string) {
    this.email = email;
    this.name = name;
  }

  get myEmail(): string {
    return this.email;
  }

  get courseCount(): number {
    return this.course_count;
  }

  set courseCount(courseNum: number) {
    if (courseNum > 1) {
      this.course_count = courseNum;
    }

    throw new Error("The course count should be more than 1");
  }

  private deleteToken() {
    console.log("Token deleted");
  }
}

class subUser extends User {
  isFamily: boolean = true;

  changeCourseCount() {
    this.count = 4;
  }
}

const obj = new User("abc.com", "Rehan");
// obj.city = "Toronto";
