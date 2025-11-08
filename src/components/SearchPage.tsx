import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../store'
import { fetchAnimes, setPage, setQuery } from '../features/animeSlice'
import {
  Box,
  Input,
  Button,
  Grid,
  Text,
  Spinner,
  Flex,
} from '@chakra-ui/react'
import AnimeCard from './AnimeCard'

export default function SearchPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { query, results, page, totalPages, loading, error } = useSelector(
    (state: RootState) => state.anime
  )

  // ✅ State lokal untuk debounce
  const [searchTerm, setSearchTerm] = useState(query)

  // ✅ Update query di Redux (debounce 500ms)
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Jika user hapus semua teks, tampilkan semua anime
      if (!searchTerm.trim()) {
        dispatch(setQuery('')) // reset query kosong
      } else if (searchTerm.trim() !== query) {
        dispatch(setQuery(searchTerm.trim()))
      }
    }, 500)

    return () => clearTimeout(timeout)
  }, [searchTerm, query, dispatch])

  // ✅ Fetch data setiap kali query atau page berubah
  useEffect(() => {
    // Jika belum ada query, fetch semua anime populer
    const q = query.trim()
    dispatch(fetchAnimes({ query: q || '', page }))
  }, [query, page, dispatch])

  return (
    <Box maxW="1000px" mx="auto" p={4}>
      <Flex gap={2} mb={6}>
        <Input
          placeholder="Search anime..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            dispatch(setPage(1)) // reset ke halaman 1 saat query berubah
          }}
        />
      </Flex>

      {loading && (
        <Flex justify="center" my={6}>
          <Spinner size="lg" />
        </Flex>
      )}

      {error && <Text color="red.400">Error: {error}</Text>}

      {!loading && results.length === 0 && (
        <Text>
          {query
            ? `No anime found for "${query}".`
            : 'No anime available.'}
        </Text>
      )}

      <Grid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap={6}
      >
        {results.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </Grid>

      {/* ✅ Pagination controls */}
      {results.length > 0 && (
        <Flex justify="center" align="center" mt={10} gap={3}>
          <Button
            colorScheme="teal"
            variant="outline"
            isDisabled={page === 1}
            onClick={() => dispatch(setPage(page - 1))}
          >
            Previous
          </Button>

          <Text fontSize="sm">
            Page {page} of {totalPages}
          </Text>

          <Button
            colorScheme="teal"
            variant="solid"
            isDisabled={page === totalPages}
            onClick={() => dispatch(setPage(page + 1))}
          >
            Next
          </Button>
        </Flex>
      )}
    </Box>
  )
}
