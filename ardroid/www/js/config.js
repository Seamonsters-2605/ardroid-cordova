var driveModeSelect = document.getElementById("drive-mode");
var tankDriveSettingsDiv = document.getElementById("drivetrain-settings-tank");
var steerDriveSettingsDiv =
    document.getElementById("drivetrain-settings-steer");

var tankLeftPort1 = document.getElementById("tank-left-1-port");
var tankLeftReverse1 = document.getElementById("tank-left-1-reverse");
var tankLeftPort2 = document.getElementById("tank-left-2-port");
var tankLeftReverse2 = document.getElementById("tank-left-2-reverse");
var tankRightPort1 = document.getElementById("tank-right-1-port");
var tankRightReverse1 = document.getElementById("tank-right-1-reverse");
var tankRightPort2 = document.getElementById("tank-right-2-port");
var tankRightReverse2 = document.getElementById("tank-right-2-reverse");

var tankScale = document.getElementById("tank-scale");



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

function tankLeftPortsUpdated() {
    tankLeftPort1.value = checkDCPortNumber(tankLeftPort1.value);
    tankLeftPort2.value = checkDCPortNumber(tankLeftPort2.value);
    setTankLeftMotorPort(1, inputStringToNumber(tankLeftPort1.value));
    setTankLeftMotorPort(2, inputStringToNumber(tankLeftPort2.value));
}
tankLeftPort1.oninput = tankLeftPortsUpdated;
tankLeftPort2.oninput = tankLeftPortsUpdated;

function tankLeftReverseUpdated() {
    setTankLeftMotorReversed(1, tankLeftReverse1.checked);
    setTankLeftMotorReversed(2, tankLeftReverse2.checked);
}
tankLeftReverse1.oninput = tankLeftReverseUpdated;
tankLeftReverse2.oninput = tankLeftReverseUpdated;

function tankRightPortsUpdated() {
    tankRightPort1.value = checkDCPortNumber(tankRightPort1.value);
    tankRightPort2.value = checkDCPortNumber(tankRightPort2.value);
    setTankRightMotorPort(1, inputStringToNumber(tankRightPort1.value));
    setTankRightMotorPort(2, inputStringToNumber(tankRightPort2.value));
}
tankRightPort1.oninput = tankRightPortsUpdated;
tankRightPort2.oninput = tankRightPortsUpdated;

function tankRightReverseUpdated() {
    setTankRightMotorReversed(1, tankRightReverse1.checked);
    setTankRightMotorReversed(2, tankRightReverse2.checked);
}
tankRightReverse1.oninput = tankRightReverseUpdated;
tankRightReverse2.oninput = tankRightReverseUpdated;

function tankScaleUpdated() {
    setTankScale(parseFloat(tankScale.value) / 256.0);
}
tankScale.oninput = tankScaleUpdated;


function checkDCPortNumber(port) {
    if(port == "")
        return port;
    if(port < 1)
        return 1;
    if(port > 4)
        return 4;
    return port;
}

function inputStringToNumber(s) {
    if(s == "")
        return 0;
    else
        return parseInt(s);
}



function saveConfig() {
    driveModeUpdated();
    tankLeftPortsUpdated();
    tankLeftReverseUpdated();
    tankRightPortsUpdated();
    tankRightReverseUpdated();
}

