interface SurveyTimeInfoProps {
  surveyDate: string;
  duration: string;
};

const SurveyTimeInfo = ({ surveyDate, duration }: SurveyTimeInfoProps) => {
  return (
    <div>
      <div>Wypełniono: {surveyDate}</div>
      <div>Czas trwania: {duration}</div>
    </div>
  )
}

export default SurveyTimeInfo