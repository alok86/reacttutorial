import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const initialStage = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (stage, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'Something Went Wrong',
                post: {}
            }
        default:
            return stage
    }
}

function FatchDataWithReducer() {
    const [stage, dispatch] = useReducer(reducer, initialStage)

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, [])

    return (
        <div>
            {
                stage.loading ?
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only"></span>
                    </div> :
                    <><h3 className='text text-secondary'>{stage.post.title}</h3><span className='text text-success'>{stage.post.body}</span></>
                    
            }
            {
                stage.error?stage.error:null
            }

        </div>
    )
}

export default FatchDataWithReducer