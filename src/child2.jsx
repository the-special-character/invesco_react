import React, { memo, useEffect } from 'react';

function Child2() {
  console.log('Child 2 component');
  useEffect(() => {
    const mouseMove = () => {
      console.log('mouse move');
    };

    document.addEventListener('mousemove', mouseMove);

    const interval = setInterval(() => {
      console.log('interval');
    }, 1000);

    // componentWillUnmount
    return () => {
      document.removeEventListener('mousemove', mouseMove);
      clearInterval(interval);
    };
  }, []);

  return <div>Child2</div>;
}

export default memo(Child2);
