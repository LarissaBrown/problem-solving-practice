//Write a function that takes an array of numbers and returns the largest (without using Math.max())

const numbersArray = [20,9, 90, 37 , 349, 5]

const largestNum = (array) => {
    let compareNum = [0]

    for (i = 0; i < numbersArray.length; i ++) {
        
        if(numbersArray[i] >= compareNum) {
            
            compareNum = numbersArray[i]
                  
        }    
    }
    console.log(compareNum)
    return compareNum
}

largestNum()


//Write a function that takes an array of words and a character and returns each word that has that character present.

let arrayStrings = ["#3", "$$$", "C%4!", "Hey!","kij#ks"]
const char = "%"

const characterIsPresent = (array, char) => {
    
    for(let i = 0; i < array.length; i++) {

        let iString = array[i].split('')
        if(iString.find(element => element === char)) {

            console.log(array[i])

            
    }
    
}
}
characterIsPresent(arrayStrings, char)



// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

// isDivisible(4, 2) // => true
// isDivisible(9, 3) // => true
// isDivisible(15, 4) // => false

const isDivisible = (num1, num2) => {
    if(num1 % num2 === 0) {
        console.log('true')
    }else{
        console.log("false")
    }
    
}
isDivisible( 35, 5)