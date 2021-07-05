function findUniq(arr) {
    let notUnic
    for (el of arr){
      if (notUnic === undefined){
        notUnic = el
        continue
      }
      if (notUnic === el) break     
    }
    let arrSet = new Set(arr)
    for (el of arrSet){
      if(el !== notUnic) return el
    }
}