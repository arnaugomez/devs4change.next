import { Formik, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import React from "react";
import * as yup from "yup";
import Button from "../../common/view/components/atoms/Button";
import InputDate from "../../common/view/components/forms/InputDate";
import InputNumber from "../../common/view/components/forms/InputNumber";
import InputText from "../../common/view/components/forms/InputText";
import { useChallengeStore } from "./store/challengeStore";

interface FormValues {
  name: string;
  /** Short description of the challenge */
  intro: string;
  /** Expected result of the challenge */
  result: string;
  /** A long explanation of the challenge, in html markup */
  description?: string; // TODO: Implement with WYSIWIG editor
  /** Expected duration of the challenge */
  duration?: string;
  /** Expected amount of developers that we need to complete the challenge. 1-5 developers */
  developersAmount?: number;
  /** Expected date that the challenge will start */
  startDate?: Date;
}

const formValues: FormValues = {
  name: "",
  intro: "",
  result: "",
  description: "",
  duration: "",
  developersAmount: null,
  startDate: new Date(),
};

const schema = yup.object().shape({
  name: yup.string().required(),
  intro: yup.string().required(),
  result: yup.string().required(),
  description: yup.string().notRequired(),
  duration: yup.string().notRequired(),
  developersAmount: yup.number().moreThan(0).lessThan(6),
});

export default function NewChallengeForm() {
  const challengeStore = useChallengeStore();
  const router = useRouter();
  async function handleSubmit(
    values: FormValues,
    helpers: FormikHelpers<FormValues>
  ) {
    const challenge = await challengeStore.create(values);
    helpers.setSubmitting(false);
    await router.push(`/challenge/${challenge.slug}`);
  }
  return (
    <Formik
      initialValues={formValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        setFieldValue,
        handleSubmit,
        isSubmitting,
      }) => (
        <form
          className="pt-8 space-y-4 max-w-screen-md m-auto"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="w-2/3">
            <InputText
              label="Challenge name"
              type="text"
              name="name"
              placeholder="Local wildlife app"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name && touched.name && errors.name}
            />
          </div>
          <InputText
            label="Describe your challenge in one sentence."
            type="text"
            name="intro"
            placeholder="Build an educational mobile app about local wildlife conservation"
            value={values.intro}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.intro && touched.intro && errors.intro}
          />
          <InputText
            label="What should the developers build? Describe it in one sentence."
            type="text"
            name="result"
            placeholder="A mobile app that runs on iOS and Android devices"
            value={values.result}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.result && touched.result && errors.result}
          />
          <div className="flex gap-4">
            <InputText
              label="Expected duration of the project"
              type="text"
              name="duration"
              placeholder="1-2 months"
              value={values.duration}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.duration && touched.duration && errors.duration}
            />
            <InputNumber
              label="Amount of developers needed"
              name="duration"
              placeholder="1-5"
              value={values.developersAmount}
              onChange={(e) =>
                setFieldValue("developersAmount", parseInt(e.target.value))
              }
              onBlur={handleBlur}
              error={
                errors.developersAmount &&
                touched.developersAmount &&
                errors.developersAmount
              }
            />
          </div>
          <InputDate
            value={values.startDate}
            label="Expected start date"
            onChange={(date) => setFieldValue("startDate", date)}
            onBlur={handleBlur}
            error={
              errors.startDate &&
              touched.startDate &&
              (errors.startDate as string)
            }
          />
          <div className="flex justify-end">
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <Button type="submit">Create Challenge</Button>
            )}
          </div>
        </form>
      )}
    </Formik>
  );
}
