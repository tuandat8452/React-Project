const initialState = {
  danhSachVeChon: [],
  totalAmount: 0,
  danhSachVe:[],
};

const chooseSeatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHOOSE_SEAT":
      let danhSachVeDangChon = [...state.danhSachVeChon];
      let danhSachVeClone =[...state.danhSachVe];
      const ve = {
        maGhe: action.payload.maGhe,
        giaVe: action.payload.giaVe,
      };
      let index = danhSachVeDangChon.findIndex((item) => {
        return item.maGhe === action.payload.maGhe;
      });

      if (index === -1) {
        danhSachVeDangChon.push(action.payload);
        danhSachVeClone.push(ve);
      } else {
        danhSachVeDangChon.splice(index, 1);
        danhSachVeClone.splice(index,1);
      }
      state.danhSachVe = danhSachVeClone;
      state.danhSachVeChon = danhSachVeDangChon;
      state.totalAmount = state.danhSachVeChon.reduce(
        (tongTien, gheDangDat) => {
          return (tongTien += gheDangDat.giaVe);
        },
        0
      );
      return { ...state };
    //  case "UNCHOOSE_SEAT":
    //      let danhSachGhe = [...state.danhSachVeChon];
    //     //  const huyVe = {
    //     //     maGhe: action.payload.maGhe,
    //     //     giaVe:action.payload.giaVe,
    //     //  }

    //     let index = danhSachGhe.findIndex(item => {
    //         return item.maGhe === action.payload.maGhe;
    //     })

    //     if(index === 1) {

    //         danhSachGhe.splice(action.payload,1);
    //     }
    //      state.danhSachVeChon=danhSachGhe;
    //      return {...state};
    default:
      return { ...state };
  }
};

export default chooseSeatReducer;
