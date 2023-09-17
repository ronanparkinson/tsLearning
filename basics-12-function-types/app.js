var userType;
var userName;
userType = 5;
userType = 'Max';
//Error here as you must type check before assigning value to variable 
//userName = userType;
if (typeof userType === 'string') {
    userName = userType;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("This is an error message: ", 500);
