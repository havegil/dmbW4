import PropTypes from 'prop-types'

const Calories = ({
  name,
  children,
  nextLine,
  style,
  suffix="cal",
  captionClass = "",
  indentCals = true,
  pushRight = 0
}) => (
  <span
    className='c-Menus_caption c-Menus_caption-highlight'
    style={{
      ...style,
      ...(nextLine ? { display: 'block' } : {}),
      ...(pushRight ? { marginLeft: pushRight } : {})
    }}
  >
    <span className={captionClass + ' cals'}>
      {/* 
      {indentCals &&
       <span>&nbsp;</span>
      } */}
      {(children && `${children}`.includes('cal'))
        ? children
        : `${children} ${suffix}`
      }
    </span>
  </span>
)

Calories.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  // If true, display: block this element
  nextLine: PropTypes.bool,
  captionClass: PropTypes.string
}

export default Calories
