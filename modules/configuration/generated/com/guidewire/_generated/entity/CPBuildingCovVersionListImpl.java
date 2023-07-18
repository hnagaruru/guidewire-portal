package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPBuildingCov.eti;CPBuildingCov.eix;CPBuildingCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class CPBuildingCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.CPBuildingCovVersionList {
  public CPBuildingCovVersionListImpl(entity.CPBuildingCov base)  {
    super(base);
  }
  
  public CPBuildingCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.CPBuildingCov AsOf(java.util.Date date) {
    return (entity.CPBuildingCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPBuildingCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CPBuildingCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.CPBuildingCovCost bean) {
    addToArray(entity.CPBuildingCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPBuildingCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CPBuildingCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.CPBuildingCov.COSTS_PROP.get());
  }
  
  
}