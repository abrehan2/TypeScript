interface User {
  email: string;
  userId: number;
  googleId?: string;
  readonly dbId: number;
  // startTrail: () => string
  startTrial(): string;
  getCoupon: (string) => number;
}

// const rehan: User = {email: "rehann@gmail.com", userId: 201333, dbId: 22, startTrail: () => {
//     return "This is trial";}}

interface User {
  gitHub: string;
}

const rehan: User = {
  email: "rehann@gmail.com",
  userId: 201333,
  dbId: 22,
  startTrial() {
    return "THIS IS A TRIAL";
  },
  getCoupon: (coup: "EHH") => {
    return 3;
  },
  gitHub: "abrehan2",
};

interface Admin extends User {
  createdAt: string;
}

const emily: Admin = {
  createdAt: "15/07/23",
  email: "rehann@gmail.com",
  userId: 201333,
  dbId: 22,
  startTrial() {
    return "THIS IS A TRIAL";
  },
  getCoupon: (coup: "EHH") => {
    return 3;
  },
  gitHub: "abrehan2",
};
