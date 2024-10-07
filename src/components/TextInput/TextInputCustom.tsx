import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import TextInputLabel from './TextInputCustomLabel';

interface TextInputCustomProps{
    placeholder: string;
    editable: boolean;
    onchangeText?: (text: string) => void;
    secureTextEntry: boolean;
    multiline: boolean;
}

const TextInputCustom = ({placeholder, editable, secureTextEntry, multiline} : TextInputCustomProps) => {
    
    return(
            <TextInput
                editable={editable}
                mode='outlined'
                outlineStyle={{borderColor: '#C1A875', borderRadius:10}}
                style={{height: 48, fontSize: 12, textAlign: 'left', textAlignVertical: 'center', width: '90%', alignSelf: 'center'}} 
                label={TextInputLabel({placeholder})}
                textColor='#C1A875'
                multiline = {multiline} 
                theme={{ colors: {background: '#101010', outline: '#C1A875', onTertiary:'#C1A87'} }}
                selectionColor='#C1A875'
                cursorColor='#C1A875'
                secureTextEntry={secureTextEntry}
            />
    )
}

export default TextInputCustom;