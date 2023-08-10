import axios from 'axios'
import React , {useState , useEffect} from 'react'


function UseEffectExample6() {
    const[post , setPost] = useState({})
    const[postid , setPostid] = useState(1)
    const[clickid , setClickid] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${clickid}`)
        .then(res=>{
            //console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })

    },[clickid])

    const clickHandler = ()=>{
       
        setClickid(postid)
       

    }
  return (
    <div>
        <input type='text' className='form-control' value={postid} onChange={e=>setPostid(e.target.value)} placeholder='enter post id here'/>
        <br/>
        <button className='btn btn-primary' onClick={clickHandler}>Get</button>
        <br/><br/>
        <h3 className='text text-success'>{post.title}</h3>
        <br/>
        <p className='text-text=primary'>{post.body}</p>

    </div>
  )
}

export default UseEffectExample6