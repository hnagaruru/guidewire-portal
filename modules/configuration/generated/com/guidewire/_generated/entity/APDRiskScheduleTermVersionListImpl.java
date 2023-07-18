package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskScheduleTerm.eti;APDRiskScheduleTerm.eix;APDRiskScheduleTerm.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDRiskScheduleTermVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDRiskScheduleTermVersionList {
  public APDRiskScheduleTermVersionListImpl(entity.APDRiskScheduleTerm base)  {
    super(base);
  }
  
  public APDRiskScheduleTermVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.APDRiskScheduleTerm AsOf(java.util.Date date) {
    return (entity.APDRiskScheduleTerm)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskScheduleTerm> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}