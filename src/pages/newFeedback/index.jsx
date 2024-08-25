import React from "react";
import Layout from "../../components/layout";
import NewFeedbackContainer from "../../containers/newFeedback";

const NewFeedbackAdaptive = () => {
  return (
    <Layout headerFlag={true}>
      <NewFeedbackContainer />
    </Layout>
  );
};

export default NewFeedbackAdaptive;
