import SupervisedUserCircleTwoToneIcon from "@mui/icons-material/SupervisedUserCircleTwoTone";
import FormatColorFillTwoToneIcon from "@mui/icons-material/FormatColorFillTwoTone";
import FormatColorTextTwoToneIcon from "@mui/icons-material/FormatColorTextTwoTone";
import BookmarkAddTwoToneIcon from "@mui/icons-material/BookmarkAddTwoTone";
import DiscountTwoToneIcon from "@mui/icons-material/DiscountTwoTone";
import ArchiveTwoToneIcon from "@mui/icons-material/ArchiveTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import BlockIcon from "@mui/icons-material/Block";
import SaveIcon from "@mui/icons-material/Save";

import { Button, DialogActions, IconButton } from "@mui/material";

export default function NoteDialogActions({
  handleSave,
  handleClose,
  titleInput,
  discriptionInput,
}: any) {
  return (
    <DialogActions>
      <IconButton edge="start" color="secondary" aria-label="delete">
        <FormatColorFillTwoToneIcon />
      </IconButton>
      <IconButton edge="start" color="secondary" aria-label="delete">
        <FormatColorTextTwoToneIcon />
      </IconButton>
      <IconButton edge="start" color="secondary" aria-label="delete">
        <ArchiveTwoToneIcon />
      </IconButton>
      <IconButton edge="start" color="secondary" aria-label="delete">
        <BookmarkAddTwoToneIcon />
      </IconButton>
      <IconButton edge="start" color="secondary" aria-label="delete">
        <DiscountTwoToneIcon />
      </IconButton>
      <IconButton edge="start" color="secondary" aria-label="delete">
        <SupervisedUserCircleTwoToneIcon />
      </IconButton>

      <IconButton
        edge="start"
        color="secondary"
        aria-label="delete"
        disabled={
          titleInput.length < 1 || discriptionInput.length < 1
        }
      >
        <SaveIcon />
      </IconButton>
      <IconButton edge="start" color="secondary" aria-label="delete">
        <DeleteTwoToneIcon />
      </IconButton>
    </DialogActions>
  );
}
