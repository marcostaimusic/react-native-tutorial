import { useState, useRef, useEffect } from "react";
import { User, ReqResList } from "../interfaces/reqRes.interface";
import { reqResApi } from "../api/reqRes";

export const useUsers = () => {
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
    } else {
      pageRef.current--;
      alert("End of records");
    }
  };

  const loadNext = async () => {
    pageRef.current++;
    loadUsers();
  };

  const loadPrevious = async () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      loadUsers();
    }
  };

  return {
    users,
    loadUsers,
    loadPrevious,
    loadNext,
  };
};
