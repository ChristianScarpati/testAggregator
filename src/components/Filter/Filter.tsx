import React, { useContext, useEffect } from "react";
import { Box, Flex, Select, Text } from "@chakra-ui/react";
import { AggregatorContext } from "../../context/AggregatorProvider";

const Filter: React.FC = () => {
	const {
		filterByDate,
		filterBySource,
		setFilterByDate,
		setFilterBySource,
		handleFilterBySource,
		handleFilterByDate,
	} = useContext(AggregatorContext);

	const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFilterByDate(event.target.value);
	};

	const handleSourceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFilterBySource(event.target.value);
	};

	useEffect(() => {
		handleFilterByDate(filterByDate);
	}, [filterByDate]);

	useEffect(() => {
		handleFilterBySource(filterBySource);
	}, [filterBySource]);

	return (
		<Box p={4}>
			<Flex align='center' justify='center'>
				<Text color={"white"}>Filter by:</Text>
				<Flex>
					<Select
						sx={{ border: "1px solid black", color: "black" }}
						value={filterByDate}
						onChange={handleDateChange}
						mr={2}
						ml={5}
						w={"-webkit-fill-available"}
					>
						<option value=''>All Dates</option>
						<option value='today'>Today</option>
						<option value='thisWeek'>This Week</option>
						<option value='thisMonth'>This Month</option>
					</Select>
					<Select
						sx={{ border: "1px solid black", color: "black" }}
						value={filterBySource}
						onChange={handleSourceChange}
						w={"-webkit-fill-available"}
					>
						<option value=''>All Sources</option>
						<option value='Guardian'>Guardian</option>
						<option value='New York Times'>New York Times</option>
						<option value='Wall Street Journal'>Wall Street Journal</option>
					</Select>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Filter;
