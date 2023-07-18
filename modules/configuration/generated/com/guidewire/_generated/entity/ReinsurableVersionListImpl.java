package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Reinsurable.eti;Reinsurable.eix;Reinsurable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class ReinsurableVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.ReinsurableVersionList {
  public ReinsurableVersionListImpl(entity.Reinsurable base)  {
    super(base);
  }
  
  public ReinsurableVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.Reinsurable AsOf(java.util.Date date) {
    return (entity.Reinsurable)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.Reinsurable> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}