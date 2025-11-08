export type Anime = {
mal_id: number
url: string
images: { jpg?: { image_url?: string } }
title: string
synopsis?: string
episodes?: number | null
score?: number | null
}


export type ApiResponse = {
data: Anime[]
pagination: {
last_visible_page: number
has_next_page: boolean
current_page: number
}
}