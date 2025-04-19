import toast from "react-hot-toast";

//Step - 1 : add item to local storage
export const getFavorites = () => {
    const favorites = localStorage.getItem('favorites')
    if (favorites) return JSON.parse(favorites);
    return [];
}

export const addFavorite = phone => {
    const favorites = getFavorites();
    const isExist = favorites.find(p => p.id === phone.id)
    if (isExist) return toast.error('Already Exist')
    favorites.push(phone);
    toast.success('Added to Fav Successfully!!!')
    localStorage.setItem('favorites', JSON.stringify(favorites))
}

// Remove from Favorite
export const removeFromFavorite = (id) => {
    const favorites = getFavorites()
    const remainingFavorites = favorites.filter(phone => phone.id !== id)
    localStorage.setItem('favorites', JSON.stringify(remainingFavorites))
    toast.success('Removed Successfully!!!')

}

//===================================================//
// cart product for local storage
//Step - 1 : add item to local storage
export const getCart = () => {
    const cart = localStorage.getItem('cart')
    if (cart) return JSON.parse(cart);
    return [];
}

export const addToCart = phone => {
    const cart = getCart();
    const isExist = cart.find(p => p.id === phone.id)
    if (isExist) return toast.error('Already Exist')
    cart.push(phone);
    toast.success('Added to Cart Successfully!!!')
    localStorage.setItem('cart', JSON.stringify(cart))
}

// Remove from Favorite
export const removeFromCart = (id) => {
    const cart = getCart()
    const remainingCart = cart.filter(phone => phone.id !== id)
    localStorage.setItem('cart', JSON.stringify(remainingCart))
    toast.success('Removed Successfully!!!')

}