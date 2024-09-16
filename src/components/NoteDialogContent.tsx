import { DialogContent, TextField } from "@mui/material";

interface NoteDialogContentProps {
  disabled?: boolean;
  titleInput: string;
  setTitleInput: React.Dispatch<React.SetStateAction<string>>;
  discriptionInput: string;
  setDescriptionInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function NoteDialogContent({
  disabled,
  titleInput,
  setTitleInput,
  discriptionInput,
  setDescriptionInput,
}: NoteDialogContentProps) {
  return (
    <DialogContent>
      <div style={{ marginTop: "10px" }}>
        <TextField
          id="note-title-input"
          label="Title"
          type="text"
          value={titleInput}
          disabled={disabled}
          onChange={(e) => setTitleInput(e.target.value)}
          fullWidth
          required
        />
      </div>
      <div style={{ marginTop: "15px" }}>
        <TextField
          id="note-discription-input"
          label="Discription"
          rows={4}
          value={discriptionInput}
          disabled={disabled}
          onChange={(e) => setDescriptionInput(e.target.value)}
          fullWidth
          multiline
          required
        />
      </div>
    </DialogContent>
  );
}
