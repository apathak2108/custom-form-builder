import { useEffect, useState } from "react";
import db from "./firebase";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  serverTimestamp,
  getDoc,
  query,
  getDocs,
  where,
  deleteDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { FIREBASE_MESSAGES, STRINGS } from "./constants";

export const addFormSubmission = async (formId, formData) => {
  try {
    const submission = {
      ...formData,
      submittedAt: serverTimestamp(),
      viewedCount: 0,
      submissionCount: 1,
    };
    const docRef = await addDoc(
      collection(db, STRINGS.FORMS, formId, STRINGS.SUBMISSIONS),
      submission
    );
    toast.success(`Document written with ID: ${docRef.id}`);
  } catch (error) {
    toast.error(`Error adding data: ${error.message}`);
  }
};

export const fetchPublishedForms = async () => {
  try {
    const formsQuery = query(
      collection(db, STRINGS.FORMS),
      where("published", "==", true)
    );
    const querySnapshot = await getDocs(formsQuery);
    const forms = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return forms;
  } catch (error) {
    toast.error(FIREBASE_MESSAGES.FORM_FETCH_ERROR + error.message);
    return [];
  }
};

export const saveForm = async (formId, formData) => {
  try {
    const formRef = doc(db, STRINGS.FORMS, formId);
    await setDoc(
      formRef,
      {
        ...formData,
        updatedAt: serverTimestamp(),
        published: false,
      },
      { merge: true }
    );
    toast.success(FIREBASE_MESSAGES.FORM_SAVE_SUCCESS);
  } catch (error) {
    toast.error(FIREBASE_MESSAGES.FORM_SAVE_ERROR + error.message);
  }
};

export const publishForm = async (formId, formData) => {
  try {
    const formRef = doc(db, STRINGS.FORMS, formId);
    const formSnapshot = await getDoc(formRef);
    if (formSnapshot.exists() && formSnapshot.data().published) {
      toast.info(FIREBASE_MESSAGES.FORM_PUBLISHED_ALREADY);
      return;
    }
    await setDoc(
      formRef,
      {
        ...formData,
        published: true,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );

    toast.success(FIREBASE_MESSAGES.FORM_PUBLISH_SUCEESS);
  } catch (error) {
    toast.error(FIREBASE_MESSAGES.FORM_PUBLISH_ERROR + error.message);
  }
};

export const deleteForm = async (formId) => {
  try {
    const formRef = doc(db, STRINGS.FORMS, formId);
    await deleteDoc(formRef);
  } catch (error) {
    toast.error(FIREBASE_MESSAGES.FORM_DELETE_ERROR + error.message);
    throw error;
  }
};
