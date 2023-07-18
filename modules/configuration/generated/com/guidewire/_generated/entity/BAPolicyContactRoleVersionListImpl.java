package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAPolicyContactRole.eti;BAPolicyContactRole.eix;BAPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BAPolicyContactRoleVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BAPolicyContactRoleVersionList {
  public BAPolicyContactRoleVersionListImpl(entity.BAPolicyContactRole base)  {
    super(base);
  }
  
  public BAPolicyContactRoleVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BAPolicyContactRole AsOf(java.util.Date date) {
    return (entity.BAPolicyContactRole)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAPolicyContactRole> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}