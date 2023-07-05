export const getComments = async () => {
   return [
      {
         id: "1",
         body: "First comment",
         username: "Jack",
         userId: "1",
         parentId: null,
         createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      // {
      //    id: "2",
      //    body: "Second comment",
      //    username: "John",
      //    userId: "2",
      //    parentId: null,
      //    createdAt: "2021-08-16T23:00:33.010+02:00",
      // },
      // {
      //    id: "3",
      //    body: "First comment first child",
      //    username: "John",
      //    userId: "2",
      //    parentId: "1",
      //    createdAt: "2021-08-16T23:00:33.010+02:00",
      // },
      // {
      //    id: "4",
      //    body: "Second comment second child",
      //    username: "John",
      //    userId: "2",
      //    parentId: "2",
      //    createdAt: "2021-08-16T23:00:33.010+02:00",
      // },
   ];
};

export const createComment = async (text) => {
   return {
      description: text,
      post: 0,
      user: "1",
   };
};

export const updateComment = async (text) => {
   return { text };
};

export const deleteComment = async () => {
   return {};
};
