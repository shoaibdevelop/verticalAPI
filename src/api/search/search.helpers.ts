import { Search } from './search.entity';

type searchResult = {
    id: Number,
    title: String,
    photo: String,
    shortDescription: String
}

export const formatSearchResults = (found: Search[]) => {
    let searchResults = []
    found.forEach(search => {
        let result: searchResult = {
            id: search.id,
            title: search.title,
            photo: search.photo,
            shortDescription: search.shortDescription
        }
        searchResults.push(result)
    });
    return searchResults
}