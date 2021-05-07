import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=>({
  card:{
    width:"18vw !important",
    
  },
  cardtitle:{
    marginBottom:"0",
    color:"black",
    fontFamily: "'Cairo', sans-serif",
  },
 
   
  cardimage:{
    marginBottom:"15px",
    backgroundColor:"#CCC",
    height:"40vh",
    width:"100%"
  },
  cardActions:{
    display:"flex",
    justifyContent:"flex-end",
},
     CardContent:{
        padding: "0",
        paddingBottom: "10px !important",
        marginLeft:"15px",
        marginRight:"15px",
      },
}))