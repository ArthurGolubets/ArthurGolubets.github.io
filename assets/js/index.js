let flag = false;

function openNav(x){
  if(flag == false){
    x.classList.toggle("change");
    document.getElementById('mobile__nav').classList.toggle('active_nav');
    document.body.style.overflow = "hidden";
    document.getElementById('overlay').style.width='100%';
    flag=true;
  }
  else{
    x.classList.toggle("change");
    document.getElementById('mobile__nav').classList.toggle('active_nav');
    document.body.style.overflow = "auto";
    flag = false;
  }
};

function closeNav(){
  if(flag==true){
    let btn = document.getElementById('open_nav');
    btn.classList.toggle("change");
    document.getElementById('mobile__nav').classList.remove('active_nav');
    document.getElementById('overlay').style.width='0';
    flag = false;
  }
};

function openFilter() {
  if(document.getElementById("mySidenav")!= null) document.getElementById("mySidenav").style.width = "100%";
  document.body.style.overflow = 'hidden';
}


function closeFilter() {
  if(document.getElementById("mySidenav") != null) document.getElementById("mySidenav").style.width= "0";
  document.body.style.overflow = 'auto';
}


function showFilter() {
  if(document.getElementById("mySidenav") != null) document.getElementById("mySidenav").style.width= "25%";document.getElementById("mySidenav").style.width= "25%";
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
    closeFilter();
  } 
  else{
    if(document.getElementById("mySidenav") != null) showFilter();
    closeNav();
  }
});

