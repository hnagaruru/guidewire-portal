package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAStateCov.eti;BAStateCov.eix;BAStateCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BAStateCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BAStateCovVersionList {
  public BAStateCovVersionListImpl(entity.BAStateCov base)  {
    super(base);
  }
  
  public BAStateCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BAStateCov AsOf(java.util.Date date) {
    return (entity.BAStateCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAStateCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BAStateCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.BAStateCovCost bean) {
    addToArray(entity.BAStateCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAStateCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BAStateCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.BAStateCov.COSTS_PROP.get());
  }
  
  
}