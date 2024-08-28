import PropTypes from 'prop-types';

const LocationItem = ({ name, removeItem }) => {

    const handleClick = (e) => {
        e.preventDefault();
        removeItem(e.target.parentNode.id);
    }

    return (
        <>
            <li className="list-group-item" key={name} id={name}>{ name }
                <button
                    type="button"
                    className="btn-close btn-danger float-end"
                    aria-label="Close"
                    onClick={handleClick}/>
            </li>
        </>
    )
}

LocationItem.propTypes = {
    name: PropTypes.string.isRequired,
    removeItem: PropTypes.func.isRequired
}

export const Locations = ({ items, removeItem }) => {

    return (
        <>
            <h2>Locations:</h2>
            {
                (!items.length) ?
                <p> (no locations yet...)</p> :
                <ul className="list-group">
                {
                    items.map((loc, i) => (
                        <LocationItem
                            key={i}
                            name={loc.name}
                            removeItem={ removeItem }/>
                    ))}
                </ul>
            }
        </>
    )
}

Locations.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    removeItem: PropTypes.func.isRequired
}