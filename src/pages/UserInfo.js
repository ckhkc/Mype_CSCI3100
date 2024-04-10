//in-case they are useful
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";

import Header from "../components/Header";
// get user ID from the homepage, load the profile page according to the ID
function ProfilePage({ db }, userID) {
  // database items
  const [database, setDatabase] = useState([]);
  // save all the items' ID searched
  const [itemList, setItemList] = useState([]);
  // tagList, set in item container after retreiving data from database
  const [tagList, setTagList] = useState([]);

  return (
    <>
    <Router>
      <Header user={currentUser} setCurrentUser={setCurrentUser} />
      <div class="container my-5">
        <div class="row">
          <div class="col-2">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Profile</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Product</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Shopping Cart</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Order tracking</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Currency</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Preference</a>
              </li>
            </ul>
          </div>
          <div class="col-1">
            <div class="vl"></div>
          </div>
          <Routes>
          {/* display the user info */}
          <Route path="profile" element={<ProductUploadPage />} />
        </div>
      </div>
  )
}
