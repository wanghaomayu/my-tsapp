import {EnthusiasmAction} from "../actions";
import {DECREMENT_ENTHUSIASM_C, INCREMENT_ENTHUSIASM_C} from "../constants";
import {IStoreState} from "../types";

export default function enthusiasm(state: IStoreState, actions: EnthusiasmAction) {
    switch (actions.type) {
        case INCREMENT_ENTHUSIASM_C:
            return {...state, enthusiasmLevel: state.enthusiasmLevel + 1};
        case DECREMENT_ENTHUSIASM_C:
            return {...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)}
    }
    return state;
}
