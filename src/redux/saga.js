import { takeEvery, put } from "redux-saga/effects";
import { LIST_DATA, SEARCH_DATA, SET_LIST_DATA } from "./constant";

function* getImages() {
  let data = yield fetch(
    "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=5cc96cb0480c47f5d069623d678b9244&tags=test&tag_mode=any&format=json&nojsoncallback=1"
  );
  data = yield data.json();
  yield put({ type: SET_LIST_DATA, data });
}

function* searchImages(data) {
  let result = yield fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5cc96cb0480c47f5d069623d678b9244&tags=${data.query}&tag_mode=any&format=json&nojsoncallback=1`
  );
  result = yield result.json();
  yield put({ type: SET_LIST_DATA, data: result });
}

function* productSaga() {
  yield takeEvery(LIST_DATA, getImages);
  yield takeEvery(SEARCH_DATA, searchImages);
}

export default productSaga;
