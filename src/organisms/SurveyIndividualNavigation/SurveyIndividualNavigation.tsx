import SliderArrow from "@comic/atoms/SliderArrow";
import type { SurveysSliderInfoProps } 
from "@comic/molecules/SurveysSliderInfo/SurveysSliderInfo";
import SurveysSliderInfo 
from "@comic/molecules/SurveysSliderInfo/SurveysSliderInfo";

type SurveyIndividualNavigationProps = SurveysSliderInfoProps & {
  onNext: React.MouseEventHandler<HTMLButtonElement>,
  onPrevious: React.MouseEventHandler<HTMLButtonElement>,
};

const SurveyIndividualNavigation = ({
  onPrevious, onNext, 
  totalSurveysCount, surveyCurrentNumber
}: SurveyIndividualNavigationProps) => {
  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <SliderArrow type="previous" onClickHandler={onPrevious}/>
      <SurveysSliderInfo 
        totalSurveysCount={totalSurveysCount} 
        surveyCurrentNumber={surveyCurrentNumber}
      />
      <SliderArrow type="next" onClickHandler={onNext}/>
    </div>
  )
}

export default SurveyIndividualNavigation