import Axios from "axios";
import { Link } from "react-router-dom";

function StudentListRow(props) {
    const {_id} = props.obj || {}; //Object destruction

    const handleClick = () => {
        Axios.delete("https://crud-deployment-backend-1f1p.onrender.com/studentRoute/delete-student/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record deleted successfully");
                    window.location.reload();
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }

    return (
        <tr>
            <td>{props.obj.name}</td>
            <td>{props.obj.email}</td>
            <td>{props.obj.rollNo}</td>
            <td class="d-flex justify-content-center">
                <Link class="text-decoration-none text-light me-4" to={"/edit-student/" + _id}>
                    <button class="btn btn-success">
                        Edit
                    </button>
                </Link>
                <button onClick={handleClick} class="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    )
}
export default StudentListRow;
