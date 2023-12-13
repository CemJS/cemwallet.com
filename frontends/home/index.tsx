import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all"
import Navigation from "./navigation"

front.listener.finish = () => {
    console.log(Ref.home)
    return
}

front.func.test = () => {
    Static.count = 1;
    return
}

front.loader = () => {
    Static.text = "Самый надежный и безопасный крипто кошелек";
    Static.textEn = "The most trusted & secure crypto wallet";
    return
}

front.display = () => {
    return (
        <Navigation />
    )
}

export { front }