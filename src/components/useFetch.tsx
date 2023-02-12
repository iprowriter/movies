import axios from "axios"
import  { useEffect, useState} from "react"

//custom reusable fetch hook for multiple API endpoints



export default function useFetch(url: string) {
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