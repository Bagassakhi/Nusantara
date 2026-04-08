import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



export default function Template() {
    return(
        <>
                <Navbar/>
                {/* sama kaya @yeald dilaravel, menyediakan wadah konten dinamis yang akan berubah2 tiap halaman*/}
                <Outlet/>
                <Footer/>
        </>
    )
}