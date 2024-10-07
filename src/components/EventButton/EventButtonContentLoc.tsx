import {Text} from 'react-native';

interface EventButtonContentLocProps {
    loc: string
}


const EventButtonContentLoc = ({loc} : EventButtonContentLocProps ) => {
    return (
        <Text className="color-white text-[15px]">{loc}</Text>
    )
}

export default EventButtonContentLoc;