package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAHiredAutoBasis.eti;BAHiredAutoBasis.eix;BAHiredAutoBasis.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BAHiredAutoBasisVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BAHiredAutoBasisVersionList {
  public BAHiredAutoBasisVersionListImpl(entity.BAHiredAutoBasis base)  {
    super(base);
  }
  
  public BAHiredAutoBasisVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BAHiredAutoBasis AsOf(java.util.Date date) {
    return (entity.BAHiredAutoBasis)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAHiredAutoBasis> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}