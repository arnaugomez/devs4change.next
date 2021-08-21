import { Formik, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import React from "react";
import * as yup from "yup";
import Button from "../../../common/view/components/atoms/Button";
import Loading from "../../../common/view/components/atoms/Loading";
import InputText from "../../../common/view/components/forms/InputText";
import InputWysiwig from "../../../common/view/components/forms/InputWysiwig";
import { useUserStore } from "../store/userStore";

interface FormValues {
  displayName: string;
  intro?: string;
  bio?: string;
}

const schema = yup.object().shape({
  displayName: yup.string().required(),
  intro: yup.string().notRequired(),
  bio: yup.string().notRequired(),
});

export default function EditProfileForm() {
  const { user, edit } = useUserStore();
  const router = useRouter()

  if (!user) {
    return <Loading />;
  }
  const { displayName, intro, bio } = user;
  const initialValues: FormValues = { displayName, intro: intro || "", bio: bio || "" };

  async function handleSubmit(
    values: FormValues,
    helpers: FormikHelpers<FormValues>
  ) {
    await edit(values)
    helpers.setSubmitting(false)
    router.push('/profile')
  }
  return (
    <Formik
      initialValues={initialValues}
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
              label="User name"
              type="text"
              name="displayName"
              placeholder=""
              value={values.displayName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.displayName && touched.displayName && errors.displayName
              }
            />
          </div>
          <InputText
            label="Describe who you are in a sentence"
            type="text"
            name="intro"
            placeholder=""
            value={values.intro}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.intro && touched.intro && errors.intro}
          />
          <InputWysiwig
            value={values.bio}
            placeholder="Tell us who you are and what you do. You can write as much as you want!"
            label="Add a bio to your profile"
            onChange={(content) => setFieldValue("bio", content)}
            error={errors.bio && touched.bio && errors.bio}
          />
          <div className="flex justify-end">
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <Button type="submit">Save changes</Button>
            )}
          </div>
        </form>
      )}
    </Formik>
  );
}
