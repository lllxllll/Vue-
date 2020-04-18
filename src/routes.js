import ShowBlog from "./components/ShowBlog";
import AddBlog from "./components/AddBlog";
import MyTrace from "./components/MyTrace";
import MyProject from "./components/MyProject";
import DPuzzle from "./components/Puzzle"

export default [
    {path:"/",component:ShowBlog},
    {path: "/add",component: AddBlog},
    {path:"/trace",component:MyTrace},
    {path:"/pro",component:MyProject},
    {path:"/game", component:DPuzzle}


]