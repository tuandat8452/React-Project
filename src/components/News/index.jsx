import React, { Component } from "react";
import Poster1 from "../../assets/poster-latmat-48h.png";
import Poster2 from "../../assets/poster-mortal-kombat.png";
import Poster3 from "../../assets/poster-antebellum.png";
import Poster4 from "../../assets/poster-last.jpg";

import Review1 from "../../assets/rv-relic.png";
import Review2 from "../../assets/rv-gow.png";
import Review3 from "../../assets/rv-nang.jpg";
import Review4 from "../../assets/rv-onward.jpg";

import Zoom from 'react-reveal/Zoom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class News extends Component {
  render() {
    return (
      <Zoom clear>
      <div id="tintuc" className="tin-tuc container pt-5">
        <div className="row">
          <div className="col-lg-6">
            <h1>Tin tức</h1>
            <div className="news">
              <div className="row">
                <div className="item d-flex">
                  <div className="col-md-4">
                    <a target="__blank" href="https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat">
                      <LazyLoadImage effect="blur" src={Poster1} loading="lazy" alt="Lật Mặt 48H" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <div className="content">
                      <a target="__blank" href="https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat">
                        <h4>
                          Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung
                          clip Lật Mặt: 48H đậm chất.
                        </h4>
                      </a>
                      <p>
                        Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung
                        clip rượt đuổi gay cấn thót tim fans hâm mộ.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item mt-3 d-flex">
                  <div className="col-md-4">
                    <a target="__blank" href="https://tix.vn/goc-dien-anh/7964-mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam">
                      <LazyLoadImage effect="blur" src={Poster2} loading="lazy" alt="Motal Kombat" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <div className="content">
                      <a target="__blank" href="https://tix.vn/goc-dien-anh/7964-mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam">
                        <h4>
                          [MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG
                          PHIM ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA
                          GAME ĐÌNH ĐÁM
                        </h4>
                      </a>
                      <p>
                        Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ,
                        Hollywood cũng không thiếu những tác phẩm đình đám được
                        chuyển thể từ tiểu thuyết, phim hoạt hình, hay thậm chí
                        là cả trò chơi điện tử.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item mt-3 d-flex">
                  <div className="col-md-4">
                    <a href="https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang">
                      <LazyLoadImage effect="blur" src={Poster3} loading="lazy" alt="Antebellum" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <div className="content">
                      <a href="https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang">
                        <h4>
                          [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh
                          dị Antebellum: Bẫy Thực Tại Kinh Hoàng.
                        </h4>
                      </a>
                      <p>
                        Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác
                        những mảng tối của xã hội trên nền một câu chuyện kinh
                        dị, có sự tham gia của nhà sản xuất đã làm nên thành
                        công của loạt tác phẩm ấn tượng “Get Out”, “Us” hay
                        “BlacKkKlansman”, và còn nhiều lý do khác khiến người
                        yêu phim không thể bỏ lỡ Ante
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item mt-3 d-flex">
                  <div className="col-md-4">
                    <a href="https://tix.vn/goc-dien-anh/7941-khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan">
                      <LazyLoadImage effect="blur" src={Poster4} loading="lazy" alt="Bằng Chứng Vô Hình" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <div className="content">
                      <a href="https://tix.vn/goc-dien-anh/7941-khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan">
                        <h4>
                          Khi phụ nữ không còn ở thế trốn chạy của nạn nhân
                        </h4>
                      </a>
                      <p>
                        Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng
                        Vô Hình mang đến một góc nhìn mới về hình ảnh những
                        người phụ nữ thời hiện đại. Điều đó được thể hiện qua
                        câu chuyện về hai người phụ nữ cùng hợp sức để vạch mặt
                        tên tội phạm có sở thích bệnh hoạn với phụ nữ.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h1>Review</h1>
            <div className="review">
              <div className="row">
                <div className="item d-flex">
                  <div className="col-md-4">
                    <a target="__blank" href="https://tix.vn/review/7947-review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket">
                      <LazyLoadImage effect="blur" src={Review1} loading="lazy" alt="Relic" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <div className="content">
                      <a target="__blank" href="https://tix.vn/review/7947-review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket">
                        <h4>
                          Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối
                          liên kết
                        </h4>
                      </a>
                      <p>
                        Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích
                        Quỷ Ám.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item d-flex mt-3">
                  <div className="col-md-4">
                    <a target="__blank" href="https://tix.vn/review/7946-review-dinh-thu-oan-khuat-ghost-of-war">
                      <LazyLoadImage effect="blur" src={Review2} loading="lazy" alt="Relic" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <div className="content">
                      <a target="__blank" href="https://tix.vn/review/7946-review-dinh-thu-oan-khuat-ghost-of-war">
                        <h4>Review: Dinh Thự Oan Khuất (Ghost Of War)</h4>
                      </a>
                      <p>
                        Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh
                        Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng
                        vé!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item d-flex mt-3">
                  <div className="col-md-4">
                    <a href="https://tix.vn/review/7876-review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan">
                      <LazyLoadImage effect="blur" src={Review3} loading="lazy" alt="Relic" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <div className="content">
                      <a href="https://tix.vn/review/7876-review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan">
                        <h4>
                          [Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình
                          thân cảm động của Khả Như và Kiều Minh Tuấn
                        </h4>
                      </a>
                      <p>
                        Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu
                        chuyện tình cha, mẹ - con đầy nước mắt của bộ ba nhân
                        vật chính.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item d-flex mt-3">
                  <div className="col-md-4">
                    <a href="https://tix.vn/review/7871-review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than">
                      <LazyLoadImage effect="blur" src={Review4} loading="lazy" alt="Relic" />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <div className="content">
                      <a href="https://tix.vn/review/7871-review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than">
                        <h4>
                          [Review] Onward - Khi phép thuật mạnh mẽ nhất chính là
                          tình thân
                        </h4>
                      </a>
                      <p>
                        Tác phẩm mới nhất của Pixar tiếp tục là câu chuyện hài
                        hước và cảm xúc về tình cảm gia đình.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Zoom>
    );
  }
}

export default News;
