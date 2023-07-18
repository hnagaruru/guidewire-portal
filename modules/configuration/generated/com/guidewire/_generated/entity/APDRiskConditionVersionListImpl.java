package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskCondition.eti;APDRiskCondition.eix;APDRiskCondition.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDRiskConditionVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDRiskConditionVersionList {
  public APDRiskConditionVersionListImpl(entity.APDRiskCondition base)  {
    super(base);
  }
  
  public APDRiskConditionVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.APDRiskCondition AsOf(java.util.Date date) {
    return (entity.APDRiskCondition)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskScheduleItem> RiskItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskCondition.RISKITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskTerm> RiskTermsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskCondition.RISKTERMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToRiskItems(entity.APDRiskScheduleItem bean) {
    addToArray(entity.APDRiskCondition.RISKITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToRiskTerms(entity.APDRiskTerm bean) {
    addToArray(entity.APDRiskCondition.RISKTERMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskCondition> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskScheduleItemVersionList> getRiskItems() {
    return (java.util.List)getArray(entity.APDRiskCondition.RISKITEMS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskTermVersionList> getRiskTerms() {
    return (java.util.List)getArray(entity.APDRiskCondition.RISKTERMS_PROP.get());
  }
  
  
}