import { Formik, FormikHelpers } from "formik";
import Link from "next/link";
import React from "react";
import Button from "../../src/common/view/components/atoms/Button";
import InputText from "../../src/common/view/components/forms/InputText";
import LoginFormCard from "../../src/user/view/components/LoginFormCard";
import * as yup from "yup";
import { useUserStore } from "../../src/user/view/store/userStore";
import { useLoginRedirect } from "../../src/user/view/hooks/useLoginRedirect";
import { useNonprofitStore } from "../../src/nonprofit/view/store/nonprofitStore";

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Login() {
  useLoginRedirect();
  const { login } = useUserStore();

  async function onSubmit(
    values: FormValues,
    helpers: FormikHelpers<FormValues>
  ) {
    await login(values.email, values.password);
    helpers.setSubmitting(false);
  }

  return (
    <LoginFormCard title="Join">
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
                  Create account
                </Button>
              </Link>
              {isSubmitting ? (
                <span>Submitting...</span>
              ) : (
                <Button type="submit">Log in</Button>
              )}
            </div>
          </form>
        )}
      </Formik>
    </LoginFormCard>
  );
}
