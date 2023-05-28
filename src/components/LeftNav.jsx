import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../utils/constants";
import LeftNavMenuItem from "./LeftMenuNavItem";
import { context } from "../context/contextApi";
import LeftMenuNavItem from "./LeftMenuNavItem";

const LeftNav = () => {
	const { selectCategories, setSelectCategories, mobileMenu } =
		useContext(context);

	const navigate = useNavigate();

	const clickHandler = (name, type) => {
		switch (type) {
			case "category":
				return setSelectCategories(name);
			case "home":
				return setSelectCategories(name);
			case "menu":
				return false;
			default:
				break;
		}
	};
	return (
		<div className="md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-0 md:translate-x-0 transition-all">
			<div className="flex px-5 flex-col">
				{categories.map((item, ind) => {
					return (
						<React.Fragment key={item.name}>
							<LeftMenuNavItem
								key={ind}
								text={item.type === "home" ? "Home" : item.name}
								icon={item.icon}
								action={() => {
									clickHandler(item.name, item.type);
									navigate("/");
								}}
								className={
									selectCategories === item.name
										? "bg-white/[0.15]"
										: ""
								}
							/>
							{item.divider && (
								<hr className="my-5 border-white/[0.2]" />
							)}
						</React.Fragment>
					);
				})}
				<hr className="my-5 border-white/[0.2]" />
				<div className="text-white/[0.5]">Cloned By : Rpc</div>
			</div>
		</div>
	);
};

export default LeftNav;
