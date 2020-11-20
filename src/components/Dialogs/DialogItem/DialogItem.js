import { NavLink } from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className='dialog'>
            <NavLink className='dialogin' activeClassName="dialogactive" to={"/dialogs/" + props.count}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;