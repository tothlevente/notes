import { Stack } from "@mui/material";
import NoteCard from "./NoteCard";

const dummyText =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ";

export default function NoteList() {
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
      <NoteCard
        title={"Single-line title item"}
        discription={dummyText}
      />
      <NoteCard
        title={"Single-line title item"}
        discription={dummyText}
      />
      <NoteCard
        title={"Single-line title item"}
        discription={dummyText}
      />
      <NoteCard
        title={"Single-line title item"}
        discription={dummyText}
      />
      <NoteCard
        title={"Single-line title item"}
        discription={dummyText}
      />
      <NoteCard
        title={"Single-line title item"}
        discription={dummyText}
      />
    </Stack>
  );
}
