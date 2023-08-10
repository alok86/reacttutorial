type statustype ={
    status:'Loading'|'Fatch'|'Error'
}

export const Status = (props : statustype) => {
    let message:string=''
    if(props.status==='Loading')
    message='loading...'
    else if(props.status==='Fatch')
    message='Data is fatched'
    else if(props.status==='Error')
    message='error is occored'
  return (
    <>
    <h5>{message}</h5>
    <p>In this example we can see that the props can be ristrict to choose among the given option</p>
    </>
  )
}
