export default interface NoteDialogContentProps {
  disabled?: boolean;
  titleInput: string;
  setTitleInput: React.Dispatch<React.SetStateAction<string>>;
  discriptionInput: string;
  setDescriptionInput: React.Dispatch<React.SetStateAction<string>>;
}
