import { Stack } from "@mui/material";
import NoteCard from "./NoteCard";

const dummyTitle = "Lorem ipsum dolor sit amet";
const dummyDiscription =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ";

export default function NoteStack() {
  return (
    <Stack
      useFlexGap
      direction="row"
      spacing={{ xs: 1, sm: 2 }}
      sx={{
        m: 2,
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <NoteCard title={dummyTitle} discription={dummyDiscription} />
      <NoteCard title={dummyTitle} discription={dummyDiscription} />
      <NoteCard title={dummyTitle} discription={dummyDiscription} />
      <NoteCard title={dummyTitle} discription={dummyDiscription} />
      <NoteCard title={dummyTitle} discription={dummyDiscription} />
      <NoteCard title={dummyTitle} discription={dummyDiscription} />
    </Stack>
  );
}
