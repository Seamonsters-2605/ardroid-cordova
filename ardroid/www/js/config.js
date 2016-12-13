var driveModeSelect = document.getElementById("drive-mode");
var tankDriveSettingsDiv = document.getElementById("drivetrain-settings-tank");
var steerDriveSettingsDiv =
    document.getElementById("drivetrain-settings-steer");

var tankLeftPort1 = document.getElementById("tank-left-1-port");
var tankLeftReverse1 = document.getElementById("tank-left-1-port");
var tankRightPort1 = document.getElementById("tank-left-1-port");
var tankRightReverse1 = document.getElementById("tank-left-1-port");



function driveModeUpdated() {
    var driveMode =
        driveModeSelect.options[driveModeSelect.selectedIndex].value;
    setDriveMode(driveMode);
    if(driveMode == "tank") {
        tankDriveSettingsDiv.style.display = "block";
    } else {
        tankDriveSettingsDiv.style.display = "none";
    }
    if(driveMode == "steer") {
        steerDriveSettingsDiv.style.display = "block";
    } else {
        steerDriveSettingsDiv.style.display = "none";
    }
}

driveModeSelect.onchange = driveModeUpdated;




function saveConfig() {
    driveModeUpdated();
    
}
