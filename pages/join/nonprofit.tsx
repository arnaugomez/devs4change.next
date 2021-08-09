import { Formik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../../src/common/view/components/atoms/Button";
import InputText from "../../src/common/view/components/forms/InputText";
import LoginFormCard from "../../src/user/view/components/LoginFormCard";
import * as yup from "yup";

interface FormValues {
  user: string;
  email: string;
  password: string;
}

const initialValues: FormValues = {
  user: "",
  email: "",
  password: "",
};

const schema = yup.object().shape({
  user: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function JoinNonprofit() {
  function onSubmit(values: FormValues) {
    console.log(`Submit ${values.email} ${values.password} ${values.user}`);
  }

  return (
    <LoginFormCard title="Join as a non-profit">
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
              name="user"
              value={values.user}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.user && touched.user && errors.user}
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
                  Join as a dev
                </Button>
              </Link>
              <Button type="submit">Create account</Button>
            </div>
          </form>
        )}
      </Formik>
    </LoginFormCard>
  );
}
