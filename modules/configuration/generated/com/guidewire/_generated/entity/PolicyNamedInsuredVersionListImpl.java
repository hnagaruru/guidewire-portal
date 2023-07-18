package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyNamedInsured.eti;PolicyNamedInsured.eix;PolicyNamedInsured.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PolicyNamedInsuredVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PolicyNamedInsuredVersionList {
  public PolicyNamedInsuredVersionListImpl(entity.PolicyNamedInsured base)  {
    super(base);
  }
  
  public PolicyNamedInsuredVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PolicyNamedInsured AsOf(java.util.Date date) {
    return (entity.PolicyNamedInsured)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.LocationNamedInsured> LocationNamedInsuredsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyNamedInsured.LOCATIONNAMEDINSUREDS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToLocationNamedInsureds(entity.LocationNamedInsured bean) {
    addToArray(entity.PolicyNamedInsured.LOCATIONNAMEDINSUREDS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyNamedInsured> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.LocationNamedInsuredVersionList> getLocationNamedInsureds() {
    return (java.util.List)getArray(entity.PolicyNamedInsured.LOCATIONNAMEDINSUREDS_PROP.get());
  }
  
  
}