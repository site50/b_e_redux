import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const queryApi = createApi({
  reducerPath: 'queryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005/' }),
  tagTypes: ['Skills'],
  endpoints: (builder) => ({

    getSkills: builder.query({
      query: () => '/posts',
      providesTags: ['Skills'],
    }),

    createSkill: builder.mutation({
      query: (name) => ({
        url: 'posts',
        method: 'POST',
        body: { name },
      }),
      invalidatesTags: ['Skills'],
    }),

    updateSkill: builder.mutation({
      query: ({ id, name }) => ({
        url: `posts/${id}`,
        method: 'PUT',
        body: { name },
      }),
      invalidatesTags: ['Skills'],
    }),

    deleteSkill: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Skills'],
    }),
  }),
});

export const {
  useGetSkillsQuery,
  useCreateSkillMutation,
  useUpdateSkillMutation,
  useDeleteSkillMutation,
} = queryApi;
