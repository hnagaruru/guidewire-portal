package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskScheduleItem.eti;APDRiskScheduleItem.eix;APDRiskScheduleItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDRiskScheduleItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDRiskScheduleItemVersionList {
  public APDRiskScheduleItemVersionListImpl(entity.APDRiskScheduleItem base)  {
    super(base);
  }
  
  public APDRiskScheduleItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.APDRiskScheduleItem AsOf(java.util.Date date) {
    return (entity.APDRiskScheduleItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskScheduleTerm> ItemTermsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDRiskScheduleItem.ITEMTERMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToItemTerms(entity.APDRiskScheduleTerm bean) {
    addToArray(entity.APDRiskScheduleItem.ITEMTERMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskScheduleItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDRiskScheduleTermVersionList> getItemTerms() {
    return (java.util.List)getArray(entity.APDRiskScheduleItem.ITEMTERMS_PROP.get());
  }
  
  
}