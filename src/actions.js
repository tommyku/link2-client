export const LOGIN = 'LOGIN';

export function login({ username, password }) {
  return (dispatch) => {
    const body = JSON.stringify({ username, password });
    return fetch('http://localhost:3000/login', { method: 'POST', body })
      .then((res) => (res.ok ? loginSuccess(res) : loginFailure(res)))
  }
}

function loginSuccess(res) {
  console.log(res);
  res.json().then(console.log);
}

function loginFailure(res) {
}
