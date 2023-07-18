package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineSchCovItemCov.eti;HOPLineSchCovItemCov.eix;HOPLineSchCovItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPLineSchCovItemCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPLineSchCovItemCovVersionList {
  public HOPLineSchCovItemCovVersionListImpl(entity.HOPLineSchCovItemCov base)  {
    super(base);
  }
  
  public HOPLineSchCovItemCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPLineSchCovItemCov AsOf(java.util.Date date) {
    return (entity.HOPLineSchCovItemCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineSchCovItemCovCost> HOPLineSchCovItemCovCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLineSchCovItemCov.HOPLINESCHCOVITEMCOVCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToHOPLineSchCovItemCovCosts(entity.HOPLineSchCovItemCovCost bean) {
    addToArray(entity.HOPLineSchCovItemCov.HOPLINESCHCOVITEMCOVCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineSchCovItemCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPLineSchCovItemCovCostVersionList> getHOPLineSchCovItemCovCosts() {
    return (java.util.List)getArray(entity.HOPLineSchCovItemCov.HOPLINESCHCOVITEMCOVCOSTS_PROP.get());
  }
  
  
}