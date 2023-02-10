import "./newuser.css"

const NewUser=()=>{
    return(
        <div className="newuser">
<h1 className="newUserTitle">New User</h1>
<form className="newUserForm">
{/* newUserFormItem 1*/}
<div className="newUserFormItem">
    <label>Username</label>
    <input type="text" placeholder="Steno123"/>
</div>

{/* newUserFormItem 2*/}
<div className="newUserFormItem">
    <label>Full Name</label>
    <input type="text" placeholder="Steno Nicolas"/>
</div>


{/* newUserFormItem 3*/}
<div className="newUserFormItem">
    <label>Email</label>
    <input type="email" placeholder="Steno@gmail.com"/>
</div>


{/* newUserFormItem 4*/}
<div className="newUserFormItem">
    <label>Password</label>
    <input type="password" />
</div>

{/* newUserFormItem 5*/}
<div className="newUserFormItem">
    <label>Phone</label>
    <input type="text" placeholder="+234 565 786 654" />
</div>

{/* newUserFormItem 6*/}
<div className="newUserFormItem">
    <label>Address</label>
    <input type="text" placeholder="N0 4 Chike street Mgbuoba Port-Harcourt" />
</div>

{/* newUserFormItem 7*/}
<div className="newUserFormItem">
    <label>Gender</label>
<div className="newUserGender">
<input type="radio" name="gender" id="male" value='male' />
    <label htmlFor="male">Male</label>

    <input type="radio" name="gender" id="female" value='female' />
    <label htmlFor="female">Female</label>

    <input type="radio" name="gender" id="others" value='others' />
    <label htmlFor="others">Others</label>
</div>
</div>

<div className="newUserFormItem">
<label>Active</label>
<select className="newUserSelect" name="active" id="active">
<option>Yes</option>
<option>No</option>
</select>
</div>
<button className="newUserButton">Create</button>
</form>
        </div>
    )
}
export default NewUser;