import React from 'react'
import { Anime } from '../types'
import { Box, Image, Text, Link as CLink } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export default function AnimeCard({ anime }: { anime: Anime }) {
const img = anime.images?.jpg?.image_url
return (
<Box borderWidth={1} borderRadius="md" overflow="hidden" p={3}>
<Link to={`/anime/${anime.mal_id}`}>
<Image src={img} alt={anime.title} objectFit="cover" height="180px" width="100%" />
</Link>
<Box mt={2}>
<CLink as={Link} to={`/anime/${anime.mal_id}`} fontWeight="semibold">
{anime.title}
</CLink>
<Text fontSize="sm" noOfLines={3}>{anime.synopsis ?? 'No synopsis available.'}</Text>
</Box>
</Box>
)
}