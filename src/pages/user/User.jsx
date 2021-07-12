import './user.css'
import { Link } from 'react-router-dom'
import { Publish} from '@material-ui/icons'
import {LocationSearching, CalendarToday, MailOutline, PhoneAndroid, PermIdentity} from '@material-ui/icons'

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img 
                        src="https://avatarko.ru/img/kartinka/17/muzhchina_spinoj_kapyushon_16591.jpg" 
                        alt=""
                        className="userShowImg"
                          />
                          <div className="userShowTopTitle">
                              <span className="userShowUsername">Akbarjon Ergashev</span>
                              <span className="userShowUserTitle">Software Engineer</span>
                          </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">AccountDetails</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userSHowIcon" />
                            <span className="userShowInfoTitle">Akbarjon09</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userSHowIcon" />
                            <span className="userShowInfoTitle">09.05.2018</span>
                        </div>
                        <span className="userShowTitle">ContactDetails</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userSHowIcon" />
                            <span className="userShowInfoTitle">+998(90)984-78-84</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userSHowIcon" />
                            <span className="userShowInfoTitle">akbarjon.ismoil@bk.ru</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userSHowIcon" />
                            <span className="userShowInfoTitle">Tashkent | Akkurgan</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                type="text" 
                                placeholder="Akbarjon09"
                                className="userUpdateInput"
                              />
                            </div>
                            <div className="userUpdateItem">
                                <label>FullName</label>
                                <input
                                type="text" 
                                placeholder="Akbarjon Ergashev"
                                className="userUpdateInput"
                              />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                type="text" 
                                placeholder="akbarjon.ismoil@bk.ru"
                                className="userUpdateInput"
                              />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input
                                type="text" 
                                placeholder="+998(90)984-78-84"
                                className="userUpdateInput"
                              />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input
                                type="text" 
                                placeholder="Tashkent | Akkurgan"
                                className="userUpdateInput"
                              />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="https://meragor.com/files/styles//ava_800_800_wm/ava-so-spiny-038.jpg" alt="" />
                               <label htmlFor="file"> <Publish className="userUpIcon" /> </label>
                                <input type="file" id="file" style={{display:"none"}} />
                            </div>
                            <button className="userUpdateButon">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
