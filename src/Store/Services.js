// Services for maincategory    
export async function addMaincategoryAPI(data){
    var response = await fetch("http://localhost:8000/maincategory",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data.payload)
        })
        return await response.json()
}

export async function getMaincategoryAPI(){
    var response = await fetch("http://localhost:8000/maincategory")
        return await response.json()
}



export async function deleteMaincategoryAPI(data){
    var response = await fetch("http://localhost:8000/maincategory/"+data.payload.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
        })
        return await response.json()
}


export async function updateMaincategoryAPI(data){
    var response = await fetch("http://localhost:8000/maincategory/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
        })
        return await response.json()
}


// Services for Subcategory    
export async function addSubcategoryAPI(data){
    var response = await fetch("http://localhost:8000/subcategory",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data.payload)
        })
        return await response.json()
}

export async function getSubcategoryAPI(){
    var response = await fetch("http://localhost:8000/subcategory")
        return await response.json()
}



export async function deleteSubcategoryAPI(data){
    var response = await fetch("http://localhost:8000/subcategory/"+data.payload.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
        })
        return await response.json()
}


export async function updateSubcategoryAPI(data){
    var response = await fetch("http://localhost:8000/subcategory/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
        })
        return await response.json()
}




// Services for Brand    
export async function addBrandAPI(data){
    var response = await fetch("http://localhost:8000/brand",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data.payload)
        })
        return await response.json()
}

export async function getBrandAPI(){
    var response = await fetch("http://localhost:8000/brand")
        return await response.json()
}



export async function deleteBrandAPI(data){
    var response = await fetch("http://localhost:8000/brand/"+data.payload.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
        })
        return await response.json()
}


export async function updateBrandAPI(data){
    var response = await fetch("http://localhost:8000/brand/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
        })
        return await response.json()
}


// Services for Product    
export async function addProductAPI(data){
    var response = await fetch("http://localhost:8000/product",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data.payload)
        })
        return await response.json()
}

export async function getProductAPI(){
    var response = await fetch("http://localhost:8000/product")
        return await response.json()
}



export async function deleteProductAPI(data){
    var response = await fetch("http://localhost:8000/product/"+data.payload.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
        })
        return await response.json()
}


export async function updateProductAPI(data){
    var response = await fetch("http://localhost:8000/product/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
        })
        return await response.json()
}




// Services for user   
export async function addUserAPI(data){
    var response = await fetch("http://localhost:8000/user",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data.payload)
        })
        return await response.json()
}

export async function getUserAPI(data){
    var response = await fetch("http://localhost:8000/user")
        return await response.json()
}


export async function getSingleUserAPI(data){
    var response = await fetch("http://localhost:8000/user/"+data.id)
        return await response.json()
}

export async function deleteUserAPI(data){
    var response = await fetch("http://localhost:8000/user//+data.id"+data.payload.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
        })
        return await response.json()
}


export async function updateUserAPI(data){
    var response = await fetch("http://localhost:8000/user/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
        })
        return await response.json()
}





// Services for cart    
export async function addCartAPI(data){
    var response = await fetch("http://localhost:8000/cart",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data.payload)
        })
        return await response.json()
}

export async function getCartAPI(){
    var response = await fetch("http://localhost:8000/cart")
        return await response.json()
}



export async function deleteCartAPI(data){
    var response = await fetch("http://localhost:8000/cart/"+data.payload.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
        })
        return await response.json()
}


export async function updateCartAPI(data){
    var response = await fetch("http://localhost:8000/cart/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
        })
        return await response.json()
}



// Services for wishlist    
export async function addWishlistAPI(data){
    var response = await fetch("http://localhost:8000/wishlist",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data.payload)
        })
        return await response.json()
}

export async function getWishlistAPI(){
    var response = await fetch("http://localhost:8000/wishlist")
        return await response.json()
}



export async function deleteWishlistAPI(data){
    var response = await fetch("http://localhost:8000/wishlist/"+data.payload.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
        })
        return await response.json()
}





// Services for checkout    
export async function addCheckoutAPI(data){
    var response = await fetch("http://localhost:8000/checkout",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data.payload)
        })
        return await response.json()
}

export async function getCheckoutAPI(){
    var response = await fetch("http://localhost:8000/checkout")
        return await response.json()
}



export async function deleteCheckoutAPI(data){
    var response = await fetch("http://localhost:8000/checkout/"+data.payload.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
        })
        return await response.json()
}


export async function updateCheckoutAPI(data){
    var response = await fetch("http://localhost:8000/checkout/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
        })
        return await response.json()
}
