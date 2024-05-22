// function toggleMenu() {
//     const menuLinks = document.querySelector('.menu-links');
//     menuLinks.style.display = menuLinks.style.display === 'flex' ? 'none' : 'flex';
// }

function valid() {
    // Name validation
    var v1 = document.getElementById("bx1");
    var e1 = document.getElementById("er1");
    var exp1 = /^[a-z A-Z]{3,25}$/;
    
    if (v1.value == "") {
        e1.innerText = "Please enter your name";
        v1.focus();
        return false;
    } else if (exp1.test(v1.value) == false) {
        e1.innerText = "Invalid name";
        v1.focus();
        return false;
    } else {
        e1.innerText = "";
    }
    
    // Phone validation
    var v2 = document.getElementById("bx2");
    var e2 = document.getElementById("er2");
    var exp2 = /^[6-9]{1}[0-9]{9}$/;
    
    if (v2.value == "") {
        e2.innerText = "Please enter your phone number";
        v2.focus();
        return false;
    } else if (exp2.test(v2.value) == false) {
        e2.innerText = "Invalid phone number";
        v2.focus();
        return false;
    } else {
        e2.innerText = "";
    }

}

function max100(){
      //textarea
      var v3 = document.getElementById("bx3");
      var e3 = document.getElementById("er3");
        count = 100;
        count = count - v3.value.length;
        e3.innerText = count;
        v3.setAttribute("maxlength",100);
}

function nav() {
    var navSmall = document.getElementById("nav-small");
    if (navSmall.style.display === "block") {
        navSmall.style.display = "none";
    } else {
        navSmall.style.display = "block";
    }
}
