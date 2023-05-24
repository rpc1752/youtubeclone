import React, { useEffect, useContext } from "react";
import { context } from "../context/contextApi";
import LeftNav from "./LeftNav";
const Feed = () => {
	return (
		<div className="flex flex-row h-[calc(100% - 56px)]">
			<LeftNav></LeftNav>
		</div>
	);
};

export default Feed;