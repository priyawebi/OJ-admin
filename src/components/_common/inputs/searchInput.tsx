import { useEffect, useState } from "react"

function SearchInput({ callFun }: any) {

    const [inputValue, setInputValue] = useState<null | string>(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            (inputValue !== null) ? callFun(inputValue) : null
        }, 1000)
        return () => clearTimeout(timer)
    }, [inputValue])

    return (
        <>
            <input
                type='text'
                className='form-control'
                onChange={(e) => { setInputValue(e.target.value) }}
            />
        </>
    )
}

export default SearchInput;