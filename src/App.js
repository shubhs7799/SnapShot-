import React from "react";
import { HashRouter as Router ,Route, Routes, Navigate , useNavigate} from "react-router-dom";
import { PhotoContextProvider } from "./context/PhotoContext";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";


const App = () => {
  const navigate = useNavigate();

  // Prevent page reload, clear input, set URL and push history on submit
  const handleSubmit = (e, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    const url = `/search/${searchInput}`;
    navigate(url);
  };

  return (
    <PhotoContextProvider>
        <div className="container">
          <Header handleSubmit={handleSubmit} />
          <Routes>
            <Route path="/" element={<Navigate to="/mountain" />} />
            <Route path="/mountain" element={<Item searchTerm="mountain" />} />
            <Route path="/beach" element={<Item searchTerm="beach" />} />
            <Route path="/bird" element={<Item searchTerm="bird" />} />
            <Route path="/food" element={<Item searchTerm="food" />} />
            <Route path="/search/:searchInput" element={<Search />} />
            <Route element={<NotFound />} />
          </Routes>
        </div>
    </PhotoContextProvider>

  );
};


export default App;

















// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Header from "./components/Header";
// import Item from "./components/Item";
// import Search from "./components/Search";
// import NotFound from "./components/NotFound";
// import {PhotoContextProvider}  from "./context/PhotoContext";


// function App() {
//   // Prevent page reload, clear input, set URL and push history on submit
//   const handleSubmit = (e, history, searchInput) => {
//     e.preventDefault();
//     e.currentTarget.reset();
//     let url = `/search/${searchInput}`;
//     history.push(url);
//   };

//   return (
//     <PhotoContextProvider>
//       <Router basename="/SnapScout">
//         <div className="container">
//           <Route
//             render={props => (
//               <Header
//                 handleSubmit={handleSubmit}
//                 history={props.history}
//               />
//             )}
//           />
//           <Routes>
//             <Route
//               exact
//               path="/"
//               render={() => <Navigate to="/mountain" />}
//             />
//             <Route
//               path="/mountain"
//               render={() => <Item searchTerm="mountain" />}
//             />
//             <Route
//               path="/beach"
//               render={() => <Item searchTerm="beach" />}
//             />
//             <Route
//               path="/bird"
//               render={() => <Item searchTerm="bird" />}
//             />
//             <Route
//               path="/food"
//               render={() => <Item searchTerm="food" />}
//             />
//             <Route
//               path="/search/:searchInput"
//               render={props => (
//                 <Search searchTerm={props.match.params.searchInput} />
//               )}
//             />
//             <Route component={NotFound} />
//           </Routes>
//         </div>
//       </Router>
//     </PhotoContextProvider>
//   );

//   // return(
//   //   <Router>
//   //   <Routes><Route
//   //   render={props => (
//   //     <Header
//   //       handleSubmit={handleSubmit}
//   //       history={props.history}
//   //     />
//   //   )}
//   // />
//   //            <Route
//   //             exact
//   //             path="/"
//   //             render={() => <Navigate to="/mountain" />}
//   //           />
//   //           <Route
//   //             path="/mountain"
//   //             render={() => <Item searchTerm="mountain" />}
//   //           />
//   //           <Route
//   //             path="/beach"
//   //             render={() => <Item searchTerm="beach" />}
//   //           />
//   //           <Route
//   //             path="/bird"
//   //             render={() => <Item searchTerm="bird" />}
//   //           />
//   //           <Route
//   //             path="/food"
//   //             render={() => <Item searchTerm="food" />}
//   //           />
//   //           <Route
//   //             path="/search/:searchInput"
//   //             render={props => (
//   //               <Search searchTerm={props.match.params.searchInput} />
//   //             )}
//   //           />
//   //           <Route component={NotFound} />
//   //           </Routes>
//   //   </Router>
//     // )
// }

// export default App;




