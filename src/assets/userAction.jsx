// TEST
export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        const userData = data.map((user) => {
          return {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
          };
        });
        dispatch(fetchUsersSuccess(userData));
        // const usersObject = { users: userData };
        // console.log(usersObject);
      })
      .catch((error) => fetchUsersFailure(error));
  };
};
