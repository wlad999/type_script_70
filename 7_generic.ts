const arrayOfNumber: Array<number> = [1,1,2,3,5,8,13]
const arrayOfStrings: Array<string> = ["Hello", "world"]

function reverse<T>(aray:T[]):T[] {
	return aray.reverse()
}
reverse(arrayOfNumber)
reverse(arrayOfStrings)