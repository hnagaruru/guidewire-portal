package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessVehicleModifier.eti;BusinessVehicleModifier.eix;BusinessVehicleModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BusinessVehicleModifierVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BusinessVehicleModifierVersionList {
  public BusinessVehicleModifierVersionListImpl(entity.BusinessVehicleModifier base)  {
    super(base);
  }
  
  public BusinessVehicleModifierVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BusinessVehicleModifier AsOf(java.util.Date date) {
    return (entity.BusinessVehicleModifier)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessVehicleModifier> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}