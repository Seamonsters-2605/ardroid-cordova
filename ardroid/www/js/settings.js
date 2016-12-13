
// "none", "tank", or "steer"
function getDriveMode() {
    return _getValue("config.driveMode", "none");
}
function setDriveMode(value) {
    _setValue("config.driveMode", value);
}


function numTankLeftMotors() {
    return 2;
}
// integer; 0 for no port
// index is from 1
function getTankLeftMotorPort(index) {
    return parseInt(_getValue("config.tank.leftPorts." + index, "0"));
}
function setTankLeftMotorPort(index, value) {
    _setValue("config.tank.leftPorts." + index, value);
}
// boolean
// index is from 1
function getTankLeftMotorReversed(index) {
    return _stringToBoolean(_getValue("config.tank.leftReversed." + index, "false"));
}
function setTankLeftMotorReversed(index, value) {
    _setValue("config.tank.leftReversed." + index, value);
}

function numTankRightMotors() {
    return 2;
}
// integer; 0 for no port
// index is from 1
function getTankRightMotorPort(index) {
    return parseInt(_getValue("config.tank.rightPorts." + index, "0"));
}
function setTankRightMotorPort(index, value) {
    _setValue("config.tank.rightPorts." + index, value);
}
// boolean
// index is from 1
function getTankRightMotorReversed(index) {
    return _stringToBoolean(_getValue("config.tank.rightReversed." + index, "false"));
}
function setTankRightMotorReversed(index, value) {
    _setValue("config.tank.rightReversed." + index, value);
}

// speed scale: float, 0 - 1
function getTankScale() {
    return parseFloat(_getValue("config.tank.scale", "1.0"));
}
function setTankScale(value) {
    _setValue("config.tank.scale", value);
}


function numSteerDriveMotors() {
    return 2;
}
// integer; 0 for no port
// index is from 1
function getSteerDriveMotorPort(index) {
    return parseInt(_getValue("config.steer.drivePorts." + index, "0"));
}
function setSteerDriveMotorPort(index, value) {
    _setValue("config.steer.drivePorts." + index, value);
}
// boolean
// index is from 1
function getSteerDriveMotorReversed(index) {
    return _stringToBoolean(_getValue("config.tank.driveReversed." + index, "false"));
}
function setSteerDriveMotorReversed(index, value) {
    _setValue("config.tank.driveReversed." + index, value);
}

// drive speed scale: float, 0 - 1
function getSteerDriveScale() {
    return parseFloat(_getValue("config.steer.driveScale", "1.0"));
}
function setSteerDriveScale(value) {
    _setValue("config.steer.driveScale", value);
}

function numSteerTurnMotors() {
    return 2;
}
// integer; 0 for no port
// index is from 1
function getSteerTurnMotorPort(index) {
    return parseInt(_getValue("config.steer.turnPorts." + index, "0"));
}
function setSteerTurnMotorPort(index, value) {
    _setValue("config.steer.turnPorts." + index, value);
}
// boolean
// index is from 1
function getSteerTurnMotorReversed(index) {
    return _stringToBoolean(_getValue("config.tank.turnReversed." + index, "false"));
}
function setSteerTurnMotorReversed(index, value) {
    _setValue("config.tank.turnReversed." + index, value);
}

// integer: stepper motor max speed in RPMs
function getSteerTurnRPM() {
    return parseInt(_getValue("config.steer.turnRPM", "100"));
}
function setSteerTurnRPM(value) {
    _setValue("config.steer.turnRPM", value);
}

// integer: number of steps per rotation for turning stepper motor
function getSteerTurnSteps() {
    return parseInt(_getValue("config.steer.turnSteps", "200"));
}
function setSteerTurnSteps(value) {
    _setValue("config.steer.turnSteps", value);
}

// float: number of rotations to fully steer to the left or right
function getSteerTurnRotations() {
    return parseFloat(_getValue("config.steer.turnRotations", "0.25"));
}
function setSteerTurnRotations(value) {
    _setValue("config.steer.turnRotations", value);
}



// allows default values if the key is not found
function _getValue(key, defaultValue) {
    var value = window.localStorage.getItem(key);
    if(value == null)
        return defaultValue;
    return value;
}

function _setValue(key, value) {
    console.log(key + ": " + value);
    window.localStorage.setItem(key, value.toString());
}

function _stringToBoolean(value) {
    return value === "true";
}
