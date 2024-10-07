import { Text } from 'react-native';

interface TextInputCustomLabelProps{
    placeholder: string;
}

const TextInputCustomLabel = ({placeholder} : TextInputCustomLabelProps) => {
    return(
       <Text className='text-gold'>{placeholder}</Text> 
    );
}

export default TextInputCustomLabel;