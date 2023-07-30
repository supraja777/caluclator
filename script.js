let string = "";
let buttons = document.getElementsByClassName('button')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target)
        if (e.target.innerHTML == '=') {
            string = eval(string);
        }
        else if (e.target.innerHTML == 'C') {
            string = " ";
        }
        else {
            string = string + e.target.innerHTML;
        }
        
        document.querySelector('input').value = string;
    })
})