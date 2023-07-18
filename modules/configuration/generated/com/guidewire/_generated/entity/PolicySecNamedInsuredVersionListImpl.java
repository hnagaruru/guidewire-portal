package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicySecNamedInsured.eti;PolicySecNamedInsured.eix;PolicySecNamedInsured.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PolicySecNamedInsuredVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PolicySecNamedInsuredVersionList {
  public PolicySecNamedInsuredVersionListImpl(entity.PolicySecNamedInsured base)  {
    super(base);
  }
  
  public PolicySecNamedInsuredVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PolicySecNamedInsured AsOf(java.util.Date date) {
    return (entity.PolicySecNamedInsured)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.LocationNamedInsured> LocationNamedInsuredsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicySecNamedInsured.LOCATIONNAMEDINSUREDS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToLocationNamedInsureds(entity.LocationNamedInsured bean) {
    addToArray(entity.PolicySecNamedInsured.LOCATIONNAMEDINSUREDS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicySecNamedInsured> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.LocationNamedInsuredVersionList> getLocationNamedInsureds() {
    return (java.util.List)getArray(entity.PolicySecNamedInsured.LOCATIONNAMEDINSUREDS_PROP.get());
  }
  
  
}