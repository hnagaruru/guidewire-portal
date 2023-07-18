package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalVehicle.eti;PersonalVehicle.eix;PersonalVehicle.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PersonalVehicleVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PersonalVehicleVersionList {
  public PersonalVehicleVersionListImpl(entity.PersonalVehicle base)  {
    super(base);
  }
  
  public PersonalVehicleVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PAVhcleAddlInterest> AdditionalInterestsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalVehicle.ADDITIONALINTERESTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public entity.PersonalVehicle AsOf(java.util.Date date) {
    return (entity.PersonalVehicle)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PersonalAutoCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalVehicle.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PersonalVehicleCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalVehicle.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.VehicleDriver> DriversAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalVehicle.DRIVERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PAVehicleModifier> PAVehicleModifiersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalVehicle.PAVEHICLEMODIFIERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToAdditionalInterests(entity.PAVhcleAddlInterest bean) {
    addToArray(entity.PersonalVehicle.ADDITIONALINTERESTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCosts(entity.PersonalAutoCovCost bean) {
    addToArray(entity.PersonalVehicle.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.PersonalVehicleCov bean) {
    addToArray(entity.PersonalVehicle.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToDrivers(entity.VehicleDriver bean) {
    addToArray(entity.PersonalVehicle.DRIVERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToPAVehicleModifiers(entity.PAVehicleModifier bean) {
    addToArray(entity.PersonalVehicle.PAVEHICLEMODIFIERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PAVhcleAddlInterestVersionList> getAdditionalInterests() {
    return (java.util.List)getArray(entity.PersonalVehicle.ADDITIONALINTERESTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PersonalVehicle> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PersonalAutoCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.PersonalVehicle.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PersonalVehicleCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.PersonalVehicle.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.VehicleDriverVersionList> getDrivers() {
    return (java.util.List)getArray(entity.PersonalVehicle.DRIVERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PAVehicleModifierVersionList> getPAVehicleModifiers() {
    return (java.util.List)getArray(entity.PersonalVehicle.PAVEHICLEMODIFIERS_PROP.get());
  }
  
  
}