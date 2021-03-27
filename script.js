window.addEventListener("scroll",function(){
    const logo=document.querySelector
    ('.logo img');
    const logoTxt=document.querySelector
    ('.logoText a');
    const mainNav = document.getElementById
    ('mainNav');

    if(window.pageYOffset > 100){
        mainNav.classList.add("bg-white");
    }
    else{
        mainNav.classList.remove("bg-white");
    }
})


function myfunction(){
    var x = document.getElementById("menu");

    if(x.style.display =="block")
    {
        x.style.display="none";
    }
    else;{
        x.style.display="block";
    }
}

