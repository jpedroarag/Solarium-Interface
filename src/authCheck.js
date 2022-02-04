exports.isAuthorized = () => {
    const expirationDate = localStorage.getItem("expirationDate");

    if(!expirationDate) {
        return false;
    }

    const currentDate = new Date();
    const tokenExpirationDate = Date.parse(expirationDate);

    const timeOffset = Math.abs(currentDate - tokenExpirationDate);
    const daysDifference = timeOffset/(1000 * 60 * 60 *24);

    return localStorage.getItem("userName") != null 
        && localStorage.getItem("accessToken") != null
        && daysDifference > 0;
}

exports.signin = (name, token) => {
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);

    localStorage.setItem("userName", name);
    localStorage.setItem("accessToken", token);
    localStorage.setItem("expirationDate", expirationDate);
}

exports.signout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("expirationDate");
}