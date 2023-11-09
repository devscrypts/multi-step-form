// eslint-disable-next-line no-restricted-imports
import {List, useWatch} from "rc-field-form";
import InternalForm from "./form";
import useForm from "./hooks/useForm";
import Checkbox from "./fields/Checkbox";
import Input from "./fields/Input";
import RadioGroup from "./fields/RadioGroup";
import Item from "./item";

const Form = InternalForm;

Form.List = List;
Form.useForm = useForm;
Form.useWatch = useWatch;
Form.Item = Item;

export {Checkbox, Input, RadioGroup};

export default Form;
