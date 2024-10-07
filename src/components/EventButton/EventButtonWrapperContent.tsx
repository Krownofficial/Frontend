import { View } from "react-native"
import { ReactNode } from "react"

interface EventButtonWrapperContentProps {
    children: ReactNode;
}

const EventButtonWrapperContent = ({children} : EventButtonWrapperContentProps) => {
    return (
        <View className="flex-row absolute">
        {children}
        </View>
    )
}

export default EventButtonWrapperContent;