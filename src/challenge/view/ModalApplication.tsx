import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import React from "react";
import { Challenge } from "../domain/Challenge";
import InputText from "../../common/view/components/forms/InputText";
import Button from "../../common/view/components/atoms/Button";
import { useModalStore } from "../../common/view/store/modalStore";
import { useChallengeStore } from "./store/challengeStore";

interface Props {
  challenge: Challenge;
  reloadApplications: Function;
}

interface FormValues {
  contribution: string;
  pitch: string;
}

const initialValues: FormValues = {
  contribution: "",
  pitch: "",
};

const schema = yup.object().shape({
  name: yup.string().notRequired(),
  intro: yup.string().notRequired(),
});

export default function ModalApplication({
  challenge,
  reloadApplications,
}: Props) {
  const { clearModal } = useModalStore();
  const { apply } = useChallengeStore();

  async function handleSubmit(
    values: FormValues,
    helpers: FormikHelpers<FormValues>
  ) {
    await apply({ challenge, ...values });
    helpers.setSubmitting(false);
    reloadApplications();
    clearModal();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {({
        values,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
      }) => (
        <form className="p-4" onSubmit={handleSubmit}>
          <InputText
            label="How can you contribute to this project?"
            type="text"
            name="contribution"
            placeholder="I can build a mobile app"
            value={values.contribution}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              errors.contribution && touched.contribution && errors.contribution
            }
          />
          <InputText
            label="Why should you be selected for this position?"
            type="text"
            name="pitch"
            placeholder="I am hard-working and attentive to details"
            value={values.pitch}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.pitch && touched.pitch && errors.pitch}
          />

          <div className="flex justify-end">
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <Button color="cta" type="submit">
                Apply to challenge
              </Button>
            )}
          </div>
        </form>
      )}
    </Formik>
  );
}
