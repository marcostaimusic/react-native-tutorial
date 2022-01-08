import { useEffect, useState, useRef } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from "../interfaces/reqRes.interface";

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  const pageRef = useRef(1);

  // useEffect(() => {
  //   reqResApi
  //     .get<ReqResList>("/users")
  //     .then((res) => {
  //       console.log(res.data.data);
  //       setUsers(res.data.data);
  //     })
  //     .catch(
  //       (err) => console.log(err) // oppure semplicemente .catch(console.log)
  //     );
  // }, []);

  //Refactoring del useEffect per caricare gli users:

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const res = await reqResApi.get<ReqResList>("/users", {
      params: {
        page: pageRef.current,
      },
    });

    if (res.data.data.length > 0) {
      setUsers(res.data.data);
      pageRef.current++;
    } else {
      alert("End of records");
    }
  };

  const renderItem = ({ id, first_name, avatar, email }: User) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt=""
            style={{ width: "3em", borderRadius: 100 }}
          />
        </td>
        <td>{first_name}</td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Users</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return renderItem(user);
          })}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={loadUsers}>
        Next
      </button>
    </>
  );
};
