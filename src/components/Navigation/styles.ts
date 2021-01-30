import { makeStyles } from '@material-ui/styles';

import { colors } from '../../styles/theme'

const styles = makeStyles(() => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        margin: '0 20px',
        padding: '7px 35px',
        fontSize: '16px',
        '&:hover': {
            opacity: 0.7
        }
    },
    inactive: {
        background: colors.white,
        color: colors.hotCoral,
        '&:hover': {
            color: colors.white,
            background: colors.hotCoral,
        }

    }
}))

export default styles