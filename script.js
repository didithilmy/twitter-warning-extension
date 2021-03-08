function closeDialog() {
  document.getElementById("twex-dialog").classList.add("hidden");
}

function openDialog() {
  document.getElementById("twex-dialog").classList.remove("hidden");
}

function remindIn30Mins() {
  var now = new Date();
  now.setTime(now.getTime() + 30 * 60 * 1000);
  document.cookie =
    "_twex_snooze=true; expires=" + now.toUTCString() + "; path=/";
  closeDialog();
}

function remindTomorrow() {
  var now = new Date();
  now.setHours(24, 0, 0, 0);
  document.cookie =
    "_twex_snooze=true; expires=" + now.toUTCString() + "; path=/";
  closeDialog();
}

document.getElementById("twex-remind-30").onclick = remindIn30Mins;
document.getElementById("twex-remind-tomorrow").onclick = remindTomorrow;

if (
  document.cookie
    .split(";")
    .some((item) => item.trim().startsWith("_twex_snooze=true"))
) {
  closeDialog();
} else {
  openDialog();
}
