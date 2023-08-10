import { useState } from 'react'

function useInput(initialstate) {
    const [value, setValue] = useState(initialstate)
    const reset = () => {
        setValue(initialstate)
    }
    const bind = {
        value : value,
        onChange: e => setValue(e.target.value)
    }
    return [value, bind, reset]
}
export default useInput