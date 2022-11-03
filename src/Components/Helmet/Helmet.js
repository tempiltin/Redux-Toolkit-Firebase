const Helmet = (props) => {
  document.title = process.env.REACT_APP_TITLE_NAME + props.title
  return <div className='w-100'>{props.children}</div>
}
export default Helmet;