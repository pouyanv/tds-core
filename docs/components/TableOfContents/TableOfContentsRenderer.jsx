import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../../src/components/Box/Box'
import Input from '../../../src/components/Input/Input'

const TableOfContentsRenderer = ({ children, searchTerm, onSearchTermChange }) => {

  return (
    <Box>
      <Box inset={3} below={2}>
        <Input
          value={searchTerm}
          label="Filter by name"
          onChange={e => onSearchTermChange(e.target.value)}
        />
      </Box>
      {children}
    </Box>
  )
}


TableOfContentsRenderer.propTypes = {
  children: PropTypes.object.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearchTermChange: PropTypes.func.isRequired
}

export default TableOfContentsRenderer
