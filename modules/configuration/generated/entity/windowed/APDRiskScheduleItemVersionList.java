package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskScheduleItem.eti;APDRiskScheduleItem.eix;APDRiskScheduleItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDRiskScheduleItemVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.APDRiskScheduleItem AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskScheduleTerm> ItemTermsAsOf(java.util.Date date);
  
  
  void addToItemTerms(entity.APDRiskScheduleTerm bean);
  
  
  java.util.List<? extends entity.APDRiskScheduleItem> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.APDRiskScheduleTermVersionList> getItemTerms();
  
  
  
}