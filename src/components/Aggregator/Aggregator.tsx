import { Container, SimpleGrid } from "@chakra-ui/react";
import { useContext } from "react";
import { AggregatorContext } from "../../context/AggregatorProvider";
import NewspaperComponent from "../NewsPaper/NewsPaper";

const AggregatorComponent = () => {
	const { searchArticlesDataByTitle: articlesData } = useContext(AggregatorContext);

	return (
		<Container mt={100} maxW='95%'>
			<SimpleGrid minChildWidth='300px' spacing='40px'>
				{articlesData.length > 0 &&
					articlesData.map((newspaper) => {
						return (
							<NewspaperComponent
								key={newspaper.title}
								source={newspaper.source}
								articleUrlImage={newspaper.articleUrlImage ?? newspaper.media ?? ""}
								author={newspaper.author ?? ""}
								content={newspaper.content ?? ""}
								description={newspaper.description ?? ""}
								publishedAt={newspaper.publishedAt}
								title={newspaper.title}
								url={newspaper.url}
							/>
						);
					})}
			</SimpleGrid>
		</Container>
	);
};

export default AggregatorComponent;
