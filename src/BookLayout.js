import { Link, Outlet, useSearchParams } from "react-router-dom"

export default function BookLayout() {
  const [searchParams, setSearchParams] = useSearchParams();
  const number = searchParams.get('n');
  return (
    <>
      <Link to="/bookList/1">book 1</Link>
      <br />
      <Link to="/bookList/2">book 2</Link>
      <br />
      <Link to={`/bookList/${number}`}>book {number}</Link>
      <Outlet context={{data: "hello world!"}}/>
      <br />
      <input type="number" value={number} onChange={(e) => setSearchParams({n : e.target.value})} />
    </>
  )
}
