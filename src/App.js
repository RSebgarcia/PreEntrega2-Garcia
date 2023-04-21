import './App.css';
import Navbar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemListContainer/itemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from "./Components/Error/Error404"
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import { CartProvider } from './Components/context/CartContext';
import Checkout from './Components/Checkout/Checkout';

function App() {

	
	return (
		<CartProvider>
			<BrowserRouter>
				<Navbar />			
				<Routes>
					<Route exact path={"/"} element={<ItemListContainer />} />
					<Route exact path={"/type/:id"} element={<ItemListContainer/>} />
					<Route exact path={"/item/:id"} element={<ItemDetailContainer/>} />
					<Route exact path={"*"} element={<Error404 />} />
					<Route exact path={"/checkout"} element={<Checkout />} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;

