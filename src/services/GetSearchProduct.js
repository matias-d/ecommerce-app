
export const getSerachProduct = async({search}) => {
    const response = await fetch(`${API_URL}/products?q=${search}`)
    return await response.json()
}