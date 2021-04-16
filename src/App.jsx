import "./App.css";
import { useState } from "react";

function App() {
    const [cuenta, setCuenta] = useState(0); //cuenta
    const [salto, setSalto] = useState(1); //cuenta
    const addCuenta = () => {
        setCuenta(cuenta + salto);
    };
    const substractCuenta = () => {
        setCuenta(cuenta - salto);
    };
    const addSalto = () => {
        setSalto(salto + 1);
    };
    const substractSalto = () => {
        setSalto(salto - 1);
    };
    return (
        <>
            <div className="gg">
                <div style={{ marginLeft: "3%" }}>
                    <h1>Cuenta: {cuenta}</h1>
                    <button style={{ marginTop: "1%" }} onClick={addCuenta}>
                        Sumar a Cuenta
                    </button>
                    <br />
                    <button style={{ marginTop: "1%" }} onClick={substractCuenta}>
                        Restar a Cuenta
                    </button>
                    <br />
                    <button style={{ marginTop: "1%" }} onClick={() => setCuenta(0)}>
                        Resetear la Cuenta
                    </button>
                </div>
                <div style={{marginLeft: "5%"}}>
                    <h1>Salto: {salto}</h1>
                    <button style={{ marginTop: "1%" }} onClick={addSalto}>
                        Sumar a Salto
                    </button>
                    <br />
                    <button style={{ marginTop: "1%" }} onClick={substractSalto}>
                        Restar a Salto
                    </button>
                    <br />
                    <button style={{ marginTop: "1%" }} onClick={() => setSalto(0)}>
                        Resetear el Salto
                    </button>
                </div>
            </div>
        </>
    );
}
export default App;
