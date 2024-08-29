import PropTypes from "prop-types";
import { FormLocationItem } from "@/components";


const LocationItem = ({ location, removeItem }) => {

    const handleRemove = (e) => {
        e.preventDefault();
        removeItem(location.name);
    }

    return (
        <tr id={location.name}>
            <td>{location.name}</td>
            <td>{location.latitude}</td>
            <td>{location.longitude}</td>
            <td>
                <button
                    type="button"
                    className="btn-close btn-danger"
                    aria-label="Remove"
                    onClick={handleRemove}
                />
            </td>
        </tr>
    )
}

LocationItem.propTypes = {
    location: PropTypes.shape({
        name: PropTypes.string.isRequired,
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
    }).isRequired,
    removeItem: PropTypes.func.isRequired,
};

export const LocationsScreen = ({ items, removeItem, addItem }) => {

    return(
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row align-items-center">
                            <h2>Add Location:</h2>
                            <div className="bg-secondary p-2 text-black bg-opacity-10 border rounded-3">
                                <FormLocationItem addItem={addItem} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bg-secondary p-2 text-black bg-opacity-10 border rounded-3">
                            <h2>Locations:</h2>
                            {!items.length ? (
                                <p>(no locations yet...)</p>
                            ) : (
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Latitude</th>
                                            <th scope="col">Longitude</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.map((loc, i) => (
                                            <LocationItem 
                                                key={i} 
                                                location={loc} 
                                                removeItem={removeItem} 
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

LocationsScreen.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
        })
    ).isRequired,
    removeItem: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired
}


