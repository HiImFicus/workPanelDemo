import {
	ActionIcon,
	Autocomplete,
	Burger,
	createStyles,
	Group,
	Header,
	rem,
} from "@mantine/core";
import { IconHelp, IconSearch } from "@tabler/icons-react";

import { HeaderThemeToggle } from "./HeaderThemeToggle";

const useStyles = createStyles((theme) => ({
	header: {
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
	},

	inner: {
		height: rem(56),
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},

	search: {
		[theme.fn.smallerThan("xs")]: {
			display: "none",
		},
	},
}));

interface HeaderSearchProps {
	navbarShow: boolean;
	navbarToggle(): void;
}

export function HeaderSearch({ navbarShow, navbarToggle }: HeaderSearchProps) {
	const { classes } = useStyles();

	return (
		<Header height={56} className={classes.header}>
			<div className={classes.inner}>
				<Group>
					<Burger opened={navbarShow} onClick={navbarToggle} size="sm" />
					<HeaderThemeToggle />
				</Group>

				<Group>
					<Autocomplete
						className={classes.search}
						placeholder="Search"
						icon={<IconSearch size="1rem" stroke={1.5} />}
						data={[
							"React",
							"Angular",
							"Vue",
							"Next.js",
							"Riot.js",
							"Svelte",
							"Blitz.js",
						]}
					/>
					<Group spacing={5}>
						<ActionIcon size="lg" color="indigo">
							<IconHelp size="1.625rem" />
						</ActionIcon>
					</Group>
				</Group>
			</div>
		</Header>
	);
}
