const createUser = (newUsername, hashedPassword) => {
  return fetch(`/api/create`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response.json()
  })
}

const login = (newUsername, hashedPassword) => {
  return fetch(`/api/create`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response.json()
  })
}
