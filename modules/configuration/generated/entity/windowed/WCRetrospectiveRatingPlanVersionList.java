package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCRetrospectiveRatingPlan.eti;WCRetrospectiveRatingPlan.eix;WCRetrospectiveRatingPlan.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WCRetrospectiveRatingPlanVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.WCRetrospectiveRatingPlan AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCRetroRatingLetterOfCredit> LettersOfCreditAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCStateMultiplier> StateMultipliersAsOf(java.util.Date date);
  
  
  void addToLettersOfCredit(entity.WCRetroRatingLetterOfCredit bean);
  
  
  void addToStateMultipliers(entity.WCStateMultiplier bean);
  
  
  java.util.List<? extends entity.WCRetrospectiveRatingPlan> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.WCRetroRatingLetterOfCreditVersionList> getLettersOfCredit();
  
  
  java.util.List<? extends entity.windowed.WCStateMultiplierVersionList> getStateMultipliers();
  
  
  
}