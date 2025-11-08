import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { Anime } from '../types'
import { Box, Heading, Image, Text, Button } from '@chakra-ui/react'


export default function DetailPage() {
const { id } = useParams()
const [anime, setAnime] = useState<Anime | null>(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState<string | null>(null)


useEffect(() => {
if (!id) return
setLoading(true)
setError(null)
axios.get(`https://api.jikan.moe/v4/anime/${id}`)
.then((r) => setAnime(r.data.data))
.catch((e) => setError(e.message))
.finally(() => setLoading(false))
}, [id])


if (loading) return <Text>Loading...</Text>
if (error) return <Text>Error: {error}</Text>
if (!anime) return <Text>No anime found</Text>


return (
<Box>
<Button as={Link} to="/">Back</Button>
<Heading mt={4}>{anime.title}</Heading>
<Image src={anime.images?.jpg?.image_url} alt={anime.title} maxW="300px" mt={4} />
<Text mt={4}>{anime.synopsis}</Text>
<Text mt={2}>Episodes: {anime.episodes ?? 'N/A'}</Text>
<Text>Score: {anime.score ?? 'N/A'}</Text>
</Box>
)
}