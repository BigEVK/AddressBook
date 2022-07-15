document.querySelectorAll("button").addEventListener("click", info);

var users = []

var counter = 0 



function info () {
    // console.log("hello");
        
    var userName = document.getElementById("name").value;
    // console.log(userName);
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    if ( userName === "") {
        alert("Please add a name");
    }
    if (address === "") {
        alert("Please enter address");
    }
    if (phone === "") {
        alert("Please enter phone");
    }
    if (email === "") {
        alert("Please enter address");
    }
    else {
        users.push({
            name: userName,
            address: address,
            phone: phone,
            email: email

        })
        localStorage.setItem("contacts",JSON.stringify(users))
       const mainContainer = document.createElement("div");
       mainContainer.classList.add("name");

       const boxOne = document.createElement("input");
       boxOne.placeholder = "Name"
       mainContainer.appendChild(boxOne);

       const boxTwo = document.createElement("input");
       boxTwo.placeholder = "Address"
       mainContainer.appendChild(boxTwo);

       const boxThree = document.createElement("input");
       boxThree.placeholder = "Phone"
       mainContainer.appendChild(boxThree);

       const boxFour = document.createElement("input");
       boxFour.placeholder = "e-mail"
       mainContainer.appendChild(boxFour);

        const boxFive = document.createElement("button");
        boxFive.textContent = "Enter"
       mainContainer.appendChild(boxFive);

    counter++
    console.log(counter);   
    document.querySelector("#counter").textContent = "Number of Contacts: " + counter 

       document.querySelector("header").appendChild(mainContainer);
    };
};



