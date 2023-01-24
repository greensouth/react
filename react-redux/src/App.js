import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setUser,unsetUser } from './reducers/user/userSlice';

function App() {
  const {email, fullName} = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <>
    <h1>Holi {email}</h1>
    <p>Usuario: {fullName}</p>
    <button onClick={()=>{
      dispatch(setUser({
        email:    "alex@greensouth.net",
        fullName: "Alex Fernández",
        token:    "12345"
      }))
    }}>Cambiar User</button>
    <button onClick={()=>{
      dispatch(unsetUser());
    }}>Unset User</button>
    </>
  );
}

export default App;
