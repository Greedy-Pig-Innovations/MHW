const BASE_URL = "https://mhw-db.com"

export const getAllAilments = async () => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await fetch(`${BASE_URL}/ailments`)
    const result = await response.json()

    console.log(result, "this is ailments")
    return result;

}

export const getSpecificAilment = async () => {

}