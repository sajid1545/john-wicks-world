import { useState } from 'react';
import './App.css';
import Guns from './Components/Guns/Guns';
import Navbar from './Components/Navbar/Navbar';

function App() {

  const [count, setCount] = useState(0);

  let increaseCount = ()=> setCount(count+1);

	return (
		<div className="App">
      <Navbar count={ count } />
      <Guns count={ increaseCount } />
		</div>
	);
}

export default App;
