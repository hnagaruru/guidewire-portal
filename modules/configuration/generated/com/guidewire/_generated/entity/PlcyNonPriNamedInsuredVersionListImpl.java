package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PlcyNonPriNamedInsured.eti;PlcyNonPriNamedInsured.eix;PlcyNonPriNamedInsured.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PlcyNonPriNamedInsuredVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PlcyNonPriNamedInsuredVersionList {
  public PlcyNonPriNamedInsuredVersionListImpl(entity.PlcyNonPriNamedInsured base)  {
    super(base);
  }
  
  public PlcyNonPriNamedInsuredVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PlcyNonPriNamedInsured AsOf(java.util.Date date) {
    return (entity.PlcyNonPriNamedInsured)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.LocationNamedInsured> LocationNamedInsuredsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PlcyNonPriNamedInsured.LOCATIONNAMEDINSUREDS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToLocationNamedInsureds(entity.LocationNamedInsured bean) {
    addToArray(entity.PlcyNonPriNamedInsured.LOCATIONNAMEDINSUREDS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PlcyNonPriNamedInsured> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.LocationNamedInsuredVersionList> getLocationNamedInsureds() {
    return (java.util.List)getArray(entity.PlcyNonPriNamedInsured.LOCATIONNAMEDINSUREDS_PROP.get());
  }
  
  
}