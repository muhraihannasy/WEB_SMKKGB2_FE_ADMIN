import { forwardRef, useEffect, useRef, useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';

const CheckboxTable = forwardRef(({ indetermindate, ...rest }, ref) => {
  const [checked, setChecked] = useState(false);

  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indetermindate;
  }, [resolvedRef, indetermindate]);

  useEffect(() => {
    setChecked(resolvedRef.current.checked);
  });

  const style = {
    parent: 'flex items-center relative',
    input: 'absolute w-full h-full opacity-0',
    checkBoxToggle: `flex items-center justify-center w-[20px] h-[20px] mr-1 border-2 border-meta-9 rounded-md  text-white transition-colors text-[1em]
          ${checked ? 'bg-bodydark2' : ''}
          `,
  };

  return (
    <div className={style.parent}>
      <input
        type="checkbox"
        ref={resolvedRef}
        {...rest}
        className={style.input}
      />

      <div className={style.checkBoxToggle}>{checked && <BsCheckLg />}</div>
    </div>
  );
});

export default CheckboxTable;
