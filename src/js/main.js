var mobile_burger = document.getElementByIdsName('mobile-menu')[0];
function openNav() {
    document.getElementById("myNav").style.width = "50%";
    // mobile_burger.style.display = "none";
    alert("working");
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    mobile_burger.style.display = "block";
}
