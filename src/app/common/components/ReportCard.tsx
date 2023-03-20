import {
	ActionIcon,
	Card,
	Group,
	Menu,
	Progress,
	rem,
	Text,
} from "@mantine/core";
import { IconDots, IconEye, IconFileZip, IconTrash } from "@tabler/icons-react";

export default function ReportCard() {
	return (
		<Card withBorder shadow="sm" radius="md">
			<Card.Section inheritPadding py="xs">
				<Group position="apart">
					<Text weight={500}>Review pictures</Text>
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

			<Card.Section inheritPadding mt="sm" pb="md">
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
				/>{" "}
			</Card.Section>
		</Card>
	);
}
