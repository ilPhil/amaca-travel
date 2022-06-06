import {createContext, useContext, useReducer} from "react";
import Reducers from './Reducers';

import {
    ADD_ACTIVITIES_ERROR,
    ADD_ACTIVITIES_REQUEST,
    ADD_ACTIVITIES_SUCCESS,
    DELETE_ACTIVITIES_ERROR,
    DELETE_ACTIVITIES_REQUEST,
    DELETE_ACTIVITIES_SUCCESS,
    FETCH_ALL_CITIES_ERROR,
    FETCH_ALL_CITIES_REQUEST,
    FETCH_ALL_CITIES_SUCCESS,
    FETCH_ALL_ACTIVITIES_ERROR,
    FETCH_ALL_ACTIVITIES_REQUEST,
    FETCH_ALL_ACTIVITIES_SUCCESS
} from "./constants";
import axios from "axios";

const defaultState = {
    loading: false,
    error: null,
    cities: [],
    activities: []
}

const Context = createContext(defaultState)
export const useStarActivitiesContext = () => useContext(Context)

export default ({children}) => {
    const [state, dispatch] = useReducer(Reducers, defaultState)

    const fetchAllCities = async () => {
      dispatch({type: FETCH_ALL_CITIES_REQUEST})
      try {
          const {data: cities} = await axios.get("https://api.musement.com/api/v3/cities")
          dispatch({type: FETCH_ALL_CITIES_SUCCESS, payload: cities})
      } catch (e) {
          dispatch({type: FETCH_ALL_CITIES_ERROR, payload: e})
      }
  }

    const fetchAllActivitiess = async () => {
        dispatch({type: FETCH_ALL_ACTIVITIES_REQUEST})
        try {
            const {data: activities} = await axios.get("https://api.musement.com/api/v3/activities/{activityUuid}")
            dispatch({type: FETCH_ALL_ACTIVITIES_SUCCESS, payload: activities})
        } catch (e) {
            dispatch({type: FETCH_ALL_ACTIVITIES_ERROR, payload: e})
        }
    }

    const addActivities = async (activity) => {
        dispatch({type: ADD_ACTIVITIES_REQUEST})
        try {
            const {data} = await axios.post('https://api.musement.com/api/v3/activities/{activityUuid}', activity)
            dispatch({type: ADD_ACTIVITIES_SUCCESS, payload: data})
        } catch (e) {
            dispatch({type: ADD_ACTIVITIES_ERROR, payload: e})
        }
    }

    const deleteActivities = async (Uuid) => {
        dispatch({type: DELETE_ACTIVITIES_REQUEST})
        try {
            const {status} = await axios.delete(`https://api.musement.com/api/v3/activities/${Uuid}`)
            if (status === 200) {
                dispatch({type: DELETE_ACTIVITIES_SUCCESS, payload: id})
            } else {
                throw new Error('Delete Failed')
            }
        } catch (e) {
            dispatch({type: DELETE_ACTIVITIES_ERROR, payload: e})
        }
    }


    const value = {state, fetchAllActivitiess,fetchAllCities, addActivities, deleteActivities}

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}