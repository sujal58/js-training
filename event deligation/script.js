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


const sub = document.querySelector("#selectlist")
const subselect = document.querySelector("#subselect")

function subject_list(e)
{
    const subvalue = e.target.value;
    const subdesign = e.target;
    console.log(subvalue);
    subselect.innerText = `${subvalue} is choosed.`


}
sub.addEventListener("click", subject_list)
