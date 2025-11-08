import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { Anime, Genre } from '../types'
import {
  Box,
  Heading,
  Image,
  Text,
  Button,
  Flex,
  Badge,
  Stack,
  Spinner,
  useColorModeValue,
  Divider,
  Icon,
} from '@chakra-ui/react'
import { CalendarIcon, TimeIcon, StarIcon, ArrowBackIcon } from '@chakra-ui/icons'

export default function DetailPage() {
  const { id } = useParams()
  const [anime, setAnime] = useState<Anime | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    setError(null)
    axios
      .get(`https://api.jikan.moe/v4/anime/${id}`)
      .then((r) => setAnime(r.data.data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [id])

  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.200')

  if (loading)
    return (
      <Flex justify="center" align="center" h="80vh">
        <Spinner size="xl" color="teal.400" />
      </Flex>
    )

  if (error)
    return (
      <Box textAlign="center" mt={20}>
        <Text color="red.400" fontSize="lg">
          Error: {error}
        </Text>
      </Box>
    )

  if (!anime)
    return (
      <Box textAlign="center" mt={20}>
        <Text>No anime found.</Text>
      </Box>
    )

  return (
    <Box p={{ base: 4, md: 10 }} bg={bgColor} minH="100vh">
      <Button
        as={Link}
        to="/"
        colorScheme="teal"
        leftIcon={<ArrowBackIcon />}
        mb={6}
      >
        Back
      </Button>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        bg={cardBg}
        borderRadius="xl"
        boxShadow="lg"
        overflow="hidden"
        p={{ base: 4, md: 8 }}
        gap={6}
      >
        {/* Poster */}
        <Box flexShrink={0} textAlign="center">
          <Image
            src={anime.images?.jpg?.image_url}
            alt={anime.title}
            borderRadius="lg"
            width={{ base: '100%', md: '320px' }}
            objectFit="cover"
            shadow="md"
          />
          {anime.score && (
            <Badge colorScheme="teal" mt={4} fontSize="0.9em">
              ⭐ Score: {anime.score}
            </Badge>
          )}
        </Box>

        {/* Detail Info */}
        <Box flex="1">
          <Heading size="lg" color={textColor}>
            {anime.title}
          </Heading>
          {anime.title_japanese && (
            <Text fontSize="sm" color="gray.500" fontStyle="italic">
              {anime.title_japanese}
            </Text>
          )}

          <Stack direction="row" mt={3} spacing={2} flexWrap="wrap">
            {anime.genres?.slice(0, 4).map((genre: Genre) => (
              <Badge key={genre.name} colorScheme="purple" px={2} py={1}>
                {genre.name}
              </Badge>
            ))}
          </Stack>

          <Divider my={4} />

          <Flex
            wrap="wrap"
            gap={4}
            fontSize="sm"
            color="gray.500"
            justify="flex-start"
          >
            <Flex align="center" gap={1}>
              <Icon as={CalendarIcon} />{' '}
              {anime.aired?.prop?.from?.year ?? 'Unknown Year'}
            </Flex>
            <Flex align="center" gap={1}>
              <Icon as={TimeIcon} /> {anime.duration ?? 'N/A'}
            </Flex>
            <Flex align="center" gap={1}>
              <Icon as={StarIcon} /> {anime.rating ?? 'Unrated'}
            </Flex>
            <Text>Episodes: {anime.episodes ?? 'N/A'}</Text>
            <Text>Type: {anime.type ?? 'Unknown'}</Text>
            <Text>Studio: {anime.studios?.[0]?.name ?? 'N/A'}</Text>
          </Flex>

          <Divider my={4} />

          <Text fontSize="md" color={textColor} lineHeight="taller">
            {anime.synopsis ?? 'No synopsis available.'}
          </Text>

          {anime.trailer?.url && (
            <Box mt={6}>
              <Heading size="sm" mb={2}>
                Watch Trailer
              </Heading>
              <Box as="iframe"
                width="100%"
                height="360"
                src={anime.trailer.embed_url}
                borderRadius="lg"
                allowFullScreen
              />
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  )
}

export interface Genre {
  name: string;
}