import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import { Stack } from "expo-router";
import { Event } from "../../components/EventButton/index";
import SearchBar from "../../components/SearchBar/SearchBar";
import FeedHook from "../../Hooks/FeedHook";
import RenderEvent from "../../Hooks/RenderEvent";

const Data = [
  {
    id: "1",
    name: "Honi",
    loc: "Alpes",
    date: "13 March, 2026",
    imageId: "02e44262-e33c-42d2-bfd0-77f5d0d4d4f1",
    eventId: "1",
  },
  {
    id: "2",
    name: "Tomorrowland",
    loc: "Alpes",
    date: "13 March, 2026",
    imageId: "02e44262-e33c-42d2-bfd0-77f5d0d4d4f1",
    EventId: "2",
  },
  {
    id: "3",
    name: "Honi",
    loc: "Alpes",
    date: "13 March, 2026",
    imageId: "02e44262-e33c-42d2-bfd0-77f5d0",
    eventId: "3",
  },
  {
    id: "4",
    name: "Honi",
    loc: "Alpes",
    date: "13 March, 2026",
    imageId: "02e44262-e33c-42d2-bfd0-77f5d0d4d4f1",
    eventId: "4",
  },
];

export default function Feed() {
  //FeedHook();

  const renderItem = ({ item }) => {
    return (
      <Event.Root>
        <Event.Image>
          <Event.Gradient/>
        </Event.Image>
        <Event.Wrapper>
            <Event.Content>
              <Event.Name name={item.name}/>
              <Event.Loc loc={item.loc}/>
              <Event.Date date={item.date}/>
          </Event.Content>
          <Event.Like eventId={item.eventId}/>
        </Event.Wrapper>
      </Event.Root>
    );
  };

  return (
    <View
      className="bg-blacksecondary items-center flex-1
    justify-start w-full h-full"
    >
      <Stack.Screen options={{ headerShown: false }} />
      <SearchBar />
      <FlatList
        className="mt-[70px] flex-1"
        data={Data}
        renderItem={renderItem}
      />
    </View>
  );
}
