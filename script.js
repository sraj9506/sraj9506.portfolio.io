const toggler = document.getElementById("navtoggle");
const nm = document.getElementById("nmenu");
const nb = document.getElementById("nbar");
const br1 = document.getElementById("br1");
const br2 = document.getElementById("br2");
const br3 = document.getElementById("br3");
const links=document.querySelectorAll('a[href^="#"]');
var check = false;
var check2 = false;
var isScrolling = false;
function borset(id){
  const lbl=document.getElementById("lbl"+id);
  lbl.style.border="3px solid rgba(128, 0, 32,0.6)";
  lbl.style.backgroundColor="rgba(128, 0, 32)";
  lbl.style.borderRight="none";
}
function borout(id){
  const lbl=document.getElementById("lbl"+id);
  lbl.style.backgroundColor="#5f7331";
  lbl.style.border="none";
}
links.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
function navset(check3) {
  nb.classList.remove("navslidein");
  if (check3) nb.classList.add("navslideout");
  else nb.classList.add("navhide");
  check = false;
  if (window.scrollY == 0) {
    nb.style.backgroundColor = "transparent";
    nb.style.boxShadow = "none";
    check2 = false;
  }
  br1.classList.remove("br1in");
  br2.classList.remove("br2in");
  br3.classList.remove("br3in");
  br1.classList.add("br1out");
  br2.classList.add("br2out");
  br3.classList.add("br3out");
}
function focout() {
  if (check) {
    navset(true);
  }
}
window.onload = function () { 
  nm.style.opacity = "100%";
  nb.classList.add("navhide");
  if (window.scrollY > 0) {
    nb.style.backgroundColor = "white";
    nb.style.boxShadow = "0px 0px 15px rgba(0, 0, 0, 0.2)";
    check2 = true;
  }
  for(var i=0;i<links.length;i++)
  {
    const elem=document.querySelector(links[i].getAttribute("href"));
        if(elem.getBoundingClientRect().bottom>=50)
        {
            links[i].classList.add("navmenu-active");
            break;
        }
    }
}
toggler.addEventListener("click", function () {
  if (check) {
    nb.blur();
  } else {
    br1.classList.remove("br1out");
    br2.classList.remove("br2out");
    br3.classList.remove("br3out");
    br1.classList.add("br1in");
    br2.classList.add("br2in");
    br3.classList.add("br3in");
    nb.style.backgroundColor = "white";
    nb.style.boxShadow = "0px 0px 15px rgba(0, 0, 0, 0.2)";
    nb.classList.remove("navhide");
    nb.classList.remove("navslideout");
    nb.classList.add("navslidein");
    nb.focus();
    check = true;
  }
});
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    nm.style.flexDirection = "row";
    check = false;
    navset(false);
  } else {
    nm.style.flexDirection = "column";
  }
});
window.onscroll = function () {
  if (window.scrollY > 0) {
    if (!check2) {
      nb.style.boxShadow = "0px 0px 15px rgba(0, 0, 0, 0.2)";
      nb.style.backgroundColor = "white";
      check2 = true;
    }
  } else if (!check) {
    nb.style.boxShadow = "none";
    nb.style.backgroundColor = "transparent";
    check2 = false;
  }
  if(!isScrolling)
  {
var ref=document.getElementsByClassName("navmenu-active")[0].getAttribute("href");
var rect=document.querySelector(ref).getBoundingClientRect();
if(rect.top>200)
{
    for(var i=0;i<links.length;i++)
{
    if(links[i].getAttribute("href")==ref)
    {
        links[i].classList.remove("navmenu-active");
        links[i-1].classList.add("navmenu-active");
        break; 
    }
}
}
else if(rect.bottom<50)
{
    for(var i=0;i<links.length;i++)
    {
        if(links[i].getAttribute("href")==ref)
        {
            links[i].classList.remove("navmenu-active");
            links[i+1].classList.add("navmenu-active");
            break; 
        }
    }
}
isScrolling=true;
setTimeout(function(){
    isScrolling=false;
},50)
    }
};
