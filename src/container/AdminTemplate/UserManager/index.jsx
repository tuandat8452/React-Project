import React, { useEffect } from "react";
import UserMain from "../../../components/LayoutAdmin/TableUser";
import {fetchListUser} from "../../../components/LayoutAdmin/TableUser/modules/action";
import { useDispatch } from 'react-redux';
import { connect } from "react-redux";
import PageLoading from "../../../components/PageLoading";

function UserManager(props) {
  const dispatch= useDispatch();
  useEffect(() => {
    dispatch(fetchListUser());
  }, [dispatch]);
  if(props.loading){
    return <PageLoading/>
  }
  return (
    <div className="content__dashboard">
      <UserMain listUser={props.listUser} dispatch = {props.dispatch} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listUser: state.fetchListUserReducer.listUser,
    loading: state.fetchListUserReducer.loading,
  };
};

export default connect(mapStateToProps)(UserManager);
