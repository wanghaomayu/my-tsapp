// @ts-ignore
import {connect, Dispatch} from 'react-redux';
import * as actions from '../actions';
import Hello from '../components/Hello';
import {IStoreState} from '../types';

export function mapStateToProps({languageName, enthusiasmLevel}: IStoreState) {
    return {
        enthusiasmLevel,
        name: languageName
    }
}

export function mapDidpatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>){
    return {
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        onIncrement: () => dispatch(actions.incrementEnthusiasm())
    }
}



export default connect(mapStateToProps,mapDidpatchToProps)(Hello);
