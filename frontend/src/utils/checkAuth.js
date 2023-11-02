import Cookies from "js-cookie";

const checkAuth = () => {
    try{
        const cookies = Cookies.get("data");
        if(cookies !== undefined){
            if(JSON.parse(cookies).accessToken){
                return true;
            }
        }
        console.log("No hay cookies");
        return false;
    }catch(err){
        console.log(err);
        return false;
    }
}

const getAuth = () => {
    try{
        const cookies = Cookies.get("data");
        if(cookies !== undefined){
            if(JSON.parse(cookies).accessToken){
                const actualUser = JSON.parse(cookies);
                console.log(actualUser);
                return  {
                    headers: {
                        Authorization: `Bearer ${actualUser.accessToken}`,
                    },
                };
            }
        }
        console.log("No hay cookies");
        return false;
    }catch(err){
        console.log(err);
        return false;
    }
}

export {checkAuth, getAuth};