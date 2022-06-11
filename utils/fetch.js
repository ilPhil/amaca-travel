const CITIES_URL = "https://api.musement.com/api/v3/cities/";
const ACTIVITIES_URL = "https://api.musement.com/api/v3/activities/";

const getCities = async (cityId = " ") => {
  const res = await fetch(`${CITIES_URL}${cityId}`);
  return await res.json();
};

const getActivities = async (activityUuid = " ") => {
  const res = await fetch(`${ACTIVITIES_URL}${activityUuid}`);
  return await res.json();
};

export { getCities, getActivities };
