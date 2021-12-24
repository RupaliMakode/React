import { useEffect, useState } from "react";
import { getUserById, getUserList } from "./User.service";

export default () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUserList().then((response) => {
      if (response && response.data) {
        setUserList(response.data);
      }
    });
  }, []);
  const onGetDetailsClickHandler = (userId) => {
    getUserById(adminId).then((response) => {
      if (response && response.data) {
        alert("Name: " + response.data.name);
      }
    });
  };

  return (
    <>
      <h1 className="text-centre"> UserList</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Password</th>
            <th>Moblie Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {adminList.map((user) => {
            return (
              <tr key={user.userId}>
                <td>{user.name}</td>
                <td>{user.password}</td>
                <td>{user.moblie_number}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => {
                      onGetDetailsClickHandler(user.userId);
                    }}
                  >
                    Get Details
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
