import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
const mapStateToProps = (state) => {
    return {
        cars: state.cars,
        user: state.user
    };
}
export default  connect(mapStateToProps, mapDispatchToProps)(Dashboard);