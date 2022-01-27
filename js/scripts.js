$(document).ready(function () {
  $("form#questions").submit(function (event) {
    event.preventDefault();
    const beginFr = $("#beginFr").val();
    const frontBackEnd = $("#frontBackEnd").val();
    const machineLearnAi = $("#machineLearnAi").val();
    const mobileDev = $("#mobileDev").val();
    console.log(beginFr);
    console.log(frontBackEnd);
    console.log(machineLearnAi);
    console.log(mobileDev);

    if (
      beginFr === "user friendly" &&
      frontBackEnd === "front end" &&
      machineLearnAi === "no" &&
      mobileDev === "no"
    ) {
      $("#javascript").show();
    } else if (
      beginFr === "user friendly" &&
      frontBackEnd === "back end" &&
      machineLearnAi === "yes" &&
      mobileDev === "no"
    ) {
      $("#python").show();
    } else if (
      beginFr === "no preference" &&
      frontBagit ckEnd === "both" &&
      machineLearnAi === "no" &&
      mobileDev === "yes"
    ) {
      $("#swift").show();
    }
  });
});

// function ClearFields() {

//   document.getElementById("textfield1").value = "";
//   document.getElementById("textfield2").value = "";
