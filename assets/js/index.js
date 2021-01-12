let flag = false;

function mobile(x){
    x.classList.toggle("change");
    let menu = document.getElementsByClassName("NavBar__mobile")[0];

    if(flag == false){
        menu.style.display = 'block';
        flag = true;
    } else{
        menu.style.display = 'none';
        flag = false;
    }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "99%";
  document.getElementsByClassName('Items-wrapper').style.overflow = 'hidden';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width= "0";
  document.getElementsByClassName('Items-wrapper').style.overflow = 'auto';
}

/* Set the width of the side navigation to 0 */
function showNav() {
  document.getElementById("mySidenav").style.width= "25%";
}


function openTabs(evt, Name) {
  let i, tabcontent, tablinks;
  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" activeTabs", "");
    }

  document.getElementById(Name).style.display = "block";
  evt.currentTarget.className += " activeTabs";
}

window.addEventListener('resize', function() {
  if(window.innerWidth <= 768){
    closeNav()
  } 
  else{
    showNav()
  }
});

