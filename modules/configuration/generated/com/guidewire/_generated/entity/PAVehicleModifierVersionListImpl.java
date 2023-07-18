package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PAVehicleModifier.eti;PAVehicleModifier.eix;PAVehicleModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PAVehicleModifierVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PAVehicleModifierVersionList {
  public PAVehicleModifierVersionListImpl(entity.PAVehicleModifier base)  {
    super(base);
  }
  
  public PAVehicleModifierVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PAVehicleModifier AsOf(java.util.Date date) {
    return (entity.PAVehicleModifier)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PAVehicleRateFactor> PAVehicleRateFactorsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PAVehicleModifier.PAVEHICLERATEFACTORS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToPAVehicleRateFactors(entity.PAVehicleRateFactor bean) {
    addToArray(entity.PAVehicleModifier.PAVEHICLERATEFACTORS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PAVehicleModifier> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PAVehicleRateFactorVersionList> getPAVehicleRateFactors() {
    return (java.util.List)getArray(entity.PAVehicleModifier.PAVEHICLERATEFACTORS_PROP.get());
  }
  
  
}