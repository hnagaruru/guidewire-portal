package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "VehicleDriver.eti;VehicleDriver.eix;VehicleDriver.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class VehicleDriverVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.VehicleDriverVersionList {
  public VehicleDriverVersionListImpl(entity.VehicleDriver base)  {
    super(base);
  }
  
  public VehicleDriverVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.VehicleDriver AsOf(java.util.Date date) {
    return (entity.VehicleDriver)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.VehicleDriver> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}