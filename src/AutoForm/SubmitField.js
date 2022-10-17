import clsx from 'clsx'

function SubmitField(props) {
  const {classes, className} = props;
  return (
    <input className={clsx(classes.root, className)} type='submit' />
  )
}

export default SubmitField