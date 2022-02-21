import React, { Component } from "react";
import Swal from "sweetalert2";
import HoverRating from "../Raiting";
import DataCmt from "./FakeData.json";
class Comment extends Component {
  state = {
    listCmt: [],
    isLike: false,
    comment: "",
    isValid: true,
    rating: 0,
    isVisiable: 3,
  };

  //handleLike
  handleLike = () => {
    this.setState({
      isLike: !this.state.isLike,
    });
  };

  //truyền dữ liệu từ con lên cha
  getDataFromChild = (childData) => {
    this.setState({
      rating: childData,
    });
  };

  renderStar = (point) => {
    switch (point) {
      case 1:
        return <i className="fa fa-star-half-alt" />;
      case 2:
        return (
          <>
            <i className="fa fa-star" />
          </>
        );
      case 3:
        return (
          <>
            <i className="fa fa-star" />
            <i className="fa fa-star-half-alt" />
          </>
        );
      case 4:
        return (
          <>
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </>
        );

      case 5:
        return (
          <>
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-half-alt" />
          </>
        );
      case 6:
        return (
          <>
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </>
        );
      case 7:
        return (
          <>
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-half-alt" />
          </>
        );

      case 8:
        return (
          <>
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </>
        );

      case 9:
        return (
          <>
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-half-alt" />
          </>
        );

      default:
        return (
          <>
            <i className="fa fa-star" />
            <i className="fa fa-star " />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </>
        );
    }
  };

  renderComment = () => {
    if (this.state.listCmt && this.state.listCmt.length > 0) {
      return this.state.listCmt
        .reverse()
        .slice(0, this.state.isVisiable)
        .map((item, index) => {
          return (
            <React.Fragment>
              <div
                key={index}
                className="row list__comment mb-4 animated slideInDown"
              >
                <div className=" col-9 list__comment__left">
                  <img
                    width="40"
                    height="40"
                    src={item.avatar}
                    alt="avatar-user"
                  />
                  <span>{item.user}</span>
                  <p>{item.content}</p>
                </div>
                <div className=" col-3 list__comment__right">
                  <span className="d-block text-center">{item.point}</span>
                  <div className="icon-star text-center">
                    {this.renderStar(item.point)}
                  </div>
                </div>
                <div className="like__comment pt-3 border-top">
                  <i
                    className="fa fa-heart mr-2"
                    onClick={this.handleLike}
                    style={{ color: this.state.isLike ? "red" : "#495057" }}
                  ></i>
                  <span>{this.state.isLike ? "1" : "0"} Thích</span>
                </div>
              </div>
            </React.Fragment>
          );
        });
    }
  };

  //handleChange
  handleChange = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        comment: e.target.value,
        isValid: false,
      });
    }
  };

  //handleSubmit
  handleSubmit = (e) => {
    e.preventDefault();
    if (localStorage.getItem("Userlogin")) {
      const cloneListCmt = [...this.state.listCmt];
      const infoUser = JSON.parse(localStorage.getItem("Userlogin"));
      const user = {
        user: infoUser.hoTen,
        content: this.state.comment,
        point: this.state.rating,
        avatar: "https://loremflickr.com/320/240",
      };
      cloneListCmt.push(user);
      this.setState({
        listCmt: cloneListCmt,
        comment: "",
        isValid: true,
      });
      Swal.fire({
        icon: "success",
        title:"Đăng bình luận thành công"
      })
    } else {
      Swal.fire({
        icon: "warning",
        text: "Bạn cần phải đăng nhập để có thể bình luận",
      }).then((result) => {
        if (result.isConfirmed) {
          this.props.history.push({ pathname: "/login" });
        }
      });
    } 
    
  };

  handleViewMore = () => {
    this.setState({
      isVisiable: this.state.isVisiable + 2,
    });
  };

  render() {
    return (
      <div className="user__comment">
        <div
          className="your__comment"
          data-toggle="modal"
          data-target="#myModal"
        >
          <div className="row align-items-center">
            <div className="col-sm-1 col-1">
              <i
                className="fa fa-user your__avatar"
                style={{ marginLeft: 15 }}
              ></i>
            </div>
            <div className="col-sm-8 col-8 thinking">
              <p className="mb-0 ml-3">Bạn nghĩ gì về phim này?</p>
            </div>
            <div className="col-sm-3 col-3 star__thinking">
              <div className="icon-star ml-3">
                <i className="fa fa-star" />
                <i className="fa fa-star " />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
          </div>
        </div>
        {this.renderComment()}

        <div className="text-center">
          <button className="btn btn-secondary" onClick={this.handleViewMore}>
            Xem thêm
          </button>
        </div>

        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title" style={{ width: "100%" }}>
                  <HoverRating getDataFromChild={this.getDataFromChild} />
                </h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              {/* Modal body */}
              <div className="modal-body" style={{ width: "100%" }}>
                <textarea
                  className="pl-4 pt-3"
                  placeholder="Nói cho mọi người biết bạn nghĩ gì về phim này..."
                  style={{ width: "100%" }}
                  rows="4"
                  value={this.state.comment}
                  onChange={this.handleChange}
                />
                {this.state.isValid ? (
                  <p
                    className="mt-2 mb-0 text-center"
                    style={{ color: "red", fontWeight: "bold" }}
                  >
                    (*) Hãy nhập gì đó
                  </p>
                ) : (
                  ""
                )}
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                  onClick={this.handleSubmit}
                  disabled={this.state.isValid}
                >
                  Đăng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      listCmt: DataCmt,
    });
  }
}

export default Comment;
