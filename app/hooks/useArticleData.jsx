import { useQuery, useMutation, useQueryClient } from "react-query";
// import useAxiosPrivate from "./useAxiosPrivate";
import axios from "axios";

export const useGetArticles = () => {
  const fetchArticles = async () => {
    const result = await axios.get("/api/articles");
    return result;
  };
  return useQuery("articles", fetchArticles, {
    // select: data => {
    //   const superHeroNames = data.data.map(hero => hero.name)
    //   return superHeroNames
    // }
  });
};

export const useGetArticle = (id) => {
  const fetchArticle = async () => {
    return await axios.get(`/api/articles/${id}`);
  };
  return useQuery(["article", id], fetchArticle);
};

export const useAddArticle = () => {
  const addArticle = async (article) => {
    console.log(article);
    const result = await axios.post("/articles", article);
  };
  const queryClient = useQueryClient();

  return useMutation(addArticle, {
    /**Optimistic Update Start */
    onMutate: async (newArticle) => {
      await queryClient.cancelQueries("articles");
      const previousHeroData = queryClient.getQueryData("articles");
      queryClient.setQueryData("articles", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, { ...newArticle }],
        };
      });
      return { previousHeroData };
    },
    onError: (_err, _newTodo, context) => {
      queryClient.setQueryData("articles", context.previousHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("articles");
    },
    /**Optimistic Update End */
  });
};

export const useUpdateArticle = () => {
  const axiosPrivate = useAxiosPrivate();
  const updateArticle = async (article) => {
    console.log(article);
    const result = await axiosPrivate.put("/articles", article);
  };
  const queryClient = useQueryClient();

  return useMutation(updateArticle, {
    /**Optimistic Update Start */
    onSuccess: async () => {
      await queryClient.invalidateQueries("articles");
    },

    onMutate: async (updatedArticle) => {
      await queryClient.cancelQueries("articles");
      const previousHeroData = queryClient.getQueryData("articles");
      queryClient.setQueryData("articles", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, { ...updatedArticle }],
        };
      });
      return { previousHeroData };
    },
    onError: (_err, _newTodo, context) => {
      queryClient.setQueryData("articles", context.previousHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("articles");
    },
    /**Optimistic Update End */
  });
};

export const useDeleteArticle = () => {
  const axiosPrivate = useAxiosPrivate();
  const deleteArticle = async (id) => {
    console.log(id);
    await axiosPrivate.delete(`/articles/del/${id}`);
  };
  const queryClient = useQueryClient();

  return useMutation(
    deleteArticle,
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries("articles");
      },
    },
    {
      /**Optimistic Update Start */
      onMutate: async (deletedArticle) => {
        await queryClient.cancelQueries("articles");
        const previousHeroData = queryClient.getQueryData("articles");
        queryClient.setQueryData("articles", (oldQueryData) => {
          return {
            ...oldQueryData,
            data: [...oldQueryData.data, { ...deletedArticle }],
          };
        });
        return { previousHeroData };
      },
      onError: (_err, _newTodo, context) => {
        queryClient.setQueryData("articles", context.previousHeroData);
      },
      onSettled: () => {
        queryClient.invalidateQueries("articles");
      },
      /**Optimistic Update End */
    }
  );
};
