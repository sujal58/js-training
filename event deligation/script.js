const football = document.querySelector("#football")
const basketball = document.querySelector("#basketball")
const golf = document.querySelector("#golf")
const tennis = document.querySelector("#tennis")
const boxing = document.querySelector("#boxing")
const message = document.querySelector("#message")
const list = document.querySelector("#sports");
const sports = [];

function showselectedmessage(e)
{
    const selected = e.target.id;
    console.log(selected);
    sports.push(selected);
    const lstvalue = e.target;
    lstvalue.style.backgroundColor = "pink";
    lstvalue.style.Color = "white";
    // sports.forEach((value) => {
    //     console.log(value);
    //     return message.innerText = `${value} is selecetd.`;   })

    for (let i = 0; i < sports.length; i++) {
        message.innerText = `${sports} is selecetd.`
        
    }
   
}

list.addEventListener("click", showselectedmessage);


// sub select ......................................


let sub = document.getElementById("selectlist");
const subselect = document.querySelector("#subselect");

function subject_list(e)
{
    const subvalue = e.target.value;
    console.log(subvalue);
    //subselect.innerText = `${subvalue} is choosed.`
    if (subvalue === "maths") {
        subselect.innerText = `Mathematics is choosed.`
    }
    else if (subvalue === "ds") {
        subselect.innerText = `Discrete Structure is choosed.`
    }
    else if (subvalue === "mp") {
        subselect.innerText = `Microprocessor is choosed.`
    }
    else if (subvalue === "oop") {
        subselect.innerText = `Object Oriented Programming is choosed.` 
    }
    
}
sub.addEventListener("change", subject_list)



//todo list.....................................

const items = document.querySelector("#input-task");
const todobox = document.querySelector("#to-do-list");
const nolistfound = document.querySelector("#no-data");
const del = document.querySelector(".delete");

items.addEventListener("keyup", ((e) =>{
    if (e.key === "Enter") {
        nolistfound.style.display = "none"
        addToDo(e.target.value);
        e.target.value = " ";
    }
    
}))


const addToDo = (item) => {
    let listitem = null;
    listitem = document.createElement("li")
    listitem.setAttribute("class","to-do-list")
    listitem.innerHTML = `${item} <button class="delete">X</button>`
    console.log(listitem);
    todobox.appendChild(listitem)

    listitem.addEventListener("click", (() => {
        listitem.style.textDecoration = "line-through";
    }))

    listitem.addEventListener("click", (() => {
        confirm("Are you sure?")
        listitem.remove();
    }))
}

