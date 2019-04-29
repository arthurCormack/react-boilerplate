import { take, call, fork } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'connected-react-router';


function* locationChanged() {

}
function* getlocationChangeWatcher() {
   
    while (true) {
      yield take(LOCATION_CHANGE);
      yield call(locationChanged);
    }
  }

export function* deamonSagas() {
    const locationChangeWatcher = yield fork(getlocationChangeWatcher);
}
export function* AppSagas() {
  yield all([
    deamonSagas(),
  ]);

}
export default AppSagas;
