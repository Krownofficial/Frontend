import { useState } from 'react';

const FeedHook = () => {
    // const [events, setEvents] = useState([]);

    fetch(""/*api backend*/)
    .then((response) => response.json())
    .then((data) => {
        setEvents(data);
    })

    return events;
}

export default FeedHook;