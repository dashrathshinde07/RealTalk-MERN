import React from 'react'

const StepName = ({onNext}) => {
  return (
    <div>
      Step name compo
      <button onClick={onNext}>Next</button>
    </div>
  )
}

export default StepName
