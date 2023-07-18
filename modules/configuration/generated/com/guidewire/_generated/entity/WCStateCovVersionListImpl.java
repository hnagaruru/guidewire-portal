package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCStateCov.eti;WCStateCov.eix;WCStateCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WCStateCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WCStateCovVersionList {
  public WCStateCovVersionListImpl(entity.WCStateCov base)  {
    super(base);
  }
  
  public WCStateCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WCStateCov AsOf(java.util.Date date) {
    return (entity.WCStateCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCStateCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}