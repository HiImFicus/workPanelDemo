import { createBrowserRouter } from "react-router-dom";

import Welcome from "./content/home/content/Welcome";
import Home from "./content/home/Home";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		children: [
			{
				path: "",
				element: <Welcome />,
			},
		],
	},
]);
