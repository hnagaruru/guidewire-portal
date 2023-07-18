package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCFedCoveredEmployee.eti;WCFedCoveredEmployee.eix;WCFedCoveredEmployee.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WCFedCoveredEmployeeVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WCFedCoveredEmployeeVersionList {
  public WCFedCoveredEmployeeVersionListImpl(entity.WCFedCoveredEmployee base)  {
    super(base);
  }
  
  public WCFedCoveredEmployeeVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WCFedCoveredEmployee AsOf(java.util.Date date) {
    return (entity.WCFedCoveredEmployee)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCFedCoveredEmployee> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}