import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import { Box, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";

interface NoteDialogSupplementsProps {
  backgroundColor: string;
  setBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
  colors: string[];
}

export default function NoteDialogSupplements({
  backgroundColor,
  setBackgroundColor,
  colors,
}: NoteDialogSupplementsProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeBackgroundColor = (color: string) => {
    setAnchorEl(null);
    setBackgroundColor(color);
  };

  const BackgroundColorIcon = ({ color }: any) => {
    return (
      <IconButton size="small" edge="start" color="inherit" sx={{ mr: 2 }}>
        <FormatColorFillIcon sx={{ color: color }} />
      </IconButton>
    );
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid",
          borderColor: "divider",
          justifyContent: "center",
          width: "50%",
          borderRadius: 2,
          bgcolor: "background.paper",
          color: "text.secondary",
          "& svg": {
            m: 1,
          },
        }}
      >
        <Tooltip title="Change the note background color">
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="Change the note background color"
            sx={{ mr: 2, color: backgroundColor || colors[0] }}
            id="change-background-color-icon"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <FormatColorFillIcon />
          </IconButton>
        </Tooltip>
        <Menu
          id="change-background-color-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "change-background-color-icon",
          }}
        >
          {colors.map((color, index) => (
            <MenuItem
              key={index}
              onClick={() => handleChangeBackgroundColor(color)}
            >
              <BackgroundColorIcon color={color} />
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </div>
  );
}
