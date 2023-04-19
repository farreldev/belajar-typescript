// Array of number

// Type inference
let list1 = [1, 2, 3, 4];

// Square bracket
let list1_2: number[];
list1_2 = [1, 2, 3, 4];

// Generic array
let list1_3: Array<number>;
list1_3 = [1, 2, 3, 4];

// Array of string
// Generic
let list2: Array<string>;
list2 = ['a', 'b', 'c'];

 // Array with union
 // Type inference
 let list3_1 = ['Hello',1,2,3,4]

 // Square bracket
 let list3_2: (string|number)[];
 list3_2 = ['Hello',1,2,3];

 // generic array
let list3_3:Array<string|number>;
list3_3 = ['Hello',1,2,3];