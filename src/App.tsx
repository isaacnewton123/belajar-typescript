import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./contexts/auth/AuthContext"
import { LoadingProvider } from "./contexts/LoadingContexts"
import RegisterPages from "./pages/RegisterPages"


function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <AuthProvider>
          <Routes>
            <Route path="/register" element={<RegisterPages />} />
          </Routes>
        </AuthProvider>
      </LoadingProvider>
    </BrowserRouter>
  )
}

export default App
