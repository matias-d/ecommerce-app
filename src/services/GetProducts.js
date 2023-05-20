import { API_URL } from "./Keys"

export const getProducts = async({categoryId}) => {
    const response = await fetch(`${API_URL}/categories/${categoryId}/products`)
    return await response.json()
}