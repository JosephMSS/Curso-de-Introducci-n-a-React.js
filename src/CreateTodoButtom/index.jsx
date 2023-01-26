import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
export function CreateTodoButton() {
  return (
    <div className="text-xl text-secondary flex flex-row justify-end mx-4 my-3 max-w-full">
      <IconButton aria-label="create" color="primary">
        <AddIcon />
      </IconButton>
    </div>
  );
}
