/* eslint-disable @next/next/no-img-element */

import Pagination from "../components/elements/Pagination";
import Tags from "../components/elements/Tags";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Grid from "../components/videos/grid";

export default function Home() {
    return (
        <>
            <Header />
            <Tags/>
            <Grid />
            <Pagination />
            <Footer />
        </>
    )
}
