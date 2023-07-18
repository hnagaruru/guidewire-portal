package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskCoverage.eti;APDRiskCoverage.eix;APDRiskCoverage.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDRiskCoverageVersionList extends entity.windowed.APDRiskClauseVersionList {
  entity.APDRiskCoverage AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskCovPricing> CostPricingAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskCovCost> RiskCovCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskScheduleItem> RiskItemsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDRiskTerm> RiskTermsAsOf(java.util.Date date);
  
  
  void addToCostPricing(entity.APDRiskCovPricing bean);
  
  
  void addToRiskCovCosts(entity.APDRiskCovCost bean);
  
  
  void addToRiskItems(entity.APDRiskScheduleItem bean);
  
  
  void addToRiskTerms(entity.APDRiskTerm bean);
  
  
  java.util.List<? extends entity.APDRiskCoverage> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.APDRiskCovPricingVersionList> getCostPricing();
  
  
  java.util.List<? extends entity.windowed.APDRiskCovCostVersionList> getRiskCovCosts();
  
  
  java.util.List<? extends entity.windowed.APDRiskScheduleItemVersionList> getRiskItems();
  
  
  java.util.List<? extends entity.windowed.APDRiskTermVersionList> getRiskTerms();
  
  
  
}