import { all, call, takeLatest, put } from "redux-saga/effects";
import { clearCart } from "./cart.action";
import UserActionTypes from "../user/user.types";

export function* clearCartSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
