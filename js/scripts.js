$(document).ready(function () {
  $("form#questions").submit(function (event) {
    const beginFrd = $("#userFriendly").val();
    const frontBackEnd = $("#frontBackEnd").val();
    const machineLearnAi = $("#machineLearnAi").val();
    const mobileDev = $("#mobileDev").val();

    if (
      beginFrd === "user friendly" &&
      frontBackEnd === "front end" &&
      machineLearnAi === "no" &&
      mobileDev === "no"
    ) {
      $("#swift").hide();
      $("#python").hide();
      $("#javascript").show();
    } else if (
      beginFrd === "user friendly" &&
      frontBackEnd === "back end" &&
      machineLearnAi === "yes" &&
      mobileDev === "no"
    ) {
      $("#swift").hide();
      $("#javascript").hide();
      $("#python").show();
    } else if (
      beginFrd === "no preference" &&
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
