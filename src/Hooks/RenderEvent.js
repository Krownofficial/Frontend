import React from 'react';
import Event from '../Components/Event';

const renderEvent = ({ item }) => {
    return (
      <Event.Root page="feed">
        <Event.Image imageId={item.imageId}>
          <Event.Gradient />
        </Event.Image>
        <Event.Content>
          <Event.Name name={item.name} />
          <Event.Loc loc={item.loc} />
          <Event.Date date={item.date} />
        </Event.Content>
      </Event.Root>
    );
  };

  export default renderEvent;