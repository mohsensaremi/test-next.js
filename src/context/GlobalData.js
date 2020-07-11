import React, {useState, useEffect, useMemo} from 'react';

export const GlobalDataContext = React.createContext({})

export const GlobalDataContextProvider = (props) => {

    const {
        children
    } = props;

    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetch("/api/cities")
            .then(res => res.json())
            .then(res => {
                console.log("res", res);
                if (res && res.data) {
                    setCities(res.data);
                }
            })
    }, []);

    const contextValue = useMemo(() => ({
        cities,
    }), [cities]);

    return (
        <GlobalDataContext.Provider value={contextValue}>
            {children}
        </GlobalDataContext.Provider>
    );
};

export default GlobalDataContextProvider;