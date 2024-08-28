import PropTypes from "prop-types";
import { Locations, FormLocationItem } from "@/components";

const Section = ({ title, children }) => {
    return (
        <>
            <div className="row align-items-center">
                {title && <h2>{title}</h2>}
                <div className="bg-secondary p-2 text-black bg-opacity-10 border rounded-3">
                    {children}
                </div>
            </div>
        </>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired
};

export const LocationsScreen = ({ items, removeItem, addItem }) => {

    return(
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <Section>
                            <Locations items={items} removeItem={removeItem} />
                        </Section>
                    </div>
                    <div className="col-md-8 d-flex justify-content-center align-items-center">
                        <Section title="Add Location:">
                            <FormLocationItem addItem={addItem} />
                        </Section>
                    </div>
                </div>
            </div>
        </>
    )
}

LocationsScreen.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    removeItem: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired
}


