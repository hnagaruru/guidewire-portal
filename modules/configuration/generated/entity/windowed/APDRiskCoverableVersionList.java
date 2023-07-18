package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskCoverable.eti;APDRiskCoverable.eix;APDRiskCoverable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDRiskCoverableVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  java.util.List<? extends entity.Apdriskcoverableparent> ApdriskcoverableparentArrayAsOf(java.util.Date date);
  
  
  entity.APDRiskCoverable AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskPricing> CostPricingAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskClause> RiskClausesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskCost> RiskCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskExposure> RiskExposuresAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskField> RiskFieldsAsOf(java.util.Date date);
  
  
  void addToApdriskcoverableparentArray(entity.Apdriskcoverableparent bean);
  
  
  void addToCostPricing(entity.APDRiskPricing bean);
  
  
  void addToRiskClauses(entity.APDRiskClause bean);
  
  
  void addToRiskCosts(entity.APDRiskCost bean);
  
  
  void addToRiskExposures(entity.APDRiskExposure bean);
  
  
  void addToRiskFields(entity.APDRiskField bean);
  
  
  java.util.List<? extends entity.APDRiskCoverable> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.ApdriskcoverableparentVersionList> getApdriskcoverableparentArray();
  
  
  java.util.List<? extends entity.windowed.APDRiskPricingVersionList> getCostPricing();
  
  
  java.util.List<? extends entity.windowed.APDRiskClauseVersionList> getRiskClauses();
  
  
  java.util.List<? extends entity.windowed.APDRiskCostVersionList> getRiskCosts();
  
  
  java.util.List<? extends entity.windowed.APDRiskExposureVersionList> getRiskExposures();
  
  
  java.util.List<? extends entity.windowed.APDRiskFieldVersionList> getRiskFields();
  
  
  
}