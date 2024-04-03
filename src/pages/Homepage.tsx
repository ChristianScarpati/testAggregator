import { Box, Heading } from "@chakra-ui/react";
import { AggregatorComponent, SearchFilterByKeyboard } from "../components";
import { Filter } from "../components/Filter";

const HomePage = () => {
	return (
		<Box>
			<Heading as='h1' size='2xl' textAlign='center' padding={4}>
				News Aggregator
			</Heading>
			<Filter />
			<SearchFilterByKeyboard />
			<AggregatorComponent />
		</Box>
	);
};

export default HomePage;
