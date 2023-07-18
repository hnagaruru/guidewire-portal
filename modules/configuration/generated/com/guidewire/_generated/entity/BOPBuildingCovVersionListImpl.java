package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPBuildingCov.eti;BOPBuildingCov.eix;BOPBuildingCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BOPBuildingCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BOPBuildingCovVersionList {
  public BOPBuildingCovVersionListImpl(entity.BOPBuildingCov base)  {
    super(base);
  }
  
  public BOPBuildingCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BOPBuildingCov AsOf(java.util.Date date) {
    return (entity.BOPBuildingCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPBuildingCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BOPBuildingCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.BOPBuildingCovCost bean) {
    addToArray(entity.BOPBuildingCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPBuildingCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPBuildingCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.BOPBuildingCov.COSTS_PROP.get());
  }
  
  
}