import { useContext } from "react";
import { AssetContext } from "../../Grandpa/Grandpa";

const Special = ({asset}) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Special One</h2>
            <p>Has:{asset} and {gift }</p>
        </div>
    );
};

export default Special;