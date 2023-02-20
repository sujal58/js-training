//UI elements

const form = document.querySelector(".details-collector-form");
const fullname = document.querySelector("#full-name");
const email = document.querySelector("#email");
const mblnum = document.querySelector("#mobile-Number");
const address = document.querySelector("#address")


document.addEventListener("DOMContentLoaded", function (e) {
    //fetch data from local storage
    const fetchData = JSON.parse(localStorage.getItem("studentDetails"));


    //loop the array data
    fetchData.forEach(function (value) {
       // console.log(value.mblnum);

        //create html element
        const div = document.createElement("div");
        div.setAttribute("class", "col-cards");



        //add the html content to the innerHtml property of the newly created element
        let htmlTemplete =
            `
                <div class="card">
                    <b>Officer's desk</b>
                    <div class="card-inner">
                        <div class="card-inner-item">
                            <b>Full name</b>
                            <p>${value.fullname}</p>
                        </div>

                        <div class="card-inner-item">
                            <b>Address</b>
                            <p>${value.address}</p>
                        </div>

                        <div class="card-inner-item">
                            <b>contact</b>
                            <p>${value.email}</p>
                                <p>${value.mblnum}</p>

                        </div>

                    </div>
                    <div class="">
                        <div class="trash-container" id="trash-container"><i class="fa-solid fa-trash"></i></div>
                    </div>
                </div>
                         `

                //add template to div
                div.innerHTML = htmlTemplete;
               // console.log(div);



                //show it ont he UI/screen
                const cards = document.querySelector(".row-cards");
               // console.log(cards);
                cards.insertAdjacentElement("beforeend", div);


     });


})


const delcard = document.querySelector("#trash-container");
// console.log(delcard);
window.addEventListener("click", ((e)=>{
    if (e.target.id === "trash-container") {
        delcard.parentElement.parentElement.parentElement.remove();
    }
    console.log();
}))

    


form.addEventListener("submit", function (e) {
    e.preventDefault();


    // console.log(fullname.value);
    // console.log(email.value);
    // console.log(mblnum.value);
    // console.log(address.value);


    //steps
    //take value from inputs


    //checking empty of the box

    if (fullname.value === "" && email.value === "" && mblnum.value === "" && address.value === "") {
        const errEl = document.createElement("div");
        errEl.setAttribute("class", "error-message");
        errEl.innerText = "Please fill in the fields";
        form.insertAdjacentElement("beforebegin", errEl);

        //remove message after sometime
        setTimeout(() => {
            errEl.remove();
        }, 2000);
    }

    else {


        //create elements div with class name  cards
        const div = document.createElement("div");
        console.log(div);
        div.setAttribute("class", "col-cards");



        //add the html content to the innerHtml property of the newly created element
        let htmlTemplete =
            `
            <div class="card">
                <b>Officer's desk</b>
                <div class="card-inner">
                    <div class="card-inner-item">
                        <b>Full name</b>
                        <p>${fullname.value}</p>
                    </div>

                    <div class="card-inner-item">
                        <b>Address</b>
                        <p>${address.value}</p>
                    </div>

                    <div class="card-inner-item">
                        <b>contact</b>
                        <p>${email.value}</p>
                            <p>${mblnum.value}</p>

                    </div>

                </div>
                <div class="">
                    <div class="trash-container" id="trash-container"><i class="fa-solid fa-trash"></i></div>
                </div>
            </div>
                    `

        //add template to div
        div.innerHTML = htmlTemplete;
        console.log(div);



        //show it ont he UI/screen
        const cards = document.querySelector(".row-cards");
        console.log(cards);
        cards.insertAdjacentElement("beforeend", div);


        




        //focus the cursor
        fullname.focus();


        //show success message

        const succEl = document.createElement("div");
        succEl.setAttribute("class", "success-message");
        succEl.innerText = "Information Added successfully";
        form.insertAdjacentElement("beforebegin", succEl);

        //remove message after sometime
        setTimeout(() => {
            succEl.remove();
        }, 2000);


        //store it on the local storage


        if (localStorage.getItem("studentDetails") === null) {
            const studentlist = [];
            studentlist.push({ fullname: fullname.value, email: email.value, mblnum: mblnum.value, address: address.value });
            console.log(studentlist)
            localStorage.setItem('studentDetails', JSON.stringify(studentlist));
        }
        else {
           var student = [];
            var student_data = JSON.parse(localStorage.getItem("studentDetails"));
            student = student_data;
            var newData = {fullname: fullname.value, email: email.value, mblnum: mblnum.value, address: address.value}
            student.push(newData);
           localStorage.clear();
            
            // studentlist.push({ fullname: fullname.value, email: email.value, mblnum: mblnum.value, address: address.value });
            // console.log(studentlist);
            localStorage.setItem('studentDetails', JSON.stringify(student));
        }

    }

    //clear the input fields
    email.value = "";
    mblnum.value = "";
    fullname.value = "";
    address.value = "";

})











