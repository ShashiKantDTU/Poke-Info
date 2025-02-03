 function ReturnRandomArrayofanynum(anynum) {   
    // genrate random list of numbers from one random numeber(1 to 1000) to random + anynum
    const randomrunber = Math.floor(Math.random() * 500) + 1;
    const randomrunber2 = randomrunber + 90;

    // make a array of all numbers shuffeled from randomrunber to randomrunber2
    function range(start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }
    const array = range(randomrunber, randomrunber2-1);

    // shuffle the array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          // Generate a random index from 0 to i
          const randomIndex = Math.floor(Math.random() * (i + 1));
      
          // Swap the current element with the random index
          [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
        }
        return array;
      }
      
    const temp = shuffleArray(array);

    const randomarray = temp.slice(0, anynum);
   return randomarray;
    }


export default ReturnRandomArrayofanynum;
    