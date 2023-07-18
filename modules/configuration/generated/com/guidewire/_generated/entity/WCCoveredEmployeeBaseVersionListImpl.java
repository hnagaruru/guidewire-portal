package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCCoveredEmployeeBase.eti;WCCoveredEmployeeBase.eix;WCCoveredEmployeeBase.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WCCoveredEmployeeBaseVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WCCoveredEmployeeBaseVersionList {
  public WCCoveredEmployeeBaseVersionListImpl(entity.WCCoveredEmployeeBase base)  {
    super(base);
  }
  
  public WCCoveredEmployeeBaseVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WCCoveredEmployeeBase AsOf(java.util.Date date) {
    return (entity.WCCoveredEmployeeBase)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCCoveredEmployeeBase> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}