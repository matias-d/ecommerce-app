
export const getProducts = async({categoryId}) => {
    const response = await fetch(`https://json-server-ecom-production.up.railway.app/categories/${categoryId}/products`)
    return await response.json()
}