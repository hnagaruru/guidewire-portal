package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PAPolicyContactRole.eti;PAPolicyContactRole.eix;PAPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PAPolicyContactRoleVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PAPolicyContactRoleVersionList {
  public PAPolicyContactRoleVersionListImpl(entity.PAPolicyContactRole base)  {
    super(base);
  }
  
  public PAPolicyContactRoleVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PAPolicyContactRole AsOf(java.util.Date date) {
    return (entity.PAPolicyContactRole)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PAPolicyContactRole> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}