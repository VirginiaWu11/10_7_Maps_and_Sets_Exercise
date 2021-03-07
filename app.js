// Quick Question #1
// What does the following code return?

// new Set([1,1,2,2,3,4]) // set {1,2,3,4}

// Quick Question #2
// What does the following code return?

// [...new Set("referee")].join("") //"ref"

// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([ 1, 2, 3 ], true);
m.set([ 1, 2, 3 ], false);

//{[1,2,3]: true), [1,2,3]: false}

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = (arr) => (arr.length === new Set(arr).size ? false : true);
// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false
// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

const isVowel = (char) => 'aeiou'.includes(char);

const vowelCount = (word) => {
	const vMap = new Map();
	let smallWord = word.toLowerCase();
	for (let i of smallWord) {
		if (isVowel(i)) {
			if (vMap.has(i)) {
				vMap.set(i, vMap.get(i) + 1);
			}
			else vMap.set(i, 1);
		}
	}
	return vMap;
};

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }
