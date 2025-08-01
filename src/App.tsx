import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./contexts/auth/AuthContext"
import { LoadingProvider } from "./contexts/LoadingContexts"
import RegisterPages from "./pages/RegisterPages"
import SinglePostPages from "./pages/SinglePostPages"
import { PostProvider } from "./contexts/posts/PostsContext"
import { FeedsProvider } from "./contexts/feed/FeedContext"
import { CommentsProvider } from "./contexts/comment/CommentContext"
import { SearchProvider } from "./contexts/search/SearchContext"
import { UserProvider } from "./contexts/user/UserContext"
import { ToastContainer } from "react-toastify"
import LoginPages from "./pages/LoginPages"
import ProtectedRoute from "./components/ProtectedRoute"
import HomePages from "./pages/HomePages"
import FeedsPages from "./pages/FeedsPages"
import SearchPages from "./pages/SearchPages"
import ProfilePages from "./pages/ProfilePages"
import UserProfilePages from "./pages/UserProfilePages"


function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <LoadingProvider>
        <AuthProvider>
          <UserProvider>
            <PostProvider>
              <FeedsProvider>
                <CommentsProvider>
                  <SearchProvider>
                      <Routes>
                        <Route path="/" element={<Navigate to={"/home"} />} />
                        <Route path="/login" element={<LoginPages />} />
                        <Route path="/register" element={<RegisterPages />} />

                        <Route
                          path="/home"
                          element={
                            <ProtectedRoute>
                              <HomePages />
                            </ProtectedRoute>
                          } />

                        <Route
                          path="/feeds"
                          element={
                            <ProtectedRoute>
                              <FeedsPages />
                            </ProtectedRoute>
                          } />

                        <Route
                          path="/post/:postId"
                          element={
                            <ProtectedRoute>
                              <SinglePostPages />
                            </ProtectedRoute>
                          } />

                        <Route
                          path="/search"
                          element={
                            <ProtectedRoute>
                              <SearchPages />
                            </ProtectedRoute>
                          } />

                        <Route
                          path="/profile"
                          element={
                            <ProtectedRoute>
                              <ProfilePages />
                            </ProtectedRoute>
                          } />

                        <Route
                          path="/user/:username"
                          element={
                            <ProtectedRoute>
                              <UserProfilePages />
                            </ProtectedRoute>
                          } />

                      </Routes>
                  </SearchProvider>
                </CommentsProvider>
              </FeedsProvider>
            </PostProvider>
          </UserProvider>
        </AuthProvider>
      </LoadingProvider>
    </BrowserRouter>
  )
}

export default App
