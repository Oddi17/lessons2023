import { useState, useRef } from 'react'
import Button from '../button/Button'

let Collapse = (props) => {
  const [open, setOPen] = useState()
  const contentRef = useRef(null)

  const toggle = () => {
    setOPen(!open)
  }

  return (
    <div className={props.classIn}>
      <div className="collapse">
        <Button name="collapse-button" handleClick={toggle}>{props.label}</Button>
        <div
          className="content-parent"
          ref={contentRef}
          style={
            open
              ? { height: contentRef.current.scrollHeight + 'px' }
              : { height: '0px' }
          }
        >
          <div className="content">{props.children}</div>
        </div>
      </div>
    </div>
  )
}

export default Collapse
