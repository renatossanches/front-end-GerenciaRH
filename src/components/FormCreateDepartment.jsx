import {useState} from 'react';
import { PostCreateDepartment } from '../routers/private/requests/post/PostCreateDepartment';
const CreateDepartment = () => {

    const [name, setName] = useState('');


    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const newDepartment = {
            name
        }
        PostCreateDepartment(newDepartment);
    };


    return(

        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createDepartmentModal">
            Create Department
        </button>
        
        <div className="modal fade" id="createDepartmentModal" tabindex="-1" role="dialog" aria-labelledby="createDepartmentModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="createDepartmentModalLabel">Create department</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="departmentName" className="col-form-label">Department Name:</label>
                    <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)}/>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
        </div>
    )

}
export default CreateDepartment;