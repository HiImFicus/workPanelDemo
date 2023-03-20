import {
	Badge,
	Code,
	createStyles,
	Group,
	Navbar,
	rem,
	ScrollArea,
} from "@mantine/core";
import {
	IconAdjustments,
	IconCalendarStats,
	IconDeviceDesktopQuestion,
	IconFileAnalytics,
	IconGauge,
	IconLock,
	IconPresentationAnalytics,
	IconUserShield,
} from "@tabler/icons-react";

import { LinksGroup } from "./NavbarLinksGroup";
import { UserButton } from "./NavbarUserButton";

const mockdata = [
	{
		label: "Dashboard",
		icon: IconGauge,
		initiallyOpened: true,
		links: [{ label: "Home", link: "/" }],
	},
	{
		label: "GPU Management",
		icon: IconDeviceDesktopQuestion,
		initiallyOpened: false,
		links: [
			{ label: "Overview", link: "/" },
			{ label: "Forecasts", link: "/" },
			{ label: "Outlook", link: "/" },
			{ label: "Real time", link: "/" },
		],
	},
	{
		label: "Releases",
		icon: IconCalendarStats,
		links: [
			{ label: "Upcoming releases", link: "/" },
			{ label: "Previous releases", link: "/" },
			{ label: "Releases schedule", link: "/" },
		],
	},
	{ label: "Analytics", icon: IconPresentationAnalytics },
	{ label: "Contracts", icon: IconFileAnalytics },
	{ label: "Settings", icon: IconAdjustments },
	{
		label: "Security",
		icon: IconLock,
		links: [
			{ label: "Enable 2FA", link: "/" },
			{ label: "Change password", link: "/" },
			{ label: "Recovery codes", link: "/" },
		],
	},
];

const useStyles = createStyles((theme) => ({
	navbar: {
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
		paddingBottom: 0,
	},

	header: {
		padding: theme.spacing.md,
		paddingTop: 0,
		marginLeft: `calc(${theme.spacing.md} * -1)`,
		marginRight: `calc(${theme.spacing.md} * -1)`,
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		borderBottom: `${rem(1)} solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},

	links: {
		marginLeft: `calc(${theme.spacing.md} * -1)`,
		marginRight: `calc(${theme.spacing.md} * -1)`,
	},

	linksInner: {
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,
	},

	footer: {
		marginLeft: `calc(${theme.spacing.md} * -1)`,
		marginRight: `calc(${theme.spacing.md} * -1)`,
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},
}));

export function NavbarNested() {
	const { classes } = useStyles();
	const links = mockdata.map((item) => (
		<LinksGroup {...item} key={item.label} />
	));

	return (
		<Navbar
			height="100vh"
			width={{ sm: 300 }}
			p="md"
			className={classes.navbar}
		>
			<Navbar.Section className={classes.header}>
				<Group position="apart">
					<Badge
						radius="xs"
						variant="gradient"
						gradient={{ from: "teal", to: "lime", deg: 105 }}
					>
						IQA Work Panel
					</Badge>

					<Code sx={{ fontWeight: 700 }}>DEMO-v0.0.1</Code>
				</Group>
			</Navbar.Section>

			<Navbar.Section grow className={classes.links} component={ScrollArea}>
				<div className={classes.linksInner}>{links}</div>
			</Navbar.Section>

			<Navbar.Section className={classes.footer}>
				<UserButton
					avatar={IconUserShield}
					name="Ann Nullpointer"
					email="anullpointer@yahoo.com"
				/>
			</Navbar.Section>
		</Navbar>
	);
}