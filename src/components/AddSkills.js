import React from 'react';
import { useState } from 'react';
import { useCreateSkillMutation } from '../app/services/queryApi';

export default function AddSkills() {
  const [createSkill, { isLoading }] = useCreateSkillMutation();
  const [newValue, setNewValue] = useState('value')

  function submitSkill(event) {
    event.preventDefault();
    createSkill(event.target['name'].value);
    event.target.reset();
    setNewValue('')
  }
  const change = (e) => {
    setNewValue(e.target.value)
  };
  return (
    <form onSubmit={(e) => submitSkill(e)}>
      <h3>Add Newew Skill</h3>
      <div>
        <label htmlFor='name'>Title:</label>{' '}
        <input type='text' id='name' onChange={change} />
        {newValue}
        <input type='submit'
          value='Add New Skill'
          disabled={isLoading}
        />
        {isLoading && ' Loading...'}

      </div>
    </form>
  );
}
