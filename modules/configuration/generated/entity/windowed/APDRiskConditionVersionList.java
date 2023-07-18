package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskCondition.eti;APDRiskCondition.eix;APDRiskCondition.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDRiskConditionVersionList extends entity.windowed.APDRiskClauseVersionList {
  entity.APDRiskCondition AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskScheduleItem> RiskItemsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskTerm> RiskTermsAsOf(java.util.Date date);
  
  
  void addToRiskItems(entity.APDRiskScheduleItem bean);
  
  
  void addToRiskTerms(entity.APDRiskTerm bean);
  
  
  java.util.List<? extends entity.APDRiskCondition> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.APDRiskScheduleItemVersionList> getRiskItems();
  
  
  java.util.List<? extends entity.windowed.APDRiskTermVersionList> getRiskTerms();
  
  
  
}