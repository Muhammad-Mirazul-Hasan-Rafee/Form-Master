import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';

export const AssetContext = createContext('Gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const asset = "diamond";
    const [money , setMoney] = useState(1000);
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Net Money : {money}</p>
        <MoneyContext.Provider value={[money , setMoney]}>
            <AssetContext.Provider value="gold"> 
                <section className="flex">
                    <Dad asset={asset}></Dad>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </section>
            </AssetContext.Provider>
        </MoneyContext.Provider>

        </div>
    );
};

export default Grandpa;