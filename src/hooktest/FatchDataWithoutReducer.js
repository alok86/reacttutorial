import axios from 'axios'
import React, { useState, useEffect } from 'react'


function FatchDataWithoutReducer() {
    const [loading, setLoding] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setLoding(false)
                setPost(response.data)
                setError('')
            })
            .catch(error => {
                setLoding(false)
                setPost({})
                setError('Something went wrong')
            })
    }, [])
    return (
        <div>
            {
                loading ?
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div> :
                    post.title
            }
            {
                error?error:null
            }
        </div>
    )
}

export default FatchDataWithoutReducer