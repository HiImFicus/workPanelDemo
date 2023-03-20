import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Container, Flex } from "@mantine/core";

import { HeaderSearch } from "./layouts/Header";
import { NavbarNested } from "./layouts/Navbar";

export default function Home() {
	const [navbarShow, setNavbarShow] = useState(true);

	return (
		<Container fluid px={0}>
			<Flex>
				{navbarShow && <NavbarNested />}
				<Flex direction="column" w="100%">
					<HeaderSearch
						navbarShow={navbarShow}
						navbarToggle={() => setNavbarShow(!navbarShow)}
					/>
					<Container fluid mt="md">
						<Outlet />
					</Container>
				</Flex>
			</Flex>
		</Container>
	);
}
