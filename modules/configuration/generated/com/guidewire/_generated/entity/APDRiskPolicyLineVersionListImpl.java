package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskPolicyLine.eti;APDRiskPolicyLine.eix;APDRiskPolicyLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDRiskPolicyLineVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDRiskPolicyLineVersionList {
  public APDRiskPolicyLineVersionListImpl(entity.APDRiskPolicyLine base)  {
    super(base);
  }
  
  public APDRiskPolicyLineVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.Apdriskcoverableparent> ApdriskcoverableparentArrayAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskPolicyLine.APDRISKCOVERABLEPARENTARRAY_PROP.get(), date);
  }
  
  @java.lang.Override
  public entity.APDRiskPolicyLine AsOf(java.util.Date date) {
    return (entity.APDRiskPolicyLine)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskPricing> CostPricingAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskPolicyLine.COSTPRICING_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskClause> RiskClausesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskPolicyLine.RISKCLAUSES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskCost> RiskCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskPolicyLine.RISKCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskExposure> RiskExposuresAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskPolicyLine.RISKEXPOSURES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskField> RiskFieldsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskPolicyLine.RISKFIELDS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToApdriskcoverableparentArray(entity.Apdriskcoverableparent bean) {
    addToArray(entity.APDRiskPolicyLine.APDRISKCOVERABLEPARENTARRAY_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCostPricing(entity.APDRiskPricing bean) {
    addToArray(entity.APDRiskPolicyLine.COSTPRICING_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToRiskClauses(entity.APDRiskClause bean) {
    addToArray(entity.APDRiskPolicyLine.RISKCLAUSES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToRiskCosts(entity.APDRiskCost bean) {
    addToArray(entity.APDRiskPolicyLine.RISKCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToRiskExposures(entity.APDRiskExposure bean) {
    addToArray(entity.APDRiskPolicyLine.RISKEXPOSURES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToRiskFields(entity.APDRiskField bean) {
    addToArray(entity.APDRiskPolicyLine.RISKFIELDS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskPolicyLine> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.ApdriskcoverableparentVersionList> getApdriskcoverableparentArray() {
    return (java.util.List)getArray(entity.APDRiskPolicyLine.APDRISKCOVERABLEPARENTARRAY_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskPricingVersionList> getCostPricing() {
    return (java.util.List)getArray(entity.APDRiskPolicyLine.COSTPRICING_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskClauseVersionList> getRiskClauses() {
    return (java.util.List)getArray(entity.APDRiskPolicyLine.RISKCLAUSES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskCostVersionList> getRiskCosts() {
    return (java.util.List)getArray(entity.APDRiskPolicyLine.RISKCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskExposureVersionList> getRiskExposures() {
    return (java.util.List)getArray(entity.APDRiskPolicyLine.RISKEXPOSURES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskFieldVersionList> getRiskFields() {
    return (java.util.List)getArray(entity.APDRiskPolicyLine.RISKFIELDS_PROP.get());
  }
  
  
}