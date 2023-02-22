import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

export const useRegister = () => {
  const addUser = async (user) => {
    const result = await axios.post("/api/register", user);
    console.log(result);
  };
  const queryClient = useQueryClient();

  return useMutation(addUser, {
    /**Optimistic Update Start */
    onSuccess: async () => {
      await queryClient.invalidateQueries("users");
    },
    // onMutate: async (newUser) => {
    //   await queryClient.cancelQueries("users");
    //   const previousHeroData = queryClient.getQueryData("users");
    //   queryClient.setQueryData("users", (oldQueryData) => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, { ...newUser }],
    //     };
    //   });
    //   return { previousHeroData };
    // },
    onError: (_err, _newTodo, context) => {
      queryClient.setQueryData("users", context.previousHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("users");
    },
    /**Optimistic Update End */
  });
};
