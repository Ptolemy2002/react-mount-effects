import { useState } from "react";
import { useMountEffect, useUnmountEffect } from "@ptolemy2002/react-mount-effects";

function App() {
    const [showA, setShowA] = useState(true);

    return (
        <div>
            {showA ? <A /> : <B />}
            <button onClick={() => setShowA(!showA)}>Toggle</button>
        </div>
    );
}

export default App;

function A() {
    useMountEffect(() => console.log("A mounted"));
    useUnmountEffect(() => console.log("A unmounted"));

    return <div>A</div>;
}

function B() {
    useMountEffect(() => console.log("B mounted"));
    useUnmountEffect(() => console.log("B unmounted"));

    return <div>B</div>;
}
