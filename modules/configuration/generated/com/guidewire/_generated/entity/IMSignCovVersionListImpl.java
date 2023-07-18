package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMSignCov.eti;IMSignCov.eix;IMSignCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class IMSignCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.IMSignCovVersionList {
  public IMSignCovVersionListImpl(entity.IMSignCov base)  {
    super(base);
  }
  
  public IMSignCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.IMSignCov AsOf(java.util.Date date) {
    return (entity.IMSignCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMSignCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.IMSignCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.IMSignCovCost bean) {
    addToArray(entity.IMSignCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMSignCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMSignCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.IMSignCov.COSTS_PROP.get());
  }
  
  
}