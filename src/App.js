import './App.css';
import Navbar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemListContainer/itemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from "./Components/Error/Error404"
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path={"/"} element={<ItemListContainer />} />
					<Route exact path={"/type/:id"} element={<ItemListContainer/>} />
					<Route exact path={"/item/:id"} element={<ItemDetailContainer/>} />
					<Route exact path={"*"} element={<Error404 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

