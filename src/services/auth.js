const API_URL = process.env.REACT_APP_API_URL;

export async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/local/login`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({ email, password })
  });
  if (res.ok) return res.json();
  throw new Error('Bad Credentials');
}

export async function signup(userData) {
  const res = await fetch(`${API_URL}/api/users`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(userData)
  });
  if (res.ok) return res.json();
  throw new Error('Email already taken!');
}
