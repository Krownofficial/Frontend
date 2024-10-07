import { ReactNode } from "react";
import { View } from "react-native";

interface EventButtonContentProps {
  children: ReactNode;
}

const EventButtonContent = ({ children }: EventButtonContentProps) => {
  return <View className="absolute top-[170px] left-5">{children}</View>;
};

export default EventButtonContent;
