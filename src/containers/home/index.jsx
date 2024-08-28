import React, { useEffect, useState } from "react";
import NewFormCard from "../../components/newFormCard";
import { StyledHomeContainer } from "./home.styled";
import FeedbackCard from "../../components/feedbackCard";
import { useSelector } from "react-redux";
import DialogComponent from "../../components/dialog";
import { FIREBASE_MESSAGES, ROUTES, STRINGS } from "../../constants";
import { deleteForm, fetchPublishedForms } from "../../firebaseUtils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const HomeContainer = () => {
  const navigate = useNavigate();
  const [publishedForms, setPublishedForms] = useState([]);
  const isDialogOpen = useSelector(
    (state) => state?.home?.isNewFeedbackDialogOpen
  );

  const handleDeleteFeedbackCard = async (formId) => {
    try {
      await deleteForm(formId);
      const updatedForms = await fetchPublishedForms();
      setPublishedForms(updatedForms);
      toast.success(FIREBASE_MESSAGES.FORM_DELETE_SUCCESS);
    } catch (error) {
      toast.error(FIREBASE_MESSAGES.FORM_DELETE_ERROR + error.message);
    }
  };

  const handleEditFeedbackForm = (formId) => {
    navigate(`${ROUTES.EDIT_FEEDBACK}/${formId}`);
  };

  useEffect(() => {
    const getPublishedForms = async () => {
      const forms = await fetchPublishedForms();
      setPublishedForms(forms);
    };
    getPublishedForms();
  }, []);

  return (
    <StyledHomeContainer>
      <NewFormCard />
      {publishedForms.map((form) => (
        <FeedbackCard
          key={form.id}
          submittedCount={form.submissionCount || 0}
          viewedCount={form.viewedCount || 0}
          datePublished={form.updatedAt?.toDate().toLocaleDateString() || "N/A"}
          onDelete={() => handleDeleteFeedbackCard(form.id.toString())}
          onEdit={() => handleEditFeedbackForm(form.id.toString())}
        />
      ))}
      {isDialogOpen && <DialogComponent title={STRINGS.CREATE_FEEDBACK_FORM} />}
    </StyledHomeContainer>
  );
};

export default HomeContainer;
