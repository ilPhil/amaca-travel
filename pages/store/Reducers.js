import {
    FETCH_ALL_ACTIVITIES_ERROR,
    FETCH_ALL_ACTIVITIES_REQUEST,
    FETCH_ALL_ACTIVITIES_SUCCESS,
    ADD_ACTIVITY_ERROR,
    ADD_ACTIVITY_REQUEST,
    ADD_ACTIVITY_SUCCESS,
    DELETE_ACTIVITY_ERROR,
    DELETE_ACTIVITY_REQUEST,
    DELETE_ACTIVITY_SUCCESS,
    DISCARD_ERROR,
    FETCH_ALL_CITIES_ERROR,
    FETCH_ALL_CITIES_REQUEST,
    FETCH_ALL_CITIES_SUCCESS
} from "./constants";


export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL_ACTIVITIES_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case FETCH_ALL_ACTIVITIES_SUCCESS:
            return {
                ...state,
                loading: false,
                activities: action.payload
            };

        case FETCH_ALL_ACTIVITIES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };




        case FETCH_ALL_CITIES_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case FETCH_ALL_CITIES_SUCCESS:
            return {
                ...state,
                loading: false,
                cities: action.payload
            };

        case FETCH_ALL_CITIES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case ADD_ACTIVITY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_ACTIVITY_SUCCESS:
            return {
                ...state,
                loading: false,
                activities: [...state.activities, action.payload]
            }

        case ADD_ACTIVITY_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_ACTIVITY_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_ACTIVITY_SUCCESS:
            return {
                ...state,
                loading: false,
                activities: state.activities.filter(starship => starship.id !== action.payload)
            }

        case DELETE_ACTIVITY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case DISCARD_ERROR:
            return {
                ...state,
                error: undefined
            }

        default :
            return state
    }

}