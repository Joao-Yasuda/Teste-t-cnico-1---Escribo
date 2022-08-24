function teste(){

    let input = document.querySelector("#number")
    let resultado = document.querySelector("#resultado")
    let value = input.value

    let numbers =new Array()

    for(let i = 0; i < value ; i++){
        if((i % 3) == 0 || (i % 5) == 0){
            numbers.push(i)
        }
    }

    function Somar(numbers){
        var total = 0;
        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] >= 2) {
                total += numbers[i];
            }
        }
        return total;
    }
    resultado.innerText = Somar(numbers) 
}