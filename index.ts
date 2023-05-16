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
