import { DialogTitle } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function NoteDialogTitle({ title }: { title: string }) {
  return (
    <DialogTitle
      variant="h6"
      color={grey[900]}
      sx={{
        m: 0,
        p: 2,
        fontWeight: "bold",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      {title}
    </DialogTitle>
  );
}
