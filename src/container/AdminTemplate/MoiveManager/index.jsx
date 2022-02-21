import React from "react";
import MainMovie from "../../../components/LayoutAdmin/MainMovie";
import fecthMovie from "../../../components/LoaiPhim/PhimDangChieu/modules/action";
import { useDispatch,useSelector } from 'react-redux';
import PageLoading from "../../../components/PageLoading";

function MovieManager() {
    const dispatch= useDispatch();
    const loading = useSelector(state => state.fechMovieReducer.loading);
    const listMovie = useSelector(state => state.fechMovieReducer.data);
    
  React.useEffect(() => {
    dispatch(fecthMovie());
  }, [dispatch]);

  if(loading) {
    return <PageLoading />
  }
  return <div className="content__dashboard movie__manager">
      <MainMovie listMovie = {listMovie} dispatch={dispatch}/>
  </div>;
}



export default MovieManager;
