async function sortLetter(){
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    str = str.split("")
    let random = str.sort(func);  

    function func() {  
      return 0.5 - Math.random();
    }  

    let generate = []
    generate.push(random[0])
    generate.push(random[1])
    generate.push(random[2])
    generate.push(random[3])
    
    let generator = generate.join('')

    return generator  
}

module.exports = {
    sortLetter
}