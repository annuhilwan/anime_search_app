import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import SearchPage from './components/SearchPage'
import DetailPage from './components/DetailPage'
import { Box, Container, Heading } from '@chakra-ui/react'


export default function App() {
return (
<Container maxW="container.lg" py={6}>
<Box mb={6} as="header">
<Heading size="lg">
<Link to="/">Anime Search</Link>
</Heading>
</Box>


<Routes>
<Route path="/" element={<SearchPage />} />
<Route path="/anime/:id" element={<DetailPage />} />
</Routes>
</Container>
)
}