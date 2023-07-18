package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessVehicleCov.eti;BusinessVehicleCov.eix;BusinessVehicleCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BusinessVehicleCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BusinessVehicleCovVersionList {
  public BusinessVehicleCovVersionListImpl(entity.BusinessVehicleCov base)  {
    super(base);
  }
  
  public BusinessVehicleCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BusinessVehicleCov AsOf(java.util.Date date) {
    return (entity.BusinessVehicleCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessVehicleCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessVehicleCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.BusinessVehicleCovCost bean) {
    addToArray(entity.BusinessVehicleCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessVehicleCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BusinessVehicleCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.BusinessVehicleCov.COSTS_PROP.get());
  }
  
  
}