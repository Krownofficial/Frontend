import { View } from "react-native";
import { ReactNode } from "react";

interface TextInputCustomRoot {
  children: ReactNode;
  mt : number;
}

const TextInputCustomRoot = ({ children, mt }: TextInputCustomRoot) => {
  return <View style={{height : 10, width: '100%', marginTop:mt }}>
    {children}
    </View>;
};

export default TextInputCustomRoot;
