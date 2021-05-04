import "./styles.css";
import Todo from "./Todo";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);

export default function App() {
  return (
    <div>
      <Todo />
    </div>
  );
}
