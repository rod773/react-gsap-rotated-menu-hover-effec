import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

const StyledCursor = styled.div`
  cursor: pointer;
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  top: 0;
  left: 0;
  z-index: 10;
  will-change: transform;
  transform: translate(-50%, -50%);
  background: #9d9d9c;
  border-radius: 100%;
  pointer-events: none;
`;

const Cursor = forwardRef((props, ref) => {
  const el = useRef();
  useImperativeHandle(
    ref,
    () => {
      // Return the API
      return {
        // Methods
        moveTo: (x, y) => {
          gsap.to(el.current, {
            duration: 1.2,
            x,
            y,
          });
        },
      };
    },
    []
  );
  return <StyledCursor ref={el} />;
});

export default Cursor;
