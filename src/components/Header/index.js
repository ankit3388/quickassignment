import './header.css';
import DisplayDropdown from '../Dropdowns/DisplayDropdown';
function Header({ grouping, setGrouping, }) {

    return (
        <header>
            <DisplayDropdown grouping={grouping} setGrouping={setGrouping}  />
        </header>
    );
}

export default Header;
