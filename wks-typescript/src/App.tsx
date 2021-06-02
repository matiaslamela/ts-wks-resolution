import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {User, fetchUsers} from './actions';
import {useSelector, useDispatch} from 'react-redux';
import {StoreState} from './reducers';
function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	const users: User[] = useSelector((state: StoreState) => state.users);

	return (
		<div className="App">
			{users.map((user) => (
				<div>{user.name}</div>
			))}
		</div>
	);
}

export default App;
