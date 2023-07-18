package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyOwnerOfficer.eti;PolicyOwnerOfficer.eix;PolicyOwnerOfficer.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PolicyOwnerOfficerVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PolicyOwnerOfficerVersionList {
  public PolicyOwnerOfficerVersionListImpl(entity.PolicyOwnerOfficer base)  {
    super(base);
  }
  
  public PolicyOwnerOfficerVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PolicyOwnerOfficer AsOf(java.util.Date date) {
    return (entity.PolicyOwnerOfficer)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyOwnerOfficer> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}