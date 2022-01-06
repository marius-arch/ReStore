import * as yup from "yup";

export const validationSchema = [
    yup.object({
        fullName: yup.string().required("The full name is required"),
        address1: yup.string().required("The address line 1 is required"),
        address2: yup.string().required("the address line 2 is required"),
        city: yup.string().required("The city is required"),
        state: yup.string().required("The state is required"),
        zip: yup.string().required("The Zip is required"),
        country: yup.string().required("The Country is required"),
    }),
    yup.object(),
    yup.object({
        nameOnCard: yup.string().required()
    })

];
