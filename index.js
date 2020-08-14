class userlogin {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  user1() {
    const age = this.age;
    const name = this.name;
    return (
      `The age of the user is ` + age + `.` + ` The name of the user is ` + name
    );
  }
}

const genericUser = new userlogin('Josh', 22);
console.log(genericUser.user1());

//functions
//modules
//examples
//simple projects

let arr = ['Rick and Morty', 'Family Guy', 'TMNT', 'Transformers'];

function favoriteCartoon(string) {
  let userRes = console.log('What is your favorite cartoon?');

  for (userRes < arr.length; userRes++; ) {
    if (userRes !== arr[userRes]) {
      arr.push(userRes);
      return userRes;
    } else {
      return userRes;
    }
  }
  return userRes;
}

console.log(favoriteCartoon('Family Guy'));
