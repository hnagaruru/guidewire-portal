package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyDriver.eti;PolicyDriver.eix;PolicyDriver.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PolicyDriverVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PolicyDriverVersionList {
  public PolicyDriverVersionListImpl(entity.PolicyDriver base)  {
    super(base);
  }
  
  public PolicyDriverVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PolicyDriver AsOf(java.util.Date date) {
    return (entity.PolicyDriver)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyDriverMVR> PolicyDriverMVRArrayAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyDriver.POLICYDRIVERMVRARRAY_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.VehicleDriver> VehicleDriversAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyDriver.VEHICLEDRIVERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToPolicyDriverMVRArray(entity.PolicyDriverMVR bean) {
    addToArray(entity.PolicyDriver.POLICYDRIVERMVRARRAY_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToVehicleDrivers(entity.VehicleDriver bean) {
    addToArray(entity.PolicyDriver.VEHICLEDRIVERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyDriver> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PolicyDriverMVRVersionList> getPolicyDriverMVRArray() {
    return (java.util.List)getArray(entity.PolicyDriver.POLICYDRIVERMVRARRAY_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.VehicleDriverVersionList> getVehicleDrivers() {
    return (java.util.List)getArray(entity.PolicyDriver.VEHICLEDRIVERS_PROP.get());
  }
  
  
}