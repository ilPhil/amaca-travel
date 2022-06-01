const CITIES_URL = "https://api.musement.com/api/v3/cities/";
const ACTIVITIES_URL = "https://api.musement.com/api/v3/activities/{activityUuid}";
const CART_URL = "https://api.musement.com/api/v3/carts/";



const getCities = async (type,cityId=" ") => {
  const res = await fetch(`${CITIES_URL}${cityId}`);
  return await res.json();

};

const getActivities = async (type,activityUuid=" ") => {
    const res = await fetch(`${ACTIVITIES_URL}${activityUuid}`);
    return await res.json();
  };

  const getCart = async (type,cartUuid=" ") => {
    const res = await fetch(`${CART_URL}${cartUuid}`);
    return await res.json();
  };

  export {getCities, getActivities, getCart};