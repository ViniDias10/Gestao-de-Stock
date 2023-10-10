import { RouterProvider } from "react-router-dom"
import router from "./routers"
import { StockContextProvider } from "./contexts/StockContext"

function App() {

  return (
    <StockContextProvider>
      <RouterProvider router={router} />
    </StockContextProvider>
  )
}

export default App 