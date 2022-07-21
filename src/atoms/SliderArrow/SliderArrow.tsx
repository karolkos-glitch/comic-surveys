interface SliderArrowProps {
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
  type: 'previous' | 'next';
}

const SliderArrow = ({
   onClickHandler,
   type, 
}: SliderArrowProps) => {
  const contents = {
    previous: '<',
    next: '>'
  };
 
  return (
    <button type="button" onClick={onClickHandler}>{contents[type]}</button>
  )
}

export default SliderArrow