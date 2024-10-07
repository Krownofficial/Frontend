import {Text} from 'react-native';

interface EventButtonContentNameProps {
    name: string
}

const EventButtonContentName = ({name} : EventButtonContentNameProps) => {
    return (
        <Text className="font-bold color-white text-[20px] ">{name}</Text>
    )
}

export default EventButtonContentName;