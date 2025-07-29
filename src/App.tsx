import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./contexts/auth/AuthContext"
import { LoadingProvider } from "./contexts/LoadingContexts"
import RegisterPages from "./pages/RegisterPages"
import SinglePostPages from "./pages/SinglePostPages"


function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <AuthProvider>
          <Routes>
            <Route path="/register" element={<RegisterPages />} />
            <Route path="/post/:userId" element={<SinglePostPages/>} />
          </Routes>
        </AuthProvider>
      </LoadingProvider>
    </BrowserRouter>
  )
}

export default App
