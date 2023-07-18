package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskCoverage.eti;APDRiskCoverage.eix;APDRiskCoverage.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDRiskCoverageVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDRiskCoverageVersionList {
  public APDRiskCoverageVersionListImpl(entity.APDRiskCoverage base)  {
    super(base);
  }
  
  public APDRiskCoverageVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.APDRiskCoverage AsOf(java.util.Date date) {
    return (entity.APDRiskCoverage)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskCovPricing> CostPricingAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskCoverage.COSTPRICING_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskCovCost> RiskCovCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskCoverage.RISKCOVCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskScheduleItem> RiskItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskCoverage.RISKITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskTerm> RiskTermsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskCoverage.RISKTERMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCostPricing(entity.APDRiskCovPricing bean) {
    addToArray(entity.APDRiskCoverage.COSTPRICING_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToRiskCovCosts(entity.APDRiskCovCost bean) {
    addToArray(entity.APDRiskCoverage.RISKCOVCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToRiskItems(entity.APDRiskScheduleItem bean) {
    addToArray(entity.APDRiskCoverage.RISKITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToRiskTerms(entity.APDRiskTerm bean) {
    addToArray(entity.APDRiskCoverage.RISKTERMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskCoverage> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskCovPricingVersionList> getCostPricing() {
    return (java.util.List)getArray(entity.APDRiskCoverage.COSTPRICING_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskCovCostVersionList> getRiskCovCosts() {
    return (java.util.List)getArray(entity.APDRiskCoverage.RISKCOVCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskScheduleItemVersionList> getRiskItems() {
    return (java.util.List)getArray(entity.APDRiskCoverage.RISKITEMS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskTermVersionList> getRiskTerms() {
    return (java.util.List)getArray(entity.APDRiskCoverage.RISKTERMS_PROP.get());
  }
  
  
}