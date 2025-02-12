import React, { ReactNode } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { DialogActions, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const WrapperDialog = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  minWidth: "32rem",
  "& .MuiDialogContent-root": {
    paddingTop: "1.25rem !important",
  },
  "& .MuiFormControl-root": {
    width: "100%",
    marginBottom: "1rem",
    "&:last-child": {
      marginBottom: "0",
    },
  },
}));
type FormDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  confirmText?: string;
  closeText?: string;
  title: string;
  children: ReactNode;
};

const FormDialog: React.FC<FormDialogProps> = ({
  confirmText = "Save",
  closeText = "Cancel",
  title = "Edit",
  children,
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <WrapperDialog>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle
          sx={{
            m: 0,
            padding: "0.625rem 1.25rem 0rem 1.25rem",
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions
          sx={{
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            marginTop: "0.5rem",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Button
            variant="contained"
            sx={{
              color: "#fff",
            }}
            onClick={onConfirm}
            type="submit"
          >
            {confirmText}
          </Button>

          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#fff",
            }}
            onClick={onClose}
          >
            {closeText}
          </Button>
        </DialogActions>
      </WrapperDialog>
    </Dialog>
  );
};
export default FormDialog;
