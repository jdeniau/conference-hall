import React from 'react'
import PropTypes from 'prop-types'

import IconLabel from '../iconLabel'

const IconLink = ({
  icon, label, href, target, ...rest
}) => {
  if (!label || !href) return null
  return (
    <a href={href} target={target} {...rest}>
      <IconLabel icon={icon} label={label} />
    </a>
  )
}

IconLink.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
}

IconLink.defaultProps = {
  href: undefined,
  label: undefined,
  target: 'NEW',
}

export default IconLink