import './newpage.css'

export default function NewUser() {
    return (
        <div className="newuser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="Akbarjon" />
                </div>
                <div className="newUserItem">
                    <label>Fullname</label>
                    <input type="text" placeholder="Akbarjon Ergashev" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="akbarjon.ismoil@bk.ru" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="Password" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+998 (90) *** ** **" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="Tashkent | Akkurgan" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="Male" value="Male" />
                        <label for="Male">Male</label>
                        <input type="radio" name="gender" id="Famale" value="Famale" />
                        <label for="Famale">Famale</label>
                        <input type="radio" name="gender" id="Other" value="Other" />
                        <label for="Other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
