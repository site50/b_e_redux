import React from 'react';
import {
  useDeleteSkillMutation,
  useGetSkillsQuery
} from '../app/services/queryApi';

export default function Skills(props) {
  const { setSelectSkills } = props;

  const page = 0;
  const {
    data: posts = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetSkillsQuery(page);

  const [deleteSkill] = useDeleteSkillMutation();


  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>{error.status}</div>;
  }

  return (
    <div>
      <ul>
        {posts.map((sk) => (
          <li key={sk.id}>
            {sk.id} - {sk.name}{' '}
            <button onClick={() => setSelectSkills(sk)}>change ckill</button>{' '}
            <button onClick={() => deleteSkill(sk.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
