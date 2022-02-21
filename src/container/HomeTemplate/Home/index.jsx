import React from "react";
import Carousel from "../../../components/Carousel";
import LoaiPhim from "../../../components/LoaiPhim";
import fecthMovie from "../../../components/LoaiPhim/PhimDangChieu/modules/action";
import PageLoading from "../../../components/PageLoading";
import News from "../../../components/News";
import Application from "../../../components/Application";
import fecthMovieComing from "../../../components/LoaiPhim/PhimSapChieu/modules/action";
import ShowTimes from "../../../components/ShowTimes";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";

function Home() {
  const [showBackTop, setShowBackTop] = React.useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.fechMovieReducer.loading);

  React.useEffect(() => {
    dispatch(fecthMovie());
    dispatch(fecthMovieComing());

    const handleScroll = () => {
      if (window.scrollY >= 430) {
        setShowBackTop(true);
      } else {
        setShowBackTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  // if (loading) return <PageLoading />;
  return (
    <>
      {loading && <PageLoading />}
      <Carousel />
      <LoaiPhim />
      <ShowTimes />
      <News />
      <Application />

      {showBackTop && (
        <button
          className="btn "
          style={{
            position: "fixed",
            right: 50,
            bottom: 20,
            borderRadius: "50%",
            backgroundColor:"#c2ff63",
            boxShadow:'none'
            
          }}
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          {/* <i className="fa fa-angle-up"></i> */}
          <i className="fa fa-chevron-up" style={{color:'white'}}></i>
        </button>
      )}
    </>
  );
}

export default Home;
