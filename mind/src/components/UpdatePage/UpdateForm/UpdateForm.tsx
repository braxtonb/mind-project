import { useFormik, FormikErrors } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  NAME_FIELD_LENGTHS,
  DESCRIPTION_FIELD_LENGTHS,
  LINK_FIELD_LENGTHS,
} from '../../../constants/form-constants';
import { INSPIRATION_MEDIA_TYPE } from '../../../constants/inspiration-contants';

import type { InspirationType } from '../../../constants/types';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    width: '100%',
  },
  textField: {},
  submit: {
    color: theme.palette.common.white,
    display: 'inline-flex',
    width: '100%',
  },
}));

const MEDIA_TYPE_OPTIONS = [
  { label: 'Image', value: INSPIRATION_MEDIA_TYPE.IMAGE },
  { label: 'Video', value: INSPIRATION_MEDIA_TYPE.VIDEO },
];

const updateFormSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(
      NAME_FIELD_LENGTHS.MIN.VALUE,
      NAME_FIELD_LENGTHS.MIN.DEFAULT_VALIDATION_MEASAGE,
    )
    .max(
      NAME_FIELD_LENGTHS.MAX.VALUE,
      NAME_FIELD_LENGTHS.MAX.DEFAULT_VALIDATION_MEASAGE,
    )
    .required('Name is required'),
  creatorName: Yup.string()
    .trim()
    .min(
      NAME_FIELD_LENGTHS.MIN.VALUE,
      NAME_FIELD_LENGTHS.MIN.DEFAULT_VALIDATION_MEASAGE,
    )
    .max(
      NAME_FIELD_LENGTHS.MAX.VALUE,
      NAME_FIELD_LENGTHS.MAX.DEFAULT_VALIDATION_MEASAGE,
    )
    .required('Name is required'),
  url: Yup.string()
    .trim()
    .min(
      LINK_FIELD_LENGTHS.MIN.VALUE,
      LINK_FIELD_LENGTHS.MIN.DEFAULT_VALIDATION_MEASAGE,
    )
    .max(
      LINK_FIELD_LENGTHS.MAX.VALUE,
      LINK_FIELD_LENGTHS.MAX.DEFAULT_VALIDATION_MEASAGE,
    )
    .required('URL is required'),
  mediaType: Yup.mixed()
    .oneOf([INSPIRATION_MEDIA_TYPE.IMAGE, INSPIRATION_MEDIA_TYPE.VIDEO])
    .required('Inspiration type is required'),
  mediaURL: Yup.string()
    .trim()
    .min(
      LINK_FIELD_LENGTHS.MIN.VALUE,
      LINK_FIELD_LENGTHS.MIN.DEFAULT_VALIDATION_MEASAGE,
    )
    .max(
      LINK_FIELD_LENGTHS.MAX.VALUE,
      LINK_FIELD_LENGTHS.MAX.DEFAULT_VALIDATION_MEASAGE,
    )
    .required('Media URL is required'),
  description: Yup.string()
    .trim()
    .min(
      DESCRIPTION_FIELD_LENGTHS.MIN.VALUE,
      DESCRIPTION_FIELD_LENGTHS.MIN.DEFAULT_VALIDATION_MEASAGE,
    )
    .max(
      DESCRIPTION_FIELD_LENGTHS.MAX.VALUE,
      DESCRIPTION_FIELD_LENGTHS.MAX.DEFAULT_VALIDATION_MEASAGE,
    )
    .notRequired(),
});

interface UpdateFormProps {
  isLoading?: boolean;
  inspiration: InspirationType;
  onSubmit: (values: InspirationType) => void;
}

const UpdateForm: React.FC<UpdateFormProps> = ({
  isLoading,
  inspiration,
  onSubmit,
}) => {
  const classes = useStyles();

  const _handleSubmit = async (values: InspirationType) => {
    try {
      onSubmit(values);

      formik.resetForm();
    } catch (error) {
      console.error('[UpdateForm] there was an error');
    }
  };

  const _isFormInvalid = (
    values: InspirationType,
    errors: FormikErrors<InspirationType>,
  ) => {
    const validFields = Object.values(values).filter(Boolean).length;
    const errorFields = Object.values(errors).length;

    return validFields === 0 || errorFields > 0;
  };

  const formik = useFormik({
    initialValues: inspiration,
    validationSchema: updateFormSchema,
    onSubmit: _handleSubmit,
  });

  return (
    <Grid container item component="form" onSubmit={formik.handleSubmit}>
      <TextField
        required
        id="name"
        name="name"
        label="Name"
        placeholder="Awesome site"
        variant="outlined"
        fullWidth
        margin="normal"
        className={classes.textField}
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={
          formik.touched.name && Boolean(formik.errors.name)
            ? formik.errors.name
            : NAME_FIELD_LENGTHS.BETWEEN.DEFAULT_HINT_MESSAGE
        }
      />

      <TextField
        required
        id="creatorName"
        name="creatorName"
        label="Creator name"
        placeholder="Awesome site"
        variant="outlined"
        fullWidth
        margin="normal"
        className={classes.textField}
        value={formik.values.creatorName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.creatorName && Boolean(formik.errors.creatorName)}
        helperText={
          formik.touched.creatorName && Boolean(formik.errors.creatorName)
            ? formik.errors.creatorName
            : NAME_FIELD_LENGTHS.BETWEEN.DEFAULT_HINT_MESSAGE
        }
      />

      <TextField
        required
        id="url"
        name="url"
        label="Site URL"
        placeholder="https://awwwards.com"
        variant="outlined"
        fullWidth
        margin="normal"
        className={classes.textField}
        value={formik.values.url}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.url && Boolean(formik.errors.url)}
        helperText={
          formik.touched.url && Boolean(formik.errors.url)
            ? formik.errors.url
            : LINK_FIELD_LENGTHS.BETWEEN.DEFAULT_HINT_MESSAGE
        }
      />

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="mediaType-label">Inspiration type</InputLabel>
        <Select
          labelId="mediaType-label"
          id="mediaType"
          name="mediaType"
          label="Inspiration type"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mediaType}
        >
          {MEDIA_TYPE_OPTIONS.map((mediaType) => (
            <MenuItem key={mediaType.value} value={mediaType.value}>
              {mediaType.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        required
        id="mediaURL"
        name="mediaURL"
        label="Media URL"
        placeholder="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        variant="outlined"
        fullWidth
        margin="normal"
        className={classes.textField}
        value={formik.values.mediaURL}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.mediaURL && Boolean(formik.errors.mediaURL)}
        helperText={
          formik.touched.mediaURL && Boolean(formik.errors.mediaURL)
            ? formik.errors.mediaURL
            : LINK_FIELD_LENGTHS.BETWEEN.DEFAULT_HINT_MESSAGE
        }
      />

      <TextField
        id="description"
        name="description"
        label="Description"
        placeholder="What inspired me the most about this site is..."
        variant="outlined"
        multiline
        rows={3}
        fullWidth
        margin="normal"
        className={classes.textField}
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={
          formik.touched.description && Boolean(formik.errors.description)
            ? formik.errors.description
            : DESCRIPTION_FIELD_LENGTHS.BETWEEN.DEFAULT_HINT_MESSAGE
        }
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disableElevation
        disabled={isLoading || _isFormInvalid(formik.values, formik.errors)}
        className={classes.submit}
      >
        Save
      </Button>
    </Grid>
  );
};

UpdateForm.defaultProps = {
  isLoading: false,
};

export default UpdateForm;
