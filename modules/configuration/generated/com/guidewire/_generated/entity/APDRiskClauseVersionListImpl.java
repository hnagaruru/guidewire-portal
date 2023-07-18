package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskClause.eti;APDRiskClause.eix;APDRiskClause.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDRiskClauseVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDRiskClauseVersionList {
  public APDRiskClauseVersionListImpl(entity.APDRiskClause base)  {
    super(base);
  }
  
  public APDRiskClauseVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.APDRiskClause AsOf(java.util.Date date) {
    return (entity.APDRiskClause)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskScheduleItem> RiskItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskClause.RISKITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskTerm> RiskTermsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskClause.RISKTERMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToRiskItems(entity.APDRiskScheduleItem bean) {
    addToArray(entity.APDRiskClause.RISKITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToRiskTerms(entity.APDRiskTerm bean) {
    addToArray(entity.APDRiskClause.RISKTERMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskClause> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskScheduleItemVersionList> getRiskItems() {
    return (java.util.List)getArray(entity.APDRiskClause.RISKITEMS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskTermVersionList> getRiskTerms() {
    return (java.util.List)getArray(entity.APDRiskClause.RISKTERMS_PROP.get());
  }
  
  
}