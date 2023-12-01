import React, { useEffect, useState } from 'react'
import { useUserForm } from './../../hooks/Custom.hook';

const UserForm = () => {

  const { form, setForm, handleChanges } = useUserForm();
  const [areEquals, setAreEqueals] = useState(true);
  const [paswordConfirmation, setPaswordConfirmation] = useState();

  const handlePasswordConfirmation = (e) => {
    setPaswordConfirmation(e.target.value);

  }

  useEffect(() => {
    const { Password } = form;
    setAreEqueals(Password === paswordConfirmation);

  }, [paswordConfirmation])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div className='container-fluid py-4 px-5'>
      <form>
        <div className='d-flex flex-column container px-5 justify-content-center align-items-center'>
          <div class="col-md-4 row my-1">
            <label for="inputPassword" class="col-sm-3 col-form-label">Name</label>
            <input type="text" class="form-control " name="Name" onChange={handleChanges} id="name" />
          </div>
          <div class="col-md-4 row my-1">
            <label for="inputPassword" class="col-sm-3 col-form-label">Password</label>
            <input type="password" class="form-control" name='Password' onChange={handleChanges} id="inputPassword" />
          </div>
          <div class="col-md-4 row my-1">
            <label for="inputPassword" class="col-sm-3 col-form-label">Confirm</label>
            <input type="password" class="form-control" name='ConfirmPassword' onChange={handlePasswordConfirmation} id="inputPasswordConfirm" />
            {!areEquals && (
              <div className='form-text text-danger'>
                Passwords are not the same
              </div>
            )
            }
          </div>
          <div class="col-md-4 row my-1">
            <label for="inputPassword" class="col-sm-3 col-form-label">Email</label>
            <input type="Email" class="form-control" name='Email' onChange={handleChanges} id="inputEmail" />
          </div>
          <div class="d-flex col-md-4 row my-1 justify-content-center align-items-center">
            <button className='btn btn-success' onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserForm
