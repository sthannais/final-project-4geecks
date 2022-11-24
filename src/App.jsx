import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Municipality from "./views/Municipality";
import People from "./views/People";
import Login from "./views/Login";
import PeopleRegister from "./views/PeopleRegister";
import MuniRegister from "./views/MuniRegister";
import NotFound from "./views/NotFound";
import Forgot from "./views/Forgot";
import User from "./views/User";
import UserAdmin from "./views/UserAdmin";
import UserMuni from "./views/UserMuni";
import UserPeople from "./views/UserPeople";
import Map from "./views/sideviews/Map";
import List from "./views/sideviews/List";
import Mod from "./views/sideviews/Mod";
import Profile from "./views/sideviews/Profile";
import Settings from "./views/sideviews/Settings";

const App = ({ copyright }) => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
				<Route path="/municipality" element={<Municipality />} />
				<Route path="/municipality/register" element={<MuniRegister />} />
				<Route path="/people" element={<People />} />
				<Route path="/people/register" element={<PeopleRegister />} />
				<Route path="/change/password" element={<Forgot />} />
				<Route path="/user">
					<Route index element={<User />} />
					<Route path="admin" element={<UserAdmin />}>
						<Route path="map" element={<Map />} />
						<Route path="list" element={<List />} />
						<Route path="mod" element={<Mod />} />
						<Route path="profile" element={<Profile />} />
						<Route path="settings" element={<Settings />} />
					</Route>
					<Route index element={<User />} />
					<Route path="muni" element={<UserMuni />}>
						<Route path="map" element={<Map />} />
						<Route path="list" element={<List />} />
						<Route path="profile" element={<Profile />} />
						<Route path="settings" element={<Settings />} />
					</Route>
					<Route index element={<User />} />
					<Route path="people" element={<UserPeople />}>
						<Route path="map" element={<Map />} />
						<Route path="list" element={<List />} />
						<Route path="profile" element={<Profile />} />
						<Route path="settings" element={<Settings />} />
					</Route>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;