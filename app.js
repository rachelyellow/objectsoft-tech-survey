$(document).ready(function() {

  $(".hidden").hide();

  let cloudPlatform = {};

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
        delete cloudPlatform['cloud-platform'];
        break;

      case "Private":
        $(".cloud-platform").prop("checked", false);
        cloudPlatform['cloud-platform'] = 'Private';
        $("#Public").hide();
        break;

      case "Hybrid":
        $(".cloud-platform").prop("checked", false);
        cloudPlatform['cloud-platform'] = 'Hybrid';
        $("#Public").hide();
        break;

      default:
        return;
    }
  });

  $("#info").submit(function(e) {

    $("html, body").animate({ scrollTop: 0 }, "fast");

    // display intro msg at beginning to fill out the form
    // if not all info is filled, scroll to top and display error msg => USE OBJ.KEYS()
    // else display thank you/success msg and hide the form

    e.preventDefault();
 
    let rawData = $("#info").serializeArray();

    let clientInfo = {...cloudPlatform};

    rawData.forEach(element => {
      if (!clientInfo[element.name]) {
        clientInfo[element.name] = element.value;
      } else {
        clientInfo[element.name] += ", ";
        clientInfo[element.name] += element.value;
      }
    });

    delete clientInfo['dev-methodology'];


    if (Object.keys(clientInfo).length === 17 && !Object.values(clientInfo).includes("")) {
      $(".alert-info").hide();
      $(".alert-danger").hide();
      $(".alert-success").show();
      $("#info").hide();
    } else {
      $(".alert-info").hide();
      $(".alert-success").hide();
      $(".alert-danger").show();
      clientInfo = {};
    }

    const emailString = JSON.stringify(clientInfo);
    
    console.log(clientInfo);
    console.log(emailString);
  })

  
})