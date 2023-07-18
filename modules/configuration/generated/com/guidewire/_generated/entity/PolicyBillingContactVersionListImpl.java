package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyBillingContact.eti;PolicyBillingContact.eix;PolicyBillingContact.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PolicyBillingContactVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PolicyBillingContactVersionList {
  public PolicyBillingContactVersionListImpl(entity.PolicyBillingContact base)  {
    super(base);
  }
  
  public PolicyBillingContactVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PolicyBillingContact AsOf(java.util.Date date) {
    return (entity.PolicyBillingContact)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyBillingContact> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}