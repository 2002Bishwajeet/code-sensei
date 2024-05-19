import React, { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";

export const Loader = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
      <div>
        <HashLoader color={"#A388EE"} loading={loading} size={150} />
      </div>
    );
}