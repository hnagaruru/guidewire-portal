package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyAddress.eti;PolicyAddress.eix;PolicyAddress.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PolicyAddressVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PolicyAddressVersionList {
  public PolicyAddressVersionListImpl(entity.PolicyAddress base)  {
    super(base);
  }
  
  public PolicyAddressVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PolicyAddress AsOf(java.util.Date date) {
    return (entity.PolicyAddress)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyAddress> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}