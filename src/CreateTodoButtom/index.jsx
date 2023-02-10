import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
export function CreateTodoButton({ setOpenModal, label }) {
  const onClick = () => {
    setOpenModal(true);
  };
  return (
    <div className="text-xl text-secondary flex flex-row justify-end mx-4 my-3 max-w-full">
      <button className="font-bold font-poppins" onClick={onClick}>
        {label}
        <i className="font-bold font-poppins">+</i>
      </button>
    </div>
  );
}
