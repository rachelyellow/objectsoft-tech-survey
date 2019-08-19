$(document).ready(function() {

  $(".hidden").hide();

  let clientInfo = {};

  $("#methodology").change(function(e) {
    console.log(e.target.value)
    $(".methodology").prop("checked", false)
    switch (e.target.value) {
      case "SDLC":
        $("#Agile").hide()
        $("#SDLC").show()
        break;

      case "Agile":
        $("#Agile").show()
        $("#SDLC").hide()
        break;

      default:
        return;
    }
  });

  $("#cloud-platform").change(function(e) {
    console.log(e.target.value)
    switch (e.target.value) {
      case "Public":
        $("#Public").show();
        break;

      case "Private":
        $(".cloud-platform").prop("checked", false);
        clientInfo['cloud-platform'] = 'Private';
        $("#Public").hide();
        break;

      case "Hybrid":
        $(".cloud-platform").prop("checked", false);
        clientInfo['cloud-platform'] = 'Hybrid';
        $("#Public").hide();
        break;

      default:
        return;
    }
  });

  $("#info").submit(function(e) {

    // display intro msg at beginning to fill out the form
    // if not all info is filled, scroll to top and display error msg => USE OBJ.KEYS()
    // else display thank you/success msg and hide the form

    e.preventDefault();
 
    let rawData = $("#info").serializeArray();

    rawData.forEach(element => {
      if (!clientInfo[element.name]) {
        clientInfo[element.name] = element.value;
      } else {
        clientInfo[element.name] += ", ";
        clientInfo[element.name] += element.value;
      }
    });

    console.log(Object.keys(clientInfo));


    for (element in clientInfo) {
      if (element === "") {
        $("alert").hide();
        $("alert-danger").show();
        clientInfo = {};
      }
    }


    console.log(clientInfo);
  })

  
})