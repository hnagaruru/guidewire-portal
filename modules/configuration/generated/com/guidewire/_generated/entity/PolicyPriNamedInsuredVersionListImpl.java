package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyPriNamedInsured.eti;PolicyPriNamedInsured.eix;PolicyPriNamedInsured.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PolicyPriNamedInsuredVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PolicyPriNamedInsuredVersionList {
  public PolicyPriNamedInsuredVersionListImpl(entity.PolicyPriNamedInsured base)  {
    super(base);
  }
  
  public PolicyPriNamedInsuredVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PolicyPriNamedInsured AsOf(java.util.Date date) {
    return (entity.PolicyPriNamedInsured)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.LocationNamedInsured> LocationNamedInsuredsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyPriNamedInsured.LOCATIONNAMEDINSUREDS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToLocationNamedInsureds(entity.LocationNamedInsured bean) {
    addToArray(entity.PolicyPriNamedInsured.LOCATIONNAMEDINSUREDS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyPriNamedInsured> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.LocationNamedInsuredVersionList> getLocationNamedInsureds() {
    return (java.util.List)getArray(entity.PolicyPriNamedInsured.LOCATIONNAMEDINSUREDS_PROP.get());
  }
  
  
}