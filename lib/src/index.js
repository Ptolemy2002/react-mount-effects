import { useEffect, useRef } from "react";

export function useMountEffect(callback) {
    useEffect(() => {
        callback();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
}

export function useUnmountEffect(callback) {
    useEffect(() => callback, []); // eslint-disable-line react-hooks/exhaustive-deps
}

export function useDelayedEffect(callback, deps=[], delay=0) {
    const changeCount = useRef(0);

    useEffect(() => {
        changeCount.current++;
        if (changeCount.current > delay + 1) callback(changeCount, () => changeCount.current = 0);
    }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}