package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PAVehicleRateFactor.eti;PAVehicleRateFactor.eix;PAVehicleRateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PAVehicleRateFactorVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PAVehicleRateFactorVersionList {
  public PAVehicleRateFactorVersionListImpl(entity.PAVehicleRateFactor base)  {
    super(base);
  }
  
  public PAVehicleRateFactorVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PAVehicleRateFactor AsOf(java.util.Date date) {
    return (entity.PAVehicleRateFactor)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PAVehicleRateFactor> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}