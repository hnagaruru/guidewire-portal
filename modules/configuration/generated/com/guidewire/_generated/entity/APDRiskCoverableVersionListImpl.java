package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskCoverable.eti;APDRiskCoverable.eix;APDRiskCoverable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDRiskCoverableVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDRiskCoverableVersionList {
  public APDRiskCoverableVersionListImpl(entity.APDRiskCoverable base)  {
    super(base);
  }
  
  public APDRiskCoverableVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.Apdriskcoverableparent> ApdriskcoverableparentArrayAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskCoverable.APDRISKCOVERABLEPARENTARRAY_PROP.get(), date);
  }
  
  @java.lang.Override
  public entity.APDRiskCoverable AsOf(java.util.Date date) {
    return (entity.APDRiskCoverable)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskPricing> CostPricingAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskCoverable.COSTPRICING_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskClause> RiskClausesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskCoverable.RISKCLAUSES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskCost> RiskCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskCoverable.RISKCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskExposure> RiskExposuresAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskCoverable.RISKEXPOSURES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskField> RiskFieldsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskCoverable.RISKFIELDS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToApdriskcoverableparentArray(entity.Apdriskcoverableparent bean) {
    addToArray(entity.APDRiskCoverable.APDRISKCOVERABLEPARENTARRAY_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCostPricing(entity.APDRiskPricing bean) {
    addToArray(entity.APDRiskCoverable.COSTPRICING_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToRiskClauses(entity.APDRiskClause bean) {
    addToArray(entity.APDRiskCoverable.RISKCLAUSES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToRiskCosts(entity.APDRiskCost bean) {
    addToArray(entity.APDRiskCoverable.RISKCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToRiskExposures(entity.APDRiskExposure bean) {
    addToArray(entity.APDRiskCoverable.RISKEXPOSURES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToRiskFields(entity.APDRiskField bean) {
    addToArray(entity.APDRiskCoverable.RISKFIELDS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskCoverable> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.ApdriskcoverableparentVersionList> getApdriskcoverableparentArray() {
    return (java.util.List)getArray(entity.APDRiskCoverable.APDRISKCOVERABLEPARENTARRAY_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskPricingVersionList> getCostPricing() {
    return (java.util.List)getArray(entity.APDRiskCoverable.COSTPRICING_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskClauseVersionList> getRiskClauses() {
    return (java.util.List)getArray(entity.APDRiskCoverable.RISKCLAUSES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskCostVersionList> getRiskCosts() {
    return (java.util.List)getArray(entity.APDRiskCoverable.RISKCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskExposureVersionList> getRiskExposures() {
    return (java.util.List)getArray(entity.APDRiskCoverable.RISKEXPOSURES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskFieldVersionList> getRiskFields() {
    return (java.util.List)getArray(entity.APDRiskCoverable.RISKFIELDS_PROP.get());
  }
  
  
}