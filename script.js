const o=prompt("Masukkan operator: ")
const a=+prompt("Masukkan angka 1: ")
const b=+prompt("Masukkan angka 2: ")

switch(o){
    case "+":
    document.write(a+b)
    break;    
    case "-":
    document.write(a-b)
    break;    
    case "*":
    document.write(a*b)
    break;       
    case "/":
    document.write(a/b)
    break;
    default:
    document.write("")    
}
