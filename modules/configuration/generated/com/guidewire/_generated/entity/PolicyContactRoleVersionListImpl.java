package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyContactRole.eti;PolicyContactRole.eix;PolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PolicyContactRoleVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PolicyContactRoleVersionList {
  public PolicyContactRoleVersionListImpl(entity.PolicyContactRole base)  {
    super(base);
  }
  
  public PolicyContactRoleVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PolicyContactRole AsOf(java.util.Date date) {
    return (entity.PolicyContactRole)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyContactRole> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}