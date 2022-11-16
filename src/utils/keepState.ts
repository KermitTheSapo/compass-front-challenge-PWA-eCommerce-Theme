import { useState } from 'react';

export default function keepState(state) {
    const [value, setValue] = useState(state)

    return [value, setValue];
}