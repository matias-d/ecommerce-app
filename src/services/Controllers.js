import { v4 as uuid } from 'uuid';
import { API_URL } from './Keys';



const addProduct = ({img, category, name, price, description}) => {

    let categoryValue;
    if(category === 'consolas'){
        categoryValue = 1
    }else if(category === 'deportes'){
        categoryValue = 2
    }else if(category === 'moda'){
        categoryValue = 3
    }else if(category === 'otros'){
        categoryValue = 4
    }

    let imgValue = img || 'https://fisnikde.com/wp-content/uploads/2019/01/broken-image.png'

    return fetch(`${API_URL}/products`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({img: imgValue, category, name, price, description , categoryId: categoryValue , id: uuid() })
    })
}

const editProduct = ({img, category, name, price, description, id, categoryId}) =>{


    return fetch(`${API_URL}/products/${id}`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({img, category, name, price, description, categoryId})
    })
}

const deleteProduct = (id) => {
    return fetch(`${API_URL}/products/${id}`,{
        method: "DELETE"
    })
}



export const Controllers = {
    addProduct,
    deleteProduct,
    editProduct
}