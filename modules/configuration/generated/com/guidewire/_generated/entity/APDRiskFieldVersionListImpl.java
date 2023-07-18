package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskField.eti;APDRiskField.eix;APDRiskField.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDRiskFieldVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDRiskFieldVersionList {
  public APDRiskFieldVersionListImpl(entity.APDRiskField base)  {
    super(base);
  }
  
  public APDRiskFieldVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.APDRiskField AsOf(java.util.Date date) {
    return (entity.APDRiskField)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDRiskField> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}