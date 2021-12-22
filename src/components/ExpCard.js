import "../styles/expcard.css";
const ExpCard = ({data}) => {
    return ( 
        <div className="exp-card-div">
       
          <div className="comp-name-div">
              <h1>{data.role}</h1>
              <h3>@{data.name}</h3>
          </div>
         
          <div className="stack-date-div">
              <h1>{data.stack}</h1>
              <h3>{data.start} - {data.end}</h3>
          </div>
          
        </div>
     );
}
 
export default ExpCard;
