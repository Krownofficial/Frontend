import React, { ReactNode } from "react";
import { ImageBackground } from "react-native";

interface EventButtonImageProps {
  children: ReactNode;
}

const EventButtonImage = ({ children }: EventButtonImageProps) => {
  return (    
    <ImageBackground
      source={require("../../assets/images/Honi.jpg")}
      className="w-[250px] h-[250px] items-center "
      style={{
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      {children}
    </ImageBackground>
  );
};

export default EventButtonImage;
