// Compare Interface and Type
interface User {
  name: string;
  age: number;
}

type TUser = {
  name: string;
  age: number;
};

// Merge
// interface if define with same name it will automaticaly merge
interface Song {
  songName: string;
}

interface Song {
  artisName: string;
}

let mySongList: Song = {
  artisName: 'Ello',
  songName: 'Masih Ada',
};

console.log(mySongList);

// type if define with same name it will error
/*
    type Song2 = {
      songName: string; // Error
    };

    type Song2 = {
      artisName: string; // Error
    };
*/

// Type Intersection & Union

type typeA = {
  id: number;
  propA: string;
};

type typeB = {
  id: number;
  propB: string;
};

// Intersection
type intersectionAB = typeA & typeB;

// Union
type unionAB = typeA | typeB;

// Implementasi
// Intersection must be include all properties in type
let myData: intersectionAB = {
  id: 1,
  propA: 'tesA',
  propB: 'tesB',
};
// Union not to all include properties in type
let myData2: unionAB = {
  id: 1,
  propA: 'tesA',
};

// Implements

// Implements can use interface or type
interface Person {
  name: string;
  age: number;
  getName(id: number): string;
}
class People implements Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getName(id: number) {
    return 'yess';
  }
}
