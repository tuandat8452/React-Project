import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
  0.5: '1.0',
  1: '2.0',
  1.5: '3.0',
  2: '4.0',
  2.5: '5.0',
  3: '6.0',
  3.5: '7.0',
  4: '8.0',
  4.5: '9.0',
  5: '10',
};

const useStyles = makeStyles({
  root: {
    width: '100%',
    color:'#000',
    fontSize: '30px',
    fontWeight: "bold",
    textAlign: "center",
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent:'center'
  },
});

export default function HoverRating(props) {
  const [value, setValue] = React.useState(1);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();
  
  const sendData = () => {
    props.getDataFromChild(value *2);
  }
  return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
         
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
          {sendData()};
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
      
    </div>
  );
}