export function upperIfString(value){
  if(typeof value === "string"){
    return value.toUpperCase()
  }else{
    return value
  }
}