import { Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import React, { Component } from "react";
import img from "../../../assets/cinema/cinema.jpg";
import TimeFilmDetail from "../TimeFilmDetail";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class DetailCinemaShowTime extends Component {
  renderItemFilm = () => {
    return this.props.data.cumRapChieu.map((item, index) => {
      return (
        <div className="border-bottom">
          <Accordion>
           <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={index}
        >
          <div className="d-flex item-cinema-detail mb-3" key={index}>
            <img className="" src={img} alt={item.maCumRap} />
            <div className="ml-4">
              <p style={{ fontWeight: 600 }}>{item.tenCumRap}</p>
              <p>2D Digital</p>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
        <TimeFilmDetail data={item} />
        </AccordionDetails>
        </Accordion>

          
        </div>
      );
    });
  };
  render() {
    return <div>{this.renderItemFilm()}</div>;
  }
}

export default DetailCinemaShowTime;
