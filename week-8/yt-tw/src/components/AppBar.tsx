import { SearchBar } from "./SearchBar"

export const AppBar = () => {
    return <div  className="flex items-center justify-between p-2 shadow-md">
        <div className="text-xl font-bold">Youtube</div>
        <div className="flex-grow mx-4"><SearchBar/></div>
        <div className="ml-4">Sign In</div>
    </div>
}