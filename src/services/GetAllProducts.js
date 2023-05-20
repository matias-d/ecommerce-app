import { API_URL } from "./Keys"


export const getAllProducts = async() => {
    const response = await fetch(`${API_URL}/products`)
    return await response.json()
}