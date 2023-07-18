package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMPolicyContactRole.eti;IMPolicyContactRole.eix;IMPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class IMPolicyContactRoleVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.IMPolicyContactRoleVersionList {
  public IMPolicyContactRoleVersionListImpl(entity.IMPolicyContactRole base)  {
    super(base);
  }
  
  public IMPolicyContactRoleVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.IMPolicyContactRole AsOf(java.util.Date date) {
    return (entity.IMPolicyContactRole)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMPolicyContactRole> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}