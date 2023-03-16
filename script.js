function myFunction_Otdel_Twor_Inic() {
    document.getElementById(".pm_KDM_OTI").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.Otdel_Tvor_Inic')) {

    var dropdowns = document.getElementsByClassName(".pm_KDM_OTI");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction_pm_KDM_OTI(){
  document.getElementById(".pm_pm_KDM_OTI").classList.toggle("show");
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.pm_KDM_OTI')) {

    var dropdowns = document.getElementsByClassName(".pm_pm_KDM_OTI");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction_pm_IPM_OTI(){
  document.getElementById(".pm_pm_IPM_OTI").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.pm_IPM_OTI')) {

    var dropdowns = document.getElementsByClassName(".pm_pm_IPM_OTI");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction_pm_K_OTI(){
  document.getElementById(".pm_pm_K_OTI").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.pm_K_OTI')) {

    var dropdowns = document.getElementsByClassName(".pm_pm_K_OTI");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction_Centre_Muz_Cult(){
  document.getElementById(".Dop_menu_CMC").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.Centre_Muz_Cult')) {

    var dropdowns = document.getElementsByClassName(".Dop_Menu_CMC");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction_pm_KDM_CMC(){
  document.getElementById(".pm_pm_KDM_CMC").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.pm_KDM_CMC')) {

    var dropdowns = document.getElementsByClassName(".pm_pm_KDM_CMC");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction_pm_INC_CMC(){
  document.getElementById("pm_pm_INC_CMC").classList.toggle("show");
}
window.onclick = function(event) {
  if(!event.target.matches('.pm_ITM_CMC')){

    var dropdown = document.getElementById(".pm_pm_INC_CMC");
    var i;
    for(i = 0;i < dropdown.length; i++){
      var openDropdown = dropdown[i];
      if(openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction_pm_K_CMC(){
  document.getElementById(".pm_pm_K_CMC").classList.toggle("show");
}
window.onclick = function(event) {
  if(!event.target.matches('.pm_K_CMC')){

    var dropdown = document.getElementById(".pm_pm_K_CMC");
    var i;
    for(i = 0;i < dropdown.length; i++){
      var openDropdown = dropdown[i];
      if(openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction_Centre_Sov_Issc(){
  document.getElementByld(".Dop_menu_CSI").classList.toggle("show");
}
window.onclick = function(event) {
  if(!event.target.matches('.Centre_Sov_Issc')){

    var dropdown = document.getElementById(".Dop_menu_CSI");
    var i;
    for(i = 0;i < dropdown.length; i++){
      var openDropdown = dropdown[i];
      if(openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction_pm_KDM_CSI(){
  document.getElementById(".pm_pm_KDM_CSI").classList.toggle("show");
}
window.onclick = function(event) {
  if(!event.target.matches('.pm_KDM_CSI')){

    var dropdown = document.getElementById(".pm_pm_KDM_CSI");
    var i;
    for(i = 0;i < dropdown.length; i++){
      var openDropdown = dropdown[i];
      if(openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction_pm_IPM_CSI(){
  document.getElementById(".pm_pm_IPM_CSI").classList.toggle("show");
}
window.onclick = function(event) {
  if(!event.target.matches('.pm_IPM_CSI')){

    var dropdown = document.getElementById(".pm_pm_INC_CSI");
    var i;
    for(i = 0;i < dropdown.length; i++){
      var openDropdown = dropdown[i];
      if(openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }
}
function myFunction_pm_IPM_One_CSI(){
  document.getElementById(".pm_pm_IPM1_CSI").classList.toggle("show");
}
window.onclick = function(event) {
  if(!event.target.matches('.pm_IPM1_CSI')){

    var dropdown = document.getElementById(".pm_pm_IPM1_CSI");
    var i;
    for(i = 0;i < dropdown.length; i++){
      var openDropdown = dropdown[i];
      if(openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }
}
function myFinction_AC(){
  document.getElementByld(".Dop_menu_AC").classList.toggle("show");
}
window.onclick = function(event) {
  if(!event.target.matches('.Administration_Sector')){

    var dropdown = document.getElementById(".Dop_menu_AC");
    var i;
    for(i = 0;i < dropdown.length; i++){
      var openDropdown = dropdowns[i];
      if(openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction_pm_KDM_AC(){
  document.getElementById(".pm_pm_KDM_AC").classList.toggle("show");
}
window.onclick = function(event) {
  if(!event.target.matches('.pm_KDM_AC')){

    var dropdown = document.getElementById(".pm_pm_IKDM_AC");
    var i;
    for(i = 0;i < dropdown.length; i++){
      var openDropdown = dropdown[i];
      if(openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }
}
function myFunction_pm_IPM_AC(){
  document.getElementByld(".pm_pm_IPM_AC").classList.toggle("show");
}
window.onclick = function(event) {
  if(!event.target.matches('.pm_IPM_AC')){

    var dropdown = document.getElementById(".pm_pm_IPC_AC");
    var i;
    for(i = 0;i < dropdown.length; i++){
      var openDropdown = dropdowns[i];
      if(openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }
}