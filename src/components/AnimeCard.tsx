import React from 'react'
import { Anime } from '../types'
import {
  Box,
  Image,
  Text,
  Link as CLink,
  Badge,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function AnimeCard({ anime }: { anime: Anime }) {
  const img = anime.images?.jpg?.large_image_url ?? anime.images?.jpg?.image_url ?? '/placeholder.jpg'

  const bgCard = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.200')

  return (
    <Box
      as={Link}
      to={`/anime/${anime.mal_id}`}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={bgCard}
      boxShadow="md"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'xl',
      }}
      _active={{
        transform: 'scale(0.98)',
      }}
    >
      <Image
        src={img}
        alt={anime.title}
        objectFit="cover"
        height="260px"
        width="100%"
        borderTopRadius="lg"
      />

      <Box p={4}>
        <Flex justify="space-between" align="center" mb={2}>
          <Text
            fontWeight="bold"
            fontSize="md"
            color={textColor}
            noOfLines={1}
          >
            {anime.title}
          </Text>
          {anime.score && (
            <Badge colorScheme="teal" fontSize="0.8em" ml={2}>
              ⭐ {anime.score}
            </Badge>
          )}
        </Flex>

        <Text fontSize="sm" color="gray.500" noOfLines={3}>
          {anime.synopsis ?? 'No synopsis available.'}
        </Text>

        <Flex mt={3} justify="space-between" align="center">
          <Badge colorScheme="purple" variant="subtle">
            {anime.type ?? 'Unknown'}
          </Badge>
          <Text fontSize="xs" color="gray.400">
            {anime.episodes ? `${anime.episodes} eps` : 'N/A'}
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}
