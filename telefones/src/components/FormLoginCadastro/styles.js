import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100%',
    justifyContent: 'center',
  },
  label: {
    color: 'white',
  },
  formulario: {
    width: '100%',
    display: 'flex',
  },
}));

export default useStyles;
