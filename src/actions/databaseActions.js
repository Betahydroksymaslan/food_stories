import { db, storage } from 'assets/firebase/firebase';
import { DATABASE_ADD_ERROR, DATABASE_ADD_SUCCESS } from 'constants/database';
import { beginApiCall, apiCallError } from './beginApiCallAction';
import get from 'lodash/get';

export const addDatabase = (ref, object, message) => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    db.ref(ref)
      .set(object)
      .then((data) => {
        dispatch({ type: DATABASE_ADD_SUCCESS, payload: message });
      })
      .catch((error) => {
        dispatch(apiCallError());
        dispatch({
          type: DATABASE_ADD_ERROR,
          payload: 'Coś poszło nie tak, spróbuj jeszcze raz!',
        });
      });
  } catch (error) {
    dispatch(apiCallError());
    dispatch({
      type: DATABASE_ADD_ERROR,
      payload: error.message,
    });
  }
};

export const pushDatabase = (ref, object, message) => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    db.ref(ref)
      .push(object)
      .then((data) => {
        dispatch({ type: DATABASE_ADD_SUCCESS, payload: message });
      })
      .catch((error) => {
        dispatch(apiCallError());
        dispatch({
          type: DATABASE_ADD_ERROR,
          payload: 'Coś poszło nie tak, spróbuj jeszcze raz!',
        });
      });
  } catch (error) {
    dispatch(apiCallError());
    dispatch({
      type: DATABASE_ADD_ERROR,
      payload: error.message,
    });
  }
};

export const updateDatabase = (ref, object, message) => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    db.ref(ref)
      .update(object)
      .then((data) => {
        dispatch({ type: DATABASE_ADD_SUCCESS, payload: message });
      })
      .catch((error) => {
        dispatch(apiCallError());
        dispatch({
          type: DATABASE_ADD_ERROR,
          payload: 'Coś poszło nie tak, spróbuj jeszcze raz!',
        });
      });
  } catch (error) {
    dispatch(apiCallError());
    dispatch({
      type: DATABASE_ADD_ERROR,
      payload: error.message,
    });
  }
};

export const removeDatabase = (ref, message, callback) => async (dispatch) => {
  db.ref(ref)
    .get()
    .then((snapshot) => {
      if (!snapshot.exists()) return console.log('Data doesnt exists in DB');
    });

  try {
    dispatch(beginApiCall());
    db.ref(ref)
      .remove()
      .then((data) => {
        message && dispatch({ type: DATABASE_ADD_SUCCESS, payload: message });
      })
      .catch((error) => {
        dispatch(apiCallError());
        dispatch({
          type: DATABASE_ADD_ERROR,
          payload: 'Coś poszło nie tak, spróbuj jeszcze raz!',
        });
      });
    callback && callback();
  } catch (error) {
    dispatch(apiCallError());
    dispatch({
      type: DATABASE_ADD_ERROR,
      payload: error.message,
    });
  }
};

export const addDatabaseWithFiles =
  (ref, object, message, fileObject, callback) => async (dispatch) => {
    const uploadTask = storage.ref(ref).put(fileObject);
    try {
      dispatch(beginApiCall());
      db.ref(ref).set(object);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          dispatch(apiCallError());
          console.log(error.message);
          dispatch({
            type: DATABASE_ADD_ERROR,
            payload: error.message,
          });
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            db.ref(ref).update({ imagePath: downloadURL });
            console.log('File available at', downloadURL);
            dispatch({ type: DATABASE_ADD_SUCCESS, payload: message });
            callback();
          });
        }
      );
    } catch (error) {
      dispatch(apiCallError());
      console.log(error.message);
      dispatch({
        type: DATABASE_ADD_ERROR,
        payload: error.message,
      });
    }
  };

export const addNewMealDatabase =
  (
    ref,
    object,
    message,
    images = [],
    recipeImages = [],
    setProggress,
    callback
  ) =>
  async (dispatch) => {
    const uploadAllImages = async () => {
      let proggress = 0;
      await db.ref(ref).set(object);

      /* SET PLACE FOR IMAGES IN DATABASE */

      if (images.length) {
        for await (const image of images) {
          const imageName = image.name.replace('.', 'Format');
          const imageRef = `${ref}/images/${imageName}`;
          await db.ref(imageRef).update({ name: imageName });
        }
      }

      /* UPLOAD IMAGES TO STORAGE AND THEN UPDATA PATHS IN DATABASE */

      for await (const recipe of recipeImages) {
        const imageName = recipe.image.name.replace('.', 'RECIPE');
        const imageDbIndex = recipe.path;
        const imageRefDb = `${ref}/recipe/${imageDbIndex}`;
        const imageRefStorage = `${ref}/${imageName}`;

        const uploadTask = await storage.ref(imageRefStorage).put(recipe.image);
        const downloadURL = await uploadTask.ref.getDownloadURL();
        await db.ref(imageRefDb).update({ image: downloadURL });
      }

      for await (const image of images) {
        const imageName = image.name.replace('.', 'Format');
        const imageRefDb = `${ref}/images/${imageName}`;
        const imageRefStorage = `${ref}/${imageName}`;

        const uploadTask = await storage.ref(imageRefStorage).put(image);
        const downloadURL = await uploadTask.ref.getDownloadURL();
        await db.ref(imageRefDb).update({ imagePath: downloadURL });
        if (imageName === images[0].name.replace('.', 'Format')) {
          await db.ref(ref).update({ mainImage: downloadURL });
        }
        if (imageName === images[1].name.replace('.', 'Format')) {
          await db.ref(ref).update({ secondImage: downloadURL });
        }
        proggress += 100 / images.length;
        setProggress(proggress);
      }

      dispatch({ type: DATABASE_ADD_SUCCESS, payload: message });
      callback && callback();
    };

    try {
      dispatch(beginApiCall());
      uploadAllImages();
    } catch (error) {
      dispatch(apiCallError());
      console.log(error.message);
      dispatch({
        type: DATABASE_ADD_ERROR,
        payload: error.message,
      });
    }
  };
