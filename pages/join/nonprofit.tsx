import { Formik, FormikHelpers } from "formik";
import Link from "next/link";
import React from "react";
import Button from "../../src/common/view/components/atoms/Button";
import InputText from "../../src/common/view/components/forms/InputText";
import LoginFormCard from "../../src/user/view/components/LoginFormCard";
import * as yup from "yup";
import { useUserStore } from "../../src/user/view/store/userStore";
import { UserType } from "../../src/user/domain/UserType";
import { useLoginRedirect } from "../../src/user/view/hooks/useLoginRedirect";

interface FormValues {
  displayName: string;
  email: string;
  password: string;
}

const initialValues: FormValues = {
  displayName: "",
  email: "",
  password: "",
};

const schema = yup.object().shape({
  displayName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function JoinNonprofit() {
  useLoginRedirect();
  const { register } = useUserStore();

  async function onSubmit(
    values: FormValues,
    helpers: FormikHelpers<FormValues>
  ) {
    await register(
      values.displayName,
      values.email,
      values.password,
      UserType.NONPROFIT
    );
    helpers.setSubmitting(false);
  }

  return (
    <LoginFormCard title="Join as a nonprofit">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <InputText
              label="Username"
              type="text"
              name="displayName"
              value={values.displayName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.displayName && touched.displayName && errors.displayName
              }
            />
            <InputText
              label="Email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email && errors.email}
            />
            <InputText
              label="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password && touched.password && errors.password}
            />
            <div className="pt-4 flex justify-between space-x-4">
              <Link href="/join" passHref>
                <Button hasBorder={false} isLink color="black">
                  I am a developer
                </Button>
              </Link>
              {isSubmitting ? (
                <span>Submitting...</span>
              ) : (
                <Button type="submit">Create account</Button>
              )}
            </div>
          </form>
        )}
      </Formik>
    </LoginFormCard>
  );
}
