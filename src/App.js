import { Link, Route, Routes, NavLink, useLocation } from "react-router-dom";
import Home from './pages/home';
import About from "./pages/about";
import NotFoundPage from "./pages/NotFoundPage";
import BookRoutes from "./BookRoutes";
import './styles.css'; //用NavLink可以自动使用style

function App(){
  const location = useLocation();

  return (
    <>
      {/* <Routes location="/bookList">
      <Route path="/bookList" element={<h1>Extra Content</h1>}/>
    </Routes> */}
      <nav>
        <ul>
          <li>
            {/* <NavLink to="/" style={((isActive) => {
              return isActive ? {color: 'red'} : {}
            })}>
              {({isActive}) => {
                return isActive ? "Active Home" : "Home"
              }}
            </NavLink> */}
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink end to="/bookList">Book List</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      {location.state}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* <Route path="/bookList" element={<BookList />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/newbook" element={<NewBook />} /> */}

        <Route path="/bookList/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App;