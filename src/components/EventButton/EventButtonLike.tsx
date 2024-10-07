import { Ionicons } from "@expo/vector-icons"
import { Pressable } from "react-native";
import { useState } from "react";
import { useAuth } from '@clerk/clerk-react';

interface EventButtonLikeProps {
    eventId: string;
}

const EventButtonLike = ({eventId} : EventButtonLikeProps) => {

    const [liked, setLiked] = useState(false);
    const { user } = useAuth();

    const toggleLike = () => {
    setLiked(!liked);

    if (liked === true) {
        // Enviar para um endpoint o Id do evento e o Id do usuário para colocar o like

        fetch(/*url do endpoint */ "", {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              eventId: eventId,
              userId: user.Id,
            }),
          });

    } 
    else {
        // Enviar para um endpoint o Id do evento e o Id do usuário para remover o like
        fetch(/*url do endpoint */ "", {
            method: 'DELETE',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              eventId: eventId,
              userId: user.Id,
            }),
          });
    }
    };

    return (
        <Pressable onPressIn={toggleLike}>
            { liked === false ?
            <Ionicons name="heart-outline" size={32} color="white" className="absolutetop top-[190px] left-[190px]"/>
            :
            <Ionicons name="heart" size={32} color="red" className="absolute top-[190px] left-[190px]"/>
            }
        </Pressable>
    )
}

export default EventButtonLike;