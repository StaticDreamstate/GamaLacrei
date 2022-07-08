import { useContext } from "react"
import { AuthContext } from './index';

export const  useAtuh = () => {
    const context = useContext(AuthContext)

    return context;
}