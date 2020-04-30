export const findRestaurantByName = ({entities: {restaurants}}, restaurantName) => {
    let restaurantArray = Object.values(restaurants)
    
    for(let i = 0; i < restaurantArray.length; i++) {
        if (restaurantArray[i].name === restaurantName) return restaurantArray[i]
    }

    return null
}

export const selectFilters = (state, filter) => {
    return [...new Set(Object.values(state.entities.restaurants).map((res) => (res.filter)))]
}

