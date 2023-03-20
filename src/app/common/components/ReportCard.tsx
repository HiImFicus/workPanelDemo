import { Bars, Chart, Lines } from "rumble-charts";

import {
	ActionIcon,
	Card,
	createStyles,
	Group,
	Menu,
	Progress,
	rem,
	Text,
	ThemeIcon,
} from "@mantine/core";
import { IconDots, IconEye, IconFileZip, IconTrash } from "@tabler/icons-react";

export function ReportCardWhitChart() {
	return (
		<Card withBorder shadow="sm" radius="md">
			<Card.Section inheritPadding py="xs">
				<Group position="apart">
					<Text weight={500}>Report Card</Text>
					<Menu withinPortal position="bottom-end" shadow="sm">
						<Menu.Target>
							<ActionIcon>
								<IconDots size="1rem" />
							</ActionIcon>
						</Menu.Target>

						<Menu.Dropdown>
							<Menu.Item icon={<IconFileZip size={rem(14)} />}>
								Download zip
							</Menu.Item>
							<Menu.Item icon={<IconEye size={rem(14)} />}>
								Preview all
							</Menu.Item>
							<Menu.Item icon={<IconTrash size={rem(14)} />} color="red">
								Delete all
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				</Group>
			</Card.Section>

			<Text mt="sm" color="dimmed" size="sm">
				<Text component="span" inherit color="blue">
					200+ images uploaded
				</Text>
				since last visit, review them to select which one should be added to
				your gallery
			</Text>

			<Card.Section inheritPadding mt="sm" pb="sm">
				<Progress
					radius="xl"
					size="xl"
					sections={[
						{
							value: 33,
							color: "pink",
							label: "Documents",
							tooltip: "Document – 33 Gb",
						},
						{
							value: 28,
							color: "grape",
							label: "Apps",
							tooltip: "Apps – 28 Gb",
						},
						{
							value: 25,
							color: "violet",
							label: "Other",
							tooltip: "Other – 25 Gb",
						},
					]}
				/>
			</Card.Section>
		</Card>
	);
}

export function ReportCardWhitChartTwo() {
	const series = [
		{
			data: [
				1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
				1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
			],
		},
	];

	return (
		<Card withBorder shadow="sm" radius="md">
			<Card.Section inheritPadding py="xs">
				<Group position="apart">
					<Text weight={500}>Report Card</Text>
					<Menu withinPortal position="bottom-end" shadow="sm">
						<Menu.Target>
							<ActionIcon>
								<IconDots size="1rem" />
							</ActionIcon>
						</Menu.Target>

						<Menu.Dropdown>
							<Menu.Item icon={<IconFileZip size={rem(14)} />}>
								Download zip
							</Menu.Item>
							<Menu.Item icon={<IconEye size={rem(14)} />}>
								Preview all
							</Menu.Item>
							<Menu.Item icon={<IconTrash size={rem(14)} />} color="red">
								Delete all
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				</Group>
			</Card.Section>

			<Text mt="sm" color="dimmed" size="sm">
				<Text component="span" inherit color="blue">
					200+ since last visit,
				</Text>
				review them to select which one should be added to your gallery
			</Text>

			<Card.Section inheritPadding mt="sm" pb="sm">
				<Chart width={227} height={50} minY={0} series={series}>
					<Bars opacity={1} barWidth={5} colors={["#1520A6"]} />
				</Chart>
			</Card.Section>
		</Card>
	);
}

export function ReportCardWhitChartThree() {
	const series = [
		{
			data: [
				1, 2, 2, 1, 2, 1, 1, 3, 3, 1, 4, 3, 4, 2, 3, 3, 2, 3, 2, 2, 3, 3, 2, 1,
				1, 1, 3, 2, 1, 3, 1, 4, 3, 3, 2, 3,
			],
		},
	];

	return (
		<Card withBorder shadow="sm" radius="md">
			<Card.Section inheritPadding py="xs">
				<Group position="apart">
					<Text weight={500}>Report Card</Text>
					<Menu withinPortal position="bottom-end" shadow="sm">
						<Menu.Target>
							<ActionIcon>
								<IconDots size="1rem" />
							</ActionIcon>
						</Menu.Target>

						<Menu.Dropdown>
							<Menu.Item icon={<IconFileZip size={rem(14)} />}>
								Download zip
							</Menu.Item>
							<Menu.Item icon={<IconEye size={rem(14)} />}>
								Preview all
							</Menu.Item>
							<Menu.Item icon={<IconTrash size={rem(14)} />} color="red">
								Delete all
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				</Group>
			</Card.Section>

			<Text mt="sm" color="dimmed" size="sm">
				<Text component="span" inherit color="blue">
					200+ since last visit,
				</Text>
				review them to select which one should be added to your gallery
			</Text>

			<Card.Section inheritPadding mt="sm" pb="sm">
				<Chart width={227} height={50} minY={0} series={series}>
					<Lines
						opacity={1}
						interpolation="basis"
						asAreas={false}
						colors={["#1520A6"]}
					/>
				</Chart>
			</Card.Section>
		</Card>
	);
}

export function ReportCardWhitChartFour() {
	const series = [
		{
			data: [
				4, 2, 2, 1, 2, 1, 1, 3, 3, 1, 4, 3, 4, 2, 3, 3, 2, 3, 2, 2, 3, 3, 2, 1,
				1, 1, 3, 2, 1, 3, 1, 4, 3, 3, 2, 3,
			],
		},
	];

	return (
		<Card withBorder shadow="sm" radius="md">
			<Card.Section inheritPadding py="xs">
				<Group position="apart">
					<Text weight={500}>Report Card</Text>
					<Menu withinPortal position="bottom-end" shadow="sm">
						<Menu.Target>
							<ActionIcon>
								<IconDots size="1rem" />
							</ActionIcon>
						</Menu.Target>

						<Menu.Dropdown>
							<Menu.Item icon={<IconFileZip size={rem(14)} />}>
								Download zip
							</Menu.Item>
							<Menu.Item icon={<IconEye size={rem(14)} />}>
								Preview all
							</Menu.Item>
							<Menu.Item icon={<IconTrash size={rem(14)} />} color="red">
								Delete all
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				</Group>
			</Card.Section>

			<Text mt="sm" color="dimmed" size="sm">
				<Text component="span" inherit color="blue">
					200+ since last visit,
				</Text>
				review them to select which one should be added to your gallery
			</Text>

			<Card.Section inheritPadding mt="sm" pb="sm">
				<Chart width={230} height={50} minY={0} series={series}>
					<Lines
						opacity={0.6}
						interpolation="basis"
						asAreas={true}
						colors={["#1520A6"]}
					/>
				</Chart>
			</Card.Section>
		</Card>
	);
}

const useStylesForReportCard = createStyles((theme) => ({
	icon: {
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[3]
				: theme.colors.gray[5],
	},

	name: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},
}));

interface ReportCardProps {
	avatar: React.FC<any>;
	name: string;
	title: string;
	detail: string;
	gradient: { from: string; to: string; deg?: number };
}

export function ReportCard({
	avatar: Icon,
	name,
	title,
	detail,
	gradient,
}: ReportCardProps) {
	const { classes } = useStylesForReportCard();
	return (
		<Card withBorder shadow="sm" radius="md">
			<div>
				<Group noWrap>
					<ThemeIcon size={64} variant="gradient" gradient={gradient}>
						<Icon size="10rem" />
					</ThemeIcon>
					<div>
						<Text fz="xs" tt="uppercase" fw={700} c="dimmed">
							{title}
						</Text>

						<Text fz="lg" fw={500} className={classes.name}>
							{name}
						</Text>

						<Group noWrap spacing={10} mt={5}>
							<Text fz="xs" c="dimmed">
								{detail}
							</Text>
						</Group>
					</div>
				</Group>
			</div>
		</Card>
	);
}
