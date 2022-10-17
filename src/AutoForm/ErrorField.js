import {useFormContext, useSchemaContext} from "./FormProvider";

function ErrorField(props) {
    const {name} = props;

    const schema = useSchemaContext();
    const {formState: { errors }} = useFormContext();

    const field = schema.properties[name];

    return (
        <>
            {errors[name] && <p role="alert">{field.errors[errors[name].type]}</p>}
        </>
    )
}

export default ErrorField;