import { SimpleGrid } from "@mantine/core";
import {
	IconBrandStackoverflow,
	IconDeviceImacCheck,
	IconTrashX,
	IconTruckLoading,
} from "@tabler/icons-react";

import {
	ReportCard,
	ReportCardWhitChart,
	ReportCardWhitChartFour,
	ReportCardWhitChartThree,
	ReportCardWhitChartTwo,
} from "../../../common/components/ReportCard";

export default function Welcome() {
	return (
		<SimpleGrid cols={4}>
			<ReportCardWhitChartFour />
			<ReportCardWhitChart />
			<ReportCardWhitChartTwo />
			<ReportCardWhitChartThree />
			<ReportCard
				avatar={IconBrandStackoverflow}
				name="2000 in stock"
				title="Graphics cards"
				detail="100 SKU in stock"
				gradient={{ from: "indigo", to: "cyan" }}
			/>
			<ReportCard
				avatar={IconDeviceImacCheck}
				name="Readon R5 460"
				title="Quantity Top one"
				detail="Its number reached 500"
				gradient={{ from: "teal", to: "lime", deg: 105 }}
			/>
			<ReportCard
				avatar={IconTruckLoading}
				name="500 shipped out"
				title="Out of warehouse"
				detail="The highest is HD 8940"
				gradient={{ from: "teal", to: "blue", deg: 60 }}
			/>
			<ReportCard
				avatar={IconTrashX}
				name="Threw over 500"
				title="Amount of Broken"
				detail="Good product rate is 54%"
				gradient={{ from: "orange", to: "red" }}
			/>
		</SimpleGrid>
	);
}
