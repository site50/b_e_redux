import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from './actions';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.myReducer.users)
  return (<>
    <button onClick={() => dispatch(getUsersFetch())}>btn</button>
    <h1>{users.map(x => <div key={x.id}>{x.name}</div>)}</h1>
  </>
  );
}
export default App;




