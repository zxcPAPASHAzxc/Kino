import StringMovies from "../../3COMPONENTS/StringMovies/StringMovies";
import { auth } from "../../FireBase/FireBase";
import cl from "./MainForFirstPage.module.css";



const MainForFirstPage = () => {

    return (
        <main className={cl.mainWrapper}>
            <StringMovies path="#/" category="Комедии"/>
            <StringMovies path="#/" category="Боевики"/>
            <StringMovies path="#/" category="Драмы"/>
        </main>
    )
}

export default MainForFirstPage;