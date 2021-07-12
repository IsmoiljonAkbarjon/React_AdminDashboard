import './widgetSm.css'
import {Visibility} from "@material-ui/icons"
import ismoil from "../../assets/1222.PNG"

export default function WidgetSm() {
    return (
        <div className="widgetSM">
            <span className="widgetSmTitle">New Join Members</span>
           <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src={ismoil} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Ismoil Ergashev</span>
                        <span className="widgetSmUserTitle">Software Engeneer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={ismoil} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Ismoil Ergashev</span>
                        <span className="widgetSmUserTitle">Software Engeneer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={ismoil} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Ismoil Ergashev</span>
                        <span className="widgetSmUserTitle">Software Engeneer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={ismoil} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Ismoil Ergashev</span>
                        <span className="widgetSmUserTitle">Software Engeneer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
