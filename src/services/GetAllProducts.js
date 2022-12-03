
export const getAllProducts = async() => {
    const response = await fetch('https://json-server-ecom-production.up.railway.app/products')
    return await response.json()
}