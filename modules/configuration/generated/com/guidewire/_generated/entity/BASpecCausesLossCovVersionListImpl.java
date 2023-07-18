package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BASpecCausesLossCov.eti;BASpecCausesLossCov.eix;BASpecCausesLossCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BASpecCausesLossCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BASpecCausesLossCovVersionList {
  public BASpecCausesLossCovVersionListImpl(entity.BASpecCausesLossCov base)  {
    super(base);
  }
  
  public BASpecCausesLossCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BASpecCausesLossCov AsOf(java.util.Date date) {
    return (entity.BASpecCausesLossCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessVehicleCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BASpecCausesLossCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.BusinessVehicleCovCost bean) {
    addToArray(entity.BASpecCausesLossCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BASpecCausesLossCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BusinessVehicleCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.BASpecCausesLossCov.COSTS_PROP.get());
  }
  
  
}