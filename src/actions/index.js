const API_KEY = '81c02e10-19a3-11e9-a436-ede6838aae81';
const BASE_URL = 'https://api.harvardartmuseums.org/'
// https://github.com/harvardartmuseums/api-docs

export const FETCH_IMAGES_REQUEST = 'FETCH_IMAGES_REQUEST';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE';

export function fetchImagesAsync(place){
  return (dispatch) => {
    dispatch(fetchImagesRequest());
    const PLACE_URL = `${BASE_URL}place?apikey=${API_KEY}&q=name:${place}&size=1`;
    fetch(PLACE_URL)
      .then(res => res.json())
      .then((res) => {
        const OBJECT_URL = `${BASE_URL}object?apikey=${API_KEY}&place=${res.records[0].id}&q=people.role:Artist AND imagepermissionlevel:0`
        return fetch(OBJECT_URL)
          .then(result => result.json())
          .then((result) => {
            dispatch(fetchImagesSuccess(result))
  				})
      })
  }
}

function fetchImagesSuccess(data) {
  return {
    type: FETCH_IMAGES_SUCCESS,
    data: data.records
  };
}

function fetchImagesRequest() {
  return {
    type: FETCH_IMAGES_REQUEST,
  };
}