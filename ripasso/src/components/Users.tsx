// import { useEffect, useState, useRef } from "react";
// import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from "../interfaces/reqRes.interface";
import { useUsers } from "../hooks/useUsers";

export const Users = () => {
  const { users, loadUsers, loadPrevious, loadNext } = useUsers();
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
      <button className="btn btn-primary" onClick={loadPrevious}>
        Previous
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={loadNext}>
        Next
      </button>
    </>
  );
};
