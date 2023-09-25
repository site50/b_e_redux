import React from 'react';
import { useUpdateSkillMutation } from '../app/services/queryApi';

export default function ChangeSkills(props) {
  const { selectSkills = null } = props;
  const [updSkill, { isLoading }] = useUpdateSkillMutation();
  function submitSkill(event) {
    event.preventDefault();
    updSkill({ id: selectSkills.id, name: event.target['name'].value });
    event.target.reset();
  }
  return (
    <form onSubmit={(e) => submitSkill(e)}>
      <div>
        {selectSkills ? <span>Update skills:  {selectSkills.name}
          <input type='text' id='name'  /></span> : 'No Selected Skill'}
        <input
          type='submit'
          value='Update Skill'
          disabled={!selectSkills || isLoading}
        />
        {isLoading && ' Loading...'}
      </div>
      <br />
      <div>
      </div>
    </form>
  );
}
