import { Routes, Route } from "react-router-dom"
import { routes } from "./utils/routes"
import ItemListContainer from "./pages/ItemListContainer"
import Layout from "./Layout/Layout"
import ItemDetailContainer from "./pages/ItemDetailContainer"
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path={routes.home} element={<Layout />}>
          <Route path={routes.home} element={<ItemListContainer />} />
          <Route path={`${routes.category}/:categoryId`} element={<ItemListContainer />} />
          <Route path={routes.detail} element={<ItemDetailContainer />} />
          <Route path={routes.noPage} element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
