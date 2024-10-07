import { TextInput } from "../../components/TextInput/index";
import { useState } from 'react';

const FormsCreateEvent = () => {

  const [name, setName] = useState("");
  // Estes dois aqui precisão de ser date pickers -- aprender a mexer com isso
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  // Estilo musical é uma selection box ou deixar o usuário escrever?

  const [description, setDescription] = useState("");
  const [artists, setArtists] = useState("");


    return (
      <>
        <TextInput.Root mt={0}>
          <TextInput.TextInput placeholder="Name" editable={true} 
          onchangeText={setName} secureTextEntry={false}
          multiline={false}/>
        </TextInput.Root>

        <TextInput.Root mt={60}>
          <TextInput.TextInput placeholder="Music" editable={true} 
          onchangeText={setName} secureTextEntry={false}
          multiline={false}
          />
        </TextInput.Root>

        <TextInput.Root mt={60}>
          <TextInput.TextInput placeholder="Description" editable={true} 
          onchangeText={setDescription} secureTextEntry={false}
          multiline={true}
          />
        </TextInput.Root>

        <TextInput.Root mt={60}>
          <TextInput.TextInput placeholder="Start Date" editable={true}
          onchangeText={setStartDate} secureTextEntry={false}
          multiline={false}
          />
        </TextInput.Root>

        <TextInput.Root mt={60}>
          <TextInput.TextInput placeholder="End Date" editable={true}
          onchangeText={setEndDate} secureTextEntry={false}
          multiline={false}
          />
        </TextInput.Root>
        
        <TextInput.Root mt={60}>
          <TextInput.TextInput placeholder="Artists" editable={true}
          onchangeText={setArtists} secureTextEntry={false}
          multiline={true}
          />
        </TextInput.Root>
      </>
    )
}

export default FormsCreateEvent;    