export const fetchRestaurants = () => (
    $.ajax({
      method: 'GET',
      url: '/api/restaurants'
    })
  );


export const fetchRestaurant = name => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: `/api/restaurants/${name}`
  })
}