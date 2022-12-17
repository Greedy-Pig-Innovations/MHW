const BASE_URL = "https://mhw-db.com"

export const getAllAilments = async () => {

    // "Get"s the Data
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }

    // This specifies the Url it pulls from
    const response = await fetch(`${BASE_URL}/ailments`, options);
    const result = await response.json();

    return result;
}

export const GetAllWeapons = async () => {
    const options = {
        headers: {
            "Content-Type" : 'application/json'
        }
    }

    const response = await fetch(`${BASE_URL}/weapons`,options);
    const result = await response.json();
 
    return result;
}
export const GetAllArmorSets = async ()=>{
    const options = {
        headers:{
            "Content-Type" : 'application/json'
        }
    }

    const response = await fetch(`${BASE_URL}/armor/sets`, options);
    const result = await response.json();

    return result;
}