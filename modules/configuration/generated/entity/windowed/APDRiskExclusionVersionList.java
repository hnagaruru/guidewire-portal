package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskExclusion.eti;APDRiskExclusion.eix;APDRiskExclusion.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDRiskExclusionVersionList extends entity.windowed.APDRiskClauseVersionList {
  entity.APDRiskExclusion AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskScheduleItem> RiskItemsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskTerm> RiskTermsAsOf(java.util.Date date);
  
  
  void addToRiskItems(entity.APDRiskScheduleItem bean);
  
  
  void addToRiskTerms(entity.APDRiskTerm bean);
  
  
  java.util.List<? extends entity.APDRiskExclusion> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.APDRiskScheduleItemVersionList> getRiskItems();
  
  
  java.util.List<? extends entity.windowed.APDRiskTermVersionList> getRiskTerms();
  
  
  
}