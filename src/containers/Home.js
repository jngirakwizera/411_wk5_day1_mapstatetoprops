import { connect } from 'react-redux';
import Home from '../components/Home';
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
const mapStateToProps = (state) => {
    return {
        cars: state.cars,
    };
}
export default  connect(mapStateToProps, mapDispatchToProps)(Home);