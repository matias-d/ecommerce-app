
export const getSerachProduct = async({search}) => {
    const response = await fetch(`https://json-server-ecom-production.up.railway.app/products?q=${search}`)
    return await response.json()
}