package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCJurisdiction.eti;WCJurisdiction.eix;WCJurisdiction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WCJurisdictionVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.WCJurisdiction AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCJurisdictionCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCStateCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.RatingPeriodStartDate> RatingPeriodStartDatesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCModifier> WCModifiersAsOf(java.util.Date date);
  
  
  void addToCosts(entity.WCJurisdictionCost bean);
  
  
  void addToCoverages(entity.WCStateCov bean);
  
  
  void addToRatingPeriodStartDates(entity.RatingPeriodStartDate bean);
  
  
  void addToWCModifiers(entity.WCModifier bean);
  
  
  java.util.List<? extends entity.WCJurisdiction> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.WCJurisdictionCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.WCStateCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.RatingPeriodStartDateVersionList> getRatingPeriodStartDates();
  
  
  java.util.List<? extends entity.windowed.WCModifierVersionList> getWCModifiers();
  
  
  
}