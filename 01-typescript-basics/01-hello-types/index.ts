
// 01-hello-types/index.ts
// Day 1: Types are your seatbelt

const name: string = "Mario";
let age: number = 30;
const isDev: boolean = true;

// Try breaking it (uncomment):
// age = "twenty"; // ← TypeScript yells!

console.log(`👋 Hi ${name}!`);
console.log(`🎂 You are ${age} years old.`);
console.log(`💻 Dev mode: ${isDev}`);

export {}; // makes it a module (clean console)