import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Add from "./components/pages/Add/Add";
import About from "./components/pages/About/About";
import Edit from "./components/pages/Edit/Edit";
import SinglePages from "./components/pages/SinglePages/SinglePages";
import NotFound from "./components/pages/NotFound/NotFound";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import Categories from "./components/pages/Categories/Categories";
import SinglePostCategory from "./components/features/PostCategory/SinglePostCategory";
import NotFoundCategory from "./components/pages/NotFoundCategory/NotFoundCategory";

function App() {
  return (
    <main>
        <Container>
          <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/post/add" element={<Add/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/post/edit/:id" element={<Edit/>} />
                <Route path="/post/:postId" element={<SinglePages/>} />
                <Route path="/categories" element={<Categories/>} />
                <Route path="/category/:category" element={<SinglePostCategory/>} />
                <Route path="/not-found" element={<NotFoundCategory/>}/>
                <Route path="*" element = {<NotFound/>} />
            </Routes>
          <Footer/>
        </Container>
    </main>
  );
}

export default App;
