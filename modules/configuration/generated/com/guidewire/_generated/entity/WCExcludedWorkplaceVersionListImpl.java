package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCExcludedWorkplace.eti;WCExcludedWorkplace.eix;WCExcludedWorkplace.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WCExcludedWorkplaceVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WCExcludedWorkplaceVersionList {
  public WCExcludedWorkplaceVersionListImpl(entity.WCExcludedWorkplace base)  {
    super(base);
  }
  
  public WCExcludedWorkplaceVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WCExcludedWorkplace AsOf(java.util.Date date) {
    return (entity.WCExcludedWorkplace)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCExcludedWorkplace> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}