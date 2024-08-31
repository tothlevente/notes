import Note from "./Note";

import { List } from "@mui/material";

export default function NoteList() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 460,
        margin: "10px",
      }}
    >
      <Note
        title={"Single-line title item"}
        discription={"Description text"}
      />
      <Note
        title={"Single-line title item"}
        discription={"Description text"}
      />
      <Note
        title={"Single-line title item"}
        discription={"Description text"}
      />
    </List>
  );
}
