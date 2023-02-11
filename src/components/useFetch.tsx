import axios from "axios"
import  { useEffect, useState} from "react"

//custom reusable fetch hook for multiple API endpoints

const url = `https://api.themoviedb.org/4/list/1?api_key=${process.env.REACT_APP_API_Key}`

export default function useFetch() {
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((err) => {
            setError(err)
        }).finally(()=> {
            setLoading(false)
        })
    }, []);

    return {data, loading, error}
}