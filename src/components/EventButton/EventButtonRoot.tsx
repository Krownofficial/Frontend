import { ReactNode } from "react";
import { View, TouchableOpacity } from "react-native";

interface EventButtonRootProps {
  children: ReactNode;
}

const EventButtonRoot = ({ children }: EventButtonRootProps) => {
  return (
    <View className="items-center mt-[30px]">
      <TouchableOpacity>
        <View className="relative">{children}</View>
      </TouchableOpacity>
    </View>
  );
};

export default EventButtonRoot;
