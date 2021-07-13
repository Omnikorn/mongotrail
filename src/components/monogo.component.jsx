// import React, { useContext, useEffect, useState } from "react"

// const MongoDBContext = React.createContext(null)
// const MongoDB = ({ children }) => {
    
//     const [db, setDb] = useState(null)
//     useEffect((children) => {
//         // if (user !== null) {
//             // const realmService = user.mongoClient("mongodb-atlas")
//             setDb(wedding)
//         // }
//     },)
//     return (
//         <MongoDBContext.Provider
//             value={{
//                 db,
//             }}
//         >
//             {children}
//         </MongoDBContext.Provider>
//     )
// }
// export const useMongoDB = () => {
//     const mdbContext = useContext(MongoDBContext)
//     if (mdbContext == null) {
//         throw new Error("useMongoDB() called outside of a MongoDB?")
//     }
//     return mdbContext
// }
// export default MongoDB