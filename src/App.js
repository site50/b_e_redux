import Skills from './components/Skills';
import AddSkills from './components/AddSkills';
import React from 'react';
import styles from './App.module.css';
import ChangeSkills from './components/ChangeSkills';
import { useState } from 'react';

function App() {
  const [selectSkills, setSelectSkills] = useState(null);

  return (
    <div className={styles.wrapper}>
      <Skills setSelectSkills={setSelectSkills} />
      <AddSkills />
      <ChangeSkills selectSkills={selectSkills} />
    </div>
  );
}

export default App;
