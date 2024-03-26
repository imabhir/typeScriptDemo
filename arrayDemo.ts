const names: string[] = [];
names.push("karan");
names.push("kalra");

//readonly   // prevent array from being changed
const arr: readonly string[] = ["Karan"];
// arr.push("kalra");  // it will throw an error i.e. push does not exist on type readonly string[]
