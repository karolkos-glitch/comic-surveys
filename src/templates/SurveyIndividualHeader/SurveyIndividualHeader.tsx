import SurveyTimeInfo from "@comic/molecules/SurveyTimeInfo";
import SurveyIndividualNavigation 
from "@comic/organisms/SurveyIndividualNavigation";

interface SurveyIndividualHeaderProps {
  nextSurvey: React.MouseEventHandler<HTMLButtonElement>,
  previousSurvey: React.MouseEventHandler<HTMLButtonElement>,
  currentSurveyNumber: number;
  totalSurveysCount: number;
  completeSurveyTime: string;
  duration: string;
};

const SurveyIndividualHeader = ({
  nextSurvey, previousSurvey,
  currentSurveyNumber, totalSurveysCount,
  duration, completeSurveyTime,
} : SurveyIndividualHeaderProps) => {
  return (
    <div>
      <SurveyIndividualNavigation 
        onNext={nextSurvey} 
        onPrevious={previousSurvey}
        surveyCurrentNumber={currentSurveyNumber}
        totalSurveysCount={totalSurveysCount}
      />
      <SurveyTimeInfo 
        duration={duration} 
        surveyDate={completeSurveyTime}
      />
    </div>
  )
}

export default SurveyIndividualHeader