import {Routes, Route} from 'react-router-dom';
import BookList from "./pages/bookList"
import Book from "./pages/book"
import NewBook from "./pages/newBook"
import BookLayout from "./BookLayout"


export default function BookRoutes(){
  return (
    <>
      <BookLayout />
      <Routes>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
        <Route path="newbook" element={<NewBook />} />
      </Routes>
    </>
  )
}