import toast from "react-hot-toast";

// Get All Coffes Form local Storage
const getAllFavorites = () => {
    const all = localStorage.getItem('favorites');
    if(all) {
        const favorites = JSON.parse(all);
        return(favorites);
    }
    else {
        return []
    }
}


// Set Item In local Storage
const addFavorite = coffe => {
    const favorites = getAllFavorites();
    const isExit = favorites.find(item => item.id == coffe.id);
    if(isExit)return toast.error('Coffe All Ready Exists');
    favorites.push(coffe);
    localStorage.setItem('favorites', JSON.stringify(favorites))
    toast.success('Coffe Added Sucessfully');
}



// remove item from local storage
const removeFavorite = (id) => {
    const favorites = getAllFavorites();
    const remaining = favorites.filter(coffe => coffe.id != id);
     localStorage.setItem('favorites', JSON.stringify(remaining));
    toast.success('Coffe Remove Sucessfully');
}


export {addFavorite, getAllFavorites, removeFavorite}