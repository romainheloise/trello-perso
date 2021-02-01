import { connect } from "react-redux";
import Column from "./Column";

const ColumnList = ({ column }) => {
  return (
    <div className="column-all">
      {column.dash.map((col, index) => {
        return <Column {...col} index={index} key={index} />;
      })}
    </div>
  );
};

const mapStateToProps = ({ column }) => ({ column });

export default connect(mapStateToProps)(ColumnList);
