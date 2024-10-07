import {Text} from 'react-native';

interface EventButtonContentDateProps {
    date: string
}

const EventButtonContentDate = ({date} : EventButtonContentDateProps ) => {
    return (
        <Text className="color-white text-[15px]">{date}</Text>
    )
}

export default EventButtonContentDate;