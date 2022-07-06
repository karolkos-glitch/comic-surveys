export interface SurveysSliderInfoProps {
  surveyCurrentNumber: number;
  totalSurveysCount: number;
}

const SurveysSliderInfo = ({ 
  surveyCurrentNumber, totalSurveysCount
}: SurveysSliderInfoProps) => {
  return (
    <h2>{`Ankieta ${surveyCurrentNumber}/${totalSurveysCount}`}</h2>
  )
}

export default SurveysSliderInfo