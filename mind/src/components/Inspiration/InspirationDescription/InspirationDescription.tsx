import Typography from '@material-ui/core/Typography';

interface InspirationDescriptionProps {
  description: string;
}

const InspirationDescription: React.FC<InspirationDescriptionProps> = ({
  description,
}) => {
  return <Typography variant="subtitle2">{description}</Typography>;
};

export default InspirationDescription;
