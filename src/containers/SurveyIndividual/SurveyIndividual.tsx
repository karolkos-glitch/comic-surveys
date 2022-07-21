import SurveyIndividualHeader from "@comic/templates/SurveyIndividualHeader";

import SingleChoiceQuestionAnswer 
from "@comic/templates/SingleChoiceQuestionAnswer";

const SurveyIndividual = () => {
  return (
    <section>
      <SurveyIndividualHeader 
        previousSurvey={()=>null} 
        nextSurvey={()=>null}
        duration="21s"
        completeSurveyTime="2022-04-02-15:32"
        currentSurveyNumber={12}
        totalSurveysCount={20}
      />
      <SingleChoiceQuestionAnswer 
        title="Pytanie 1" 
        questionText="Jak zyc dobrze?" 
        content="Nie wiem :C"
      />
      <SingleChoiceQuestionAnswer 
        title="Pytanie 2" 
        questionText="Jak zyc źle?" 
        content="Niestety wiem :C"
      />
      <SingleChoiceQuestionAnswer 
        title="Pytanie 3" 
        questionText="Chcesz coś dodać?" 
        content="Nope.."
      />
    </section>
  )
}

export default SurveyIndividual