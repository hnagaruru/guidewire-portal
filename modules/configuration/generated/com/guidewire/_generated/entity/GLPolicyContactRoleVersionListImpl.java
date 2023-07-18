package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLPolicyContactRole.eti;GLPolicyContactRole.eix;GLPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GLPolicyContactRoleVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GLPolicyContactRoleVersionList {
  public GLPolicyContactRoleVersionListImpl(entity.GLPolicyContactRole base)  {
    super(base);
  }
  
  public GLPolicyContactRoleVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GLPolicyContactRole AsOf(java.util.Date date) {
    return (entity.GLPolicyContactRole)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLPolicyContactRole> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}