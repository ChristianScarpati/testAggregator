import { Box, Text, Image, Badge, Link, Stack, Card, CardBody, Divider } from "@chakra-ui/react";
import { getTimeAndDayFromDate, truncateString } from "../../utils";

type NewspaperComponentProps = {
	title: string;
	url: string;
	publishedAt: Date;
	description: string;
	content: string;
	author: string;
	articleUrlImage: string;
	source: string;
	thumbnail?: {
		thumbnail: string;
	};
};

const NewspaperComponent = ({
	articleUrlImage,
	source,
	author,
	content,
	description,
	publishedAt,
	title,
	url,
}: NewspaperComponentProps) => {
	return (
		<Card bg='darkgray' p={4} justifyContent='space-between' display={"flex"}>
			{description && <Text>description: {description}</Text>}
			{source && (
				<Stack direction='row' justifyContent='space-between' alignItems='center' mb={4}>
					<Badge colorScheme='blue'>
						<Text
							borderRadius={"md"}
							color={"black.400"}
							fontSize={"sm"}
							fontWeight={"bold"}
						>
							source: {source}
						</Text>
					</Badge>
				</Stack>
			)}
			{title && (
				<Text mt={1} fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={2}>
					{title}
				</Text>
			)}
			{articleUrlImage ? (
				<CardBody
					pt={5}
					pb={5}
					display={"flex"}
					justifyContent={"center"}
					aspectRatio={"16:9"}
				>
					<Image
						src={articleUrlImage}
						alt={title}
						height={"200px"}
						width={"100%"}
						fit={"cover"}
						referrerPolicy={"no-referrer"}
						loading={"lazy"}
						borderRadius={"lg"}
					/>
				</CardBody>
			) : (
				<Text
					height={"200px"}
					maxW={"100%"}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					No image available
				</Text>
			)}

			{author && (
				<Stack direction='row'>
					<Badge left={"1"} display={"flex"}>
						<Link
							href={`https:${author}`}
							isExternal
							target='_blank'
							rel='noopener noreferrer'
						>
							<Text fontWeight={"semibold"}>author: {author}</Text>
						</Link>
					</Badge>
				</Stack>
			)}

			{content && (
				<Text pt={4} pb={4} fontWeight='bold'>
					content: {truncateString(content, 200)}
					<Box
						w={"100%"}
						as='a'
						href={url}
						target='_blank'
						rel='noopener noreferrer'
						color={"blueviolet"}
					>
						Continue Reading
					</Box>
				</Text>
			)}

			<Divider mb={4} />

			{publishedAt && (
				<Stack direction='row' justifyContent='space-between' alignItems='center' mt={4}>
					<Text
						p={1}
						borderRadius={"md"}
						color={"black"}
						fontSize={"sm"}
						fontWeight={"bold"}
					>
						published at: {getTimeAndDayFromDate(publishedAt)}
					</Text>
				</Stack>
			)}

		</Card>
	);
};

export default NewspaperComponent;
