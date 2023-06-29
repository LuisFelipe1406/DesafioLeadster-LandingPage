import Styles from "./myButton.module.scss";

/* PROPS
    title: String
    selected: boolean
    action: handler
 */

function MyButton({ title, selected, action }) {

    function getSelected() {
        if (selected) {
            return Styles.selected;
        }
    }

    return (
        <button className={`${Styles.button} ${getSelected()}`} onClick={action} >
            { title }
        </button>
    );
}

export default MyButton;