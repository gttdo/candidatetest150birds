import { useState } from 'react';

const useToggle = (initialVal = false) => {
    const [toggle, setToggle] = useState(initialVal)
    // define toggle function
    const toggleHandler = () => {
        setToggle(!toggle)
    }
    return [toggle, toggleHandler]
}

export default useToggle;