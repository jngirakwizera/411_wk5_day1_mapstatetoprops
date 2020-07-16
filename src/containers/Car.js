import { connect } from 'react-redux';
import Car from '../components/Car';
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

const mapStateToProps = (state) => {
    return {
        cars: state.cars,
    };
}
export default  connect(mapStateToProps, mapDispatchToProps)(Car);