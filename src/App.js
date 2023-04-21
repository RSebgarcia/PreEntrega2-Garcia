import './App.css';
import Navbar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemListContainer/itemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from "./Components/Error/Error404"
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import { CartProvider } from './Components/context/CartContext';
import Cart from './Components/Cart/Cart';
import BuyerForm from './Components/Form/Form';
function App() {


	return (
		<CartProvider>

				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route exact path={"/"} element={<ItemListContainer />} />
						<Route exact path={"/type/:id"} element={<ItemListContainer />} />
						<Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
						<Route exact path={"*"} element={<Error404 />} />
						<Route exact path={"/Cart"} element={<Cart />} />
						<Route exact path={"/Form"} element={<BuyerForm />} />
					</Routes>
				</BrowserRouter>

		</CartProvider>
	);
}

export default App;

