/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';

const UseDidMountEffect = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) func();
        else didMount.current = true;
    }, deps);
}

export default UseDidMountEffect