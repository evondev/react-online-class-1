import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";

function UserList() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(`https://reqres.in/api/users`);
      return response.json();
    },
  });
  const users = data?.data || [];
  return (
    <div>
      {users &&
        users.length > 0 &&
        users.map((user: any, index: number) => {
          return <div key={index}>{user.first_name}</div>;
        })}
      <UserCreate></UserCreate>
    </div>
  );
}
function UserCreate() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (newUser: any) => {
      const response = await fetch(`https://reqres.in/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      return response.json();
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
  const handleAddNewUser = async (e: any) => {
    e.preventDefault();
    mutation.mutate({
      name: "evondev",
      job: "frontend developer",
    });
  };
  return (
    <form onSubmit={handleAddNewUser}>
      <input
        type="text"
        name="name"
        placeholder="Enter ur name"
        className="p-2 border border-gray-200 rounded-lg"
      />
      <input
        type="text"
        name="job"
        placeholder="Enter ur job"
        className="p-2 border border-gray-200 rounded-lg"
      />
      <button type="submit">Add new user</button>
    </form>
  );
}

export default UserList;
