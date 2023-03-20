import { SimpleGrid } from "@mantine/core";

import ReportCard from "../../../common/components/ReportCard";

export default function Welcome() {
	return (
		<SimpleGrid cols={4}>
			<ReportCard />
			<ReportCard />
			<ReportCard />
			<ReportCard />
		</SimpleGrid>
	);
}
