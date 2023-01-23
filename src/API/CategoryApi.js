import axios from 'axios'
import { useState, useCallback, useEffect } from 'react'

const url = `https://dummyjson.com`

// custom hook
function useCategoryApi() {
    const [category,setCategory] = useState([])

    const readCategories = async () => {
        const out = await axios.get(`${url}/products/categories`);
        console.log('category =', out);
        setCategory(out.data)
    }

    const initValue = useCallback(() => {
        readCategories()
    },[])

    useEffect(() => {
        initValue()
    },[initValue])

    return{
        category: [category,setCategory]
    }
}

export default useCategoryApi
