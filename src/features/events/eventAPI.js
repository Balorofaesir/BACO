const API_URL = process.env.REACT_APP_API_URL;

export async function getEvents() {
  try {
    const response = await fetch(`${API_URL}/api/events/all`);
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (err) {
    throw new Error(err);
  }
}
export function getEspecificEvent(id) {
  return fetch(`${API_URL}/api/events/all/${id}`).then((response) => response.json());
}
export function getEventsByCreator() {
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

export function createNewEvent(values) {
  const token = localStorage.getItem('token')
  return fetch(`${API_URL}/api/events/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(values),
  }).then((res) => res.json());
}

