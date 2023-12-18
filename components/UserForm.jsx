import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const UserForm = ({ setUserForm }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    department: "",
    company: "",
    currentPassword: "",
    newPassword: ""
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    department: Yup.string().required("Department is required"),
    company: Yup.string().required("Company is required"),
    currentPassword: Yup.string().required("Current Password is required"),
    newPassword: Yup.string().required("New Password is required")
  });

  const inputClasses =
    "shadow-sm bg-gray-50 border border-gray-300 focus:border-cyan-600 rounded-md text-gray-900 focus:ring-cyan-600  p-2 mb-4 w-full";

  const onSubmit = (values, { resetForm }) => {
    console.log("Form Gönderildi", values);
    resetForm();
    setUserForm(false); // Form gönderildikten sonra formu kapat
  };

  return (
    <div className="bg-white gap-5 w-[40%]  border-2 p-5 absolute top-10 left-[30%] ">
      <div className="flex justify-between">
        <h1 className="mb-5"> Edit User</h1>
        <svg
          className="w-5 h-5 cursor-pointer"
          onClick={() => setUserForm(false)}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className="grid grid-cols-2 gap-5 items-center">
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" id="firstName" name="firstName" className={inputClasses} />
            <ErrorMessage name="firstName" component="div" />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" className={inputClasses} />
            <ErrorMessage name="lastName" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" className={inputClasses} />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field type="text" id="phoneNumber" name="phoneNumber" className={inputClasses} />
            <ErrorMessage name="phoneNumber" component="div" />
          </div>

          <div>
            <label htmlFor="department">Department</label>
            <Field type="text" id="department" name="department" className={inputClasses} />
            <ErrorMessage name="department" component="div" />
          </div>

          <div>
            <label htmlFor="company">Company</label>
            <Field type="text" id="company" name="company" className={inputClasses} />
            <ErrorMessage name="company" component="div" />
          </div>

          <div>
            <label htmlFor="currentPassword">Current Password</label>
            <Field type="password" id="currentPassword" name="currentPassword" className={inputClasses} />
            <ErrorMessage name="currentPassword" component="div" />
          </div>

          <div>
            <label htmlFor="newPassword">New Password</label>
            <Field type="password" id="newPassword" name="newPassword" className={inputClasses} />
            <ErrorMessage name="newPassword" component="div" />
          </div>

        <div className=" text-center col-span-2 rounded-full ">  <button className="bg-addcolor rounded-full px-3 py-1" type="submit">
            Add new user
          </button></div>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
