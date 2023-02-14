//UI elements

const form = document.querySelector(".details-collector-form");
const fullname = document.querySelector("#full-name");
const email = document.querySelector("#email");
const mblnum = document.querySelector("#mobile-Number");
const address = document.querySelector("#address")

form.addEventListener("submit", function (e) {
     e.preventDefault();

        // console.log(fullname.value);
        // console.log(email.value);
        // console.log(mblnum.value);
        // console.log(address.value);


        //steps
        //take value from inputs


        //checking empty of the box

        // if (fullname.value === "" && email.value === "" && mblnum.value === "" && address.value === "") {
        //     const errEl = document.createElement("div");
        //     errEl.setAttribute("class", "error-message");
        //     errEl.innerText = "Please fill in the fields";
        //     form.insertAdjacentElement("beforebegin", errEl);

        //     //remove message after sometime
        //     setTimeout(() => {
        //         errEl.remove();
        //     }, 2000);
        // }
        


        //create elements div with class name  cards
        const div = document.createElement("div");
        console.log(div);
        div.setAttribute("class", "card");



        //add the html content to the innerHtml property of the newly created element
        let htmlTemplete =
            `
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
                        <div class="trash-container"><i class="fa-solid fa-trash"></i></div>
                    </div>
                    `

        //add template to div
        div.innerHTML = htmlTemplete;
        console.log(div);



        //show it ont he UI/screen
        const cards = document.querySelector(".cards");
        cards.insertAdjacentElement("beforeend", div);


        //clear the input fields
        email.value="";
        mblnum.value="";
        fullname = "";
        address.value = "";

        //focus the cursor
        // fullname.focus();

        //store it on the local storage
        
    

    

})








