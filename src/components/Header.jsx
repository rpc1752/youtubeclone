import React from "react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";
// import youtube from "../images/youtube.png";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose, CgProfile } from "react-icons/cg";

import { context } from "../context/contextApi";
import Loader from "../shared/Loader";
// import Loader from "../shared/loader";

const Header = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const { loading, mobileMenu, setMobileMenu } = useContext(context);
	const navigate = useNavigate();
	const searchQueryHandler = (event) => {
		if (
			event?.key === "Enter" ||
			(event === "searchButton" && searchQuery?.length > 0)
		) {
			navigate(`/searchResult/${searchQuery}`);
		}
	};

	const mobileMenuToggle = () => {
		setMobileMenu(!mobileMenu);
	};

	const { pathname } = useLocation();
	const pageName = pathname?.split("/")?.filter(Boolean)?.[0];
	return (
		<div className="stick top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
			{loading && <Loader />}

			<div className="flex h-5 items-center">
				{pageName !== "video" && (
					<div
						onClick={mobileMenuToggle}
						className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
					>
						{mobileMenu ? (
							<CgClose className="tex-white txt-xl"></CgClose>
						) : (
							<SlMenu className="tex-white txt-xl"></SlMenu>
						)}
					</div>
				)}
				<Link to="/" className="flex h-5">
					<img
						className="h-full hidden dark:md:block w-full"
						src={ytLogo}
						alt="youtubelogo"
					/>
					<img
						className="h-full md:hidden"
						src={ytLogoMobile}
						alt="youtubelogo"
					/>
				</Link>
			</div>
			<div className="group flex items-center ">
				<div className="flex h-8 md:h-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
					<div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
						<IoIosSearch className="text-white" />
					</div>
					<input
						type="text"
						className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
						onChange={(e) => searchQuery(e.target.value)}
						onKeyUp={searchQueryHandler}
						value={searchQuery}
					/>
				</div>
				<button className="w-[40px] md:w-[60px] flex items-center justify-center border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]">
					<IoIosSearch className="text-white" />
				</button>
			</div>
			<div className="flex items-center">
				<div className="hidden md:flex">
					<div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
						<RiVideoAddLine className="text-white text-xl cursor-pointer" />
					</div>
					<div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
						<FiBell className="text-white text-xl cursor-pointer" />
					</div>
					<div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
						<CgProfile className="text-white text-xl cursor-pointer" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
