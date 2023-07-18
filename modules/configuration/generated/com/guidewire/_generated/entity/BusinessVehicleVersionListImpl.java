package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessVehicle.eti;BusinessVehicle.eix;BusinessVehicle.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BusinessVehicleVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BusinessVehicleVersionList {
  public BusinessVehicleVersionListImpl(entity.BusinessVehicle base)  {
    super(base);
  }
  
  public BusinessVehicleVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAVhcleAddlInterest> AdditionalInterestsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessVehicle.ADDITIONALINTERESTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public entity.BusinessVehicle AsOf(java.util.Date date) {
    return (entity.BusinessVehicle)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessVehicleModifier> BusinessVehicleModifiersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessVehicle.BUSINESSVEHICLEMODIFIERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAStateCovVehicleCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessVehicle.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessVehicleCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessVehicle.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BALineCovCost> LineCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessVehicle.LINECOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToAdditionalInterests(entity.BAVhcleAddlInterest bean) {
    addToArray(entity.BusinessVehicle.ADDITIONALINTERESTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToBusinessVehicleModifiers(entity.BusinessVehicleModifier bean) {
    addToArray(entity.BusinessVehicle.BUSINESSVEHICLEMODIFIERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCosts(entity.BAStateCovVehicleCost bean) {
    addToArray(entity.BusinessVehicle.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.BusinessVehicleCov bean) {
    addToArray(entity.BusinessVehicle.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToLineCosts(entity.BALineCovCost bean) {
    addToArray(entity.BusinessVehicle.LINECOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BAVhcleAddlInterestVersionList> getAdditionalInterests() {
    return (java.util.List)getArray(entity.BusinessVehicle.ADDITIONALINTERESTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessVehicle> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BusinessVehicleModifierVersionList> getBusinessVehicleModifiers() {
    return (java.util.List)getArray(entity.BusinessVehicle.BUSINESSVEHICLEMODIFIERS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BAStateCovVehicleCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.BusinessVehicle.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BusinessVehicleCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.BusinessVehicle.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BALineCovCostVersionList> getLineCosts() {
    return (java.util.List)getArray(entity.BusinessVehicle.LINECOSTS_PROP.get());
  }
  
  
}