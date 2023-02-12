import { useState } from "react";
import Hero from "./Hero";
import MovieCard from "./MovieCard";





export default function Home() {
    const [getSearchQueryValue, setGetSearchQueryValue] = useState<string>("")

    return (
        <>
        <Hero setGetSearchQueryValue={setGetSearchQueryValue}/>
        <MovieCard getSearchQueryValue={getSearchQueryValue} />
        </>
    )
}