import '@styles/App.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const Page1 = () => <h1>1페이지입니다.</h1>
const Page2 = () => <h1>2페이지입니다.</h1>

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    Component:Page1,
  },
   {
    path: "/page2",
    Component:Page2,
  },
]);
  return (
    <>
      <RouterProvider router={router} />,
    </>
  )
}

export default App

