package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPLocationCov.eti;BOPLocationCov.eix;BOPLocationCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BOPLocationCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BOPLocationCovVersionList {
  public BOPLocationCovVersionListImpl(entity.BOPLocationCov base)  {
    super(base);
  }
  
  public BOPLocationCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BOPLocationCov AsOf(java.util.Date date) {
    return (entity.BOPLocationCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPLocationCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BOPLocationCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.BOPLocationCovCost bean) {
    addToArray(entity.BOPLocationCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPLocationCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPLocationCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.BOPLocationCov.COSTS_PROP.get());
  }
  
  
}