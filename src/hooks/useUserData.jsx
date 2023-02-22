import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

export const useGetUsers = (onSuccess, onError) => {
  const fetchUsers = async () => {
    return await axios.get("/api/users");
  };
  return useQuery("users", fetchUsers);
};

export const useGetUser = (onSuccess, id) => {
  const fetchUser = async () => {
    return await axios.get(`/api/users/${id}`);
  };
  return useQuery(["user", id], fetchUser);
};

export const useAddUsers = (onSuccess, onError) => {
  const addUsers = async () => {
    return await axios.get("/users");
  };
  return useMutation(addUsers, {
    onSuccess: async () => {
      await QueryClient.invalidateQueries("users");
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  const deleteUser = async (id) => {
    console.log(id);
    const result = await axios.delete(`/users/del/${id}`);
    console.log(result);
  };

  return useMutation(deleteUser, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("users");
    },
    onMutate: async (deletedUser, edUser) => {
      await queryClient.cancelQueries("users");
      const previousHeroData = queryClient.getQueryData("users");
      queryClient.setQueryData("users", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, { ...deletedUser }],
        };
      });
      return { previousHeroData };
    },
  });
};
