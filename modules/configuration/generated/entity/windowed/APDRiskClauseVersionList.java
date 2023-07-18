package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskClause.eti;APDRiskClause.eix;APDRiskClause.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDRiskClauseVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.APDRiskClause AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskScheduleItem> RiskItemsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskTerm> RiskTermsAsOf(java.util.Date date);
  
  
  void addToRiskItems(entity.APDRiskScheduleItem bean);
  
  
  void addToRiskTerms(entity.APDRiskTerm bean);
  
  
  java.util.List<? extends entity.APDRiskClause> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.APDRiskScheduleItemVersionList> getRiskItems();
  
  
  java.util.List<? extends entity.windowed.APDRiskTermVersionList> getRiskTerms();
  
  
  
}