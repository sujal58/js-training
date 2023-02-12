const details = document.querySelector("#details");
const listofDetails = document.querySelector("#list-of-entered-details");
let data = [];

details.addEventListener("keyup", function(e){
    let enteredData = event.target.value;
    if (e.key === "Enter" && e.target.value != " ") {
        detailsFunction(enteredData);
        e.target.value = "";

    }
})

const detailsFunction = (items) => {
    let sections = document.createElement("li");
    sections.setAttribute("class", "info-details");
    sections.innerHTML = `
    <h5> ${items} </h5>
    `
    listofDetails.append(sections);
    data.push(items);
    localStorage.setItem("List-of-data", JSON.stringify(data));
    const fetch = localStorage.getItem("List-of-data") ;
    console.log(fetch);
}