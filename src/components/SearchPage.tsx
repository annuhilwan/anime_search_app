import React, { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { fetchAnimes, setQuery, setPage } from '../features/animeSlice'
import { Box, Input, SimpleGrid, Button, Spinner, Text, Flex } from '@chakra-ui/react'
import AnimeCard from './AnimeCard'
import { useDebouncedValue } from '../hooks/useDebouncedValue'


export default function SearchPage() {
const dispatch = useAppDispatch()
const { query, page, results, loading } = useAppSelector((s) => s.anime)
const [local, setLocal] = useState(query)
const debounced = useDebouncedValue(local, 250)
const lastThunkRef = useRef<any>(null)


useEffect(() => {
// update redux query when debounced changes
dispatch(setQuery(debounced))


// cancel previous thunk if exists
if (lastThunkRef.current?.abort) lastThunkRef.current.abort()
lastThunkRef.current = dispatch(fetchAnimes({ query: debounced, page }))


return () => {
if (lastThunkRef.current?.abort) lastThunkRef.current.abort()
}
}, [debounced, page])


useEffect(() => {
// whenever debounced query changes, reset to page 1
dispatch(setPage(1))
}, [debounced])


return (
<Box>
<Input placeholder="Search anime..." value={local} onChange={(e) => setLocal(e.target.value)} mb={4} />


{loading ? (
<Flex justify="center" py={10}><Spinner size="xl" /></Flex>
) : results.length === 0 ? (
<Text>No results. Try another query.</Text>
) : (
<SimpleGrid columns={[1,2,3]} spacing={4}>
{results.map((a) => (
<AnimeCard key={a.mal_id} anime={a} />
))}
</SimpleGrid>
)}


<Flex justify="space-between" align="center" mt={6}>
<Button onClick={() => dispatch(setPage(Math.max(1, page - 1)))}>Prev</Button>
<Text>Page: {page}</Text>
<Button onClick={() => dispatch(setPage(page + 1))}>Next</Button>
</Flex>
</Box>
)
}