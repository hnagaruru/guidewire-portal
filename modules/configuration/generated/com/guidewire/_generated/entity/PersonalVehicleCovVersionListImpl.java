package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalVehicleCov.eti;PersonalVehicleCov.eix;PersonalVehicleCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PersonalVehicleCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PersonalVehicleCovVersionList {
  public PersonalVehicleCovVersionListImpl(entity.PersonalVehicleCov base)  {
    super(base);
  }
  
  public PersonalVehicleCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PersonalVehicleCov AsOf(java.util.Date date) {
    return (entity.PersonalVehicleCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PersonalVehicleCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalVehicleCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.PersonalVehicleCovCost bean) {
    addToArray(entity.PersonalVehicleCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PersonalVehicleCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PersonalVehicleCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.PersonalVehicleCov.COSTS_PROP.get());
  }
  
  
}