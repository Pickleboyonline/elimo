var Token = {
    setToken: (token) =>{
        window.localStorage.setItem("token", token);
    }, 
    getToken: () => {
        return window.localStorage.getItem("token");
    }
}

module.exports = Token;