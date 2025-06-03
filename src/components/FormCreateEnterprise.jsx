import React from 'react';
import { useState } from 'react';
import { PostCreateEnterprise } from '../routers/public/requests/post/PostCreateEnterprise';

const CreateEnterprise = () => {
    
const [name, setName] = useState('');
const [cnpj, setCnpj] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();

    const newEnterprise = {
        name,
        cnpj,
        phone,
        email
    };

    PostCreateEnterprise(newEnterprise)
  };

    return (
        <div>

        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createEnterpriseModal">
            CREATE ENTERPRISE
        </button>
        
        <div className="modal fade" id="createEnterpriseModal" tabindex="-1" role="dialog" aria-labelledby="createEnterpriseModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="createEnterpriseModalLabel">Create Enterprise</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="name" className="col-form-label">Name:</label>
                    <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cnpj" className="col-form-label">CNPJ:</label>
                    <input type="text" className="form-control" id="cnpj" onChange={(e) => setCnpj(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="col-form-label">Phone:</label>
                    <input type="text" className="form-control" id="phone" onChange={(e) => setPhone(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="col-form-label">Email:</label>
                    <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)}/>
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
  };
export default CreateEnterprise;
