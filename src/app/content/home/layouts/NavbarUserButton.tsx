import {
	createStyles,
	Group,
	Text,
	ThemeIcon,
	UnstyledButton,
	UnstyledButtonProps,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
	user: {
		display: "block",
		width: "100%",
		padding: theme.spacing.md,
		color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

		"&:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[8]
					: theme.colors.gray[0],
		},
	},
}));

interface UserButtonProps extends UnstyledButtonProps {
	avatar: React.FC<any>;
	name: string;
	email: string;
	icon?: React.ReactNode;
}

export function UserButton({
	avatar: Icon,
	name,
	email,
	icon,
	...others
}: UserButtonProps) {
	const { classes } = useStyles();

	return (
		<UnstyledButton className={classes.user} {...others}>
			<Group>
				<ThemeIcon
					size="lg"
					variant="gradient"
					gradient={{ from: "orange", to: "red", deg: 105 }}
				>
					<Icon size="1.2rem" />
				</ThemeIcon>

				<div style={{ flex: 1 }}>
					<Text size="sm" weight={500}>
						{name}
					</Text>

					<Text color="dimmed" size="xs">
						{email}
					</Text>
				</div>

				{icon || <IconChevronRight size="0.9rem" stroke={1.5} />}
			</Group>
		</UnstyledButton>
	);
}
