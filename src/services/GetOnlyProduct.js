
export const getOnlyProduct = async({id}) => {
    const response = await fetch(`https://json-server-ecom-production.up.railway.app/products/${id}`)
    return await response.json()
}