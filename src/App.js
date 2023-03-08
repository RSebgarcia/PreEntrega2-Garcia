import './App.css';
import Navbar from './Components/Navbar/navbar';
import ItemListContainer from './Components/ItemListContainer/itemListContainer';


function App() {
	return (
		
	<div>
    	<Navbar/>
		<div>
    		<ItemListContainer greeting="Bienvenido Al item List!" />
    	</div>
	</div>
	);
}

export default App;
