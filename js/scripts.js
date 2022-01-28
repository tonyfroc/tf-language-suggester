$(document).ready(function () {
  $("form#questions").submit(function (event) {
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
      $("#swift").hide();
      $("#python").hide();
      $("#javascript").show();
    } else if (
      beginFr === "user friendly" &&
      frontBackEnd === "back end" &&
      machineLearnAi === "yes" &&
      mobileDev === "no"
    ) {
      $("#swift").hide();
      $("#javascript").hide();
      $(".backEnd").text(frontBackEnd);
      $("#python").show();
    } else if (
      beginFr === "no preference" &&
      frontBackEnd === "both" &&
      machineLearnAi === "no" &&
      mobileDev === "yes"
    ) {
      $("#javascript").hide();
      $("#python").hide();
      $("#swift").show();
    }
    event.preventDefault();
  });
});
