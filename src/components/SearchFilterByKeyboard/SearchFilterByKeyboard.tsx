import { useContext } from "react";
import { AggregatorContext } from "../../context/AggregatorProvider";
import { Input, Stack } from "@chakra-ui/react";

function SearchFilterByKeyboard() {
	const { searchArticles, setSearchArticles } = useContext(AggregatorContext);

	return (
		<Stack spacing={3} mt={5} alignItems={"center"} display={"flow-root"}>
			<Input
				value={searchArticles}
				width={"50%"}
				border={"1px solid black"}
				placeholder='Search articles by Title'
				size='md'
				variant='outline'
				onChange={(e) => setSearchArticles(e.target.value)}
			/>
		</Stack>
	);
}

export default SearchFilterByKeyboard;
