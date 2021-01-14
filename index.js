// Your code here

function mapToNegativize(sourceArray){
  let newArr = []
    for (let num = 0; num  < sourceArray.length; num++){
   newArr.push(sourceArray[num] * -1)
  }
      return newArr
}

function mapToNoChange(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(src[i]) 
  }
  return r
}
 
function mapToDouble(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(2 * src[i]) 
  }
  return r
}
 
function mapToSquare(src) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(src[i] * src[i]) 
  }
  return r
}
  
