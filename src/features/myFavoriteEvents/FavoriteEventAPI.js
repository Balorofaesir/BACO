const API_URL = process.env.REACT_APP_API_URL;

export function getFavsUserEvents() {
  const token = localStorage.getItem('token')
  return fetch(`${API_URL}/api/events/`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
}

export function createNewUsersFavoriteEvent(values) {
  const token = localStorage.getItem('token')
  return fetch(`${API_URL}/api/favs/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(values),
  }).then((res) => res.json());
}
