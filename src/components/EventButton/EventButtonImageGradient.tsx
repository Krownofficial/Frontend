import { LinearGradient } from "expo-linear-gradient";

interface EventButtonImageGradientProps{

}


const EventButtonImageGradient = () =>{
    return(
        <LinearGradient
            colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.1)", "rgba(0,0,0,0)"]}
            start={{x:0,y: 1}}
            end={{x:0, y: 0}}
            className="absolute w-[250px] h-[250px] items-center rounded-bl-[20px] rounded-br-[20px] "
            />
    )
}

export default EventButtonImageGradient;