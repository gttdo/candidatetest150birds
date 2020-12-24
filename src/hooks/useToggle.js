import { useState } from 'react';
// call useState, 'reserve piece of state'

const useToggle = (initialVal = false) => {
    // generalizing state & setState names to make hook reusable.
    const [toggle, setToggle] = useState(initialVal)
    // define toggle function
    const toggleHandler = () => {
        setToggle(!toggle)
    }

    // return an array of the piece of state and a function to toggle it.
    return [toggle, toggleHandler]
}

export default useToggle;