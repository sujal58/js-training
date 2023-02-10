let string = " ";
const clear = document.getElementsByClassName("clear");
const buttons = document.querySelectorAll(".btn");
let output = document.querySelector("input");
buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener("click",((e)=>{

        let value = e.target.id;
        if(value === "isequal")
        {
            string = eval(string);
            output.value = string;
        }
        

        
        console.log(value);
        string = string + e.target.innerHTML;
        output.value = string;

       
        if (e.target.innerHTML == "AC") {
            string = " ";
            output.value = string;
        }

        
    }))
})
