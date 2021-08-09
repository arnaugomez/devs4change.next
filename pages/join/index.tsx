import { Formik, FormikHelpers } from "formik";
import Link from "next/link";
import React, { useEffect } from "react";
import Button from "../../src/common/view/components/atoms/Button";
import InputText from "../../src/common/view/components/forms/InputText";
import LoginFormCard from "../../src/user/view/components/LoginFormCard";
import * as yup from "yup";
import { useUserStore } from "../../src/user/view/store/userStore";
import { useRouter } from "next/router";

interface FormValues {
  userName: string;
  email: string;
  password: string;
}

const initialValues: FormValues = {
  userName: "",
  email: "",
  password: "",
};

const schema = yup.object().shape({
  userName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Join() {
  const router = useRouter();
  const { user, register } = useUserStore();

  async function onSubmit(values: FormValues, helpers: FormikHelpers<FormValues>) {
    await register(values.userName, values.email, values.password);
    helpers.setSubmitting(false);
  }

  useEffect(() => {
    if (user) {
      router.push("/profile");
    }
  }, [user, router]);

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
              label="Username"
              type="text"
              name="userName"
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.userName && touched.userName && errors.userName}
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
              <Link href="/" passHref>
                <Button hasBorder={false} isLink color="black">
                  Join as a non-profit
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
