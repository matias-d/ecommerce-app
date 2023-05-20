import { API_URL } from "./Keys"

export const getOnlyProduct = async({id}) => {
    const response = await fetch(`${API_URL}/products/${id}`)
    return await response.json()
}