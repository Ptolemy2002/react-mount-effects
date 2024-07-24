import { useEffect } from "react";

export function useMountEffect(callback) {
    useEffect(callback, []); // eslint-disable-line react-hooks/exhaustive-deps
}

export function useUnmountEffect(callback) {
    useEffect(() => callback, []); // eslint-disable-line react-hooks/exhaustive-deps
}