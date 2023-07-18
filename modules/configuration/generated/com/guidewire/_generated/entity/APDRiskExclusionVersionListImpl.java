package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskExclusion.eti;APDRiskExclusion.eix;APDRiskExclusion.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDRiskExclusionVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDRiskExclusionVersionList {
  public APDRiskExclusionVersionListImpl(entity.APDRiskExclusion base)  {
    super(base);
  }
  
  public APDRiskExclusionVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.APDRiskExclusion AsOf(java.util.Date date) {
    return (entity.APDRiskExclusion)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskScheduleItem> RiskItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskExclusion.RISKITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskTerm> RiskTermsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskExclusion.RISKTERMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToRiskItems(entity.APDRiskScheduleItem bean) {
    addToArray(entity.APDRiskExclusion.RISKITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToRiskTerms(entity.APDRiskTerm bean) {
    addToArray(entity.APDRiskExclusion.RISKTERMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskExclusion> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskScheduleItemVersionList> getRiskItems() {
    return (java.util.List)getArray(entity.APDRiskExclusion.RISKITEMS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskTermVersionList> getRiskTerms() {
    return (java.util.List)getArray(entity.APDRiskExclusion.RISKTERMS_PROP.get());
  }
  
  
}