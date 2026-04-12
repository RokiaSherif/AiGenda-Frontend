import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./home.css";
const Home = () => {
  return (
    <div className="app-container">
      <h1>home</h1>
      <Sidebar />
      <main className="main-content" style={{marginLeft:'50px'}}>
        <Header />
        <div className="page-container">
          <MainContent />
        </div>
      </main>
    </div>
  );
};
export default Home;
