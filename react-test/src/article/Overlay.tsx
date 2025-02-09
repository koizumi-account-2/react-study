import { useSelector } from "react-redux";
import { TRootState } from "./store";

const overlayStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "24px",
};

const spinnerStyle:React.CSSProperties={
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "24px"
}

export const Overlay = () => {
    const {status,message} = useSelector((state: TRootState) => state.displayStatus);
    return (
        <>
            {(status === "loading" || status==="failed") && 
            <div style={overlayStyle}>
                <div style={spinnerStyle}>{status === "loading"?"...loading":message}</div>
            </div>
            }
        </>
    )
}
