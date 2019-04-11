let msg='abc';
let endsWithC=msg.endsWith('c');
//endsWith title works only for string type variables ,cant use for any type variable

//type assertion
let messages;
messages='abc';
let MsgendsWithC=(<string>messages).endsWith('c');

//another method to do type assertion
let alternateWay=(messages as string).endsWith('c');


