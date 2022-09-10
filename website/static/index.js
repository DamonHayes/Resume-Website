function loader_fadeout() {
  console.log('this is working')
  $(".loader-wrapper").fadeOut(3000);
}

function alertfunction() {
  alert('You clicked the button!')
}

window.onload = loader_fadeout();
