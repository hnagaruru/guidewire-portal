package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartSchCovItemCov.eti;HOPCovPartSchCovItemCov.eix;HOPCovPartSchCovItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPCovPartSchCovItemCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPCovPartSchCovItemCovVersionList {
  public HOPCovPartSchCovItemCovVersionListImpl(entity.HOPCovPartSchCovItemCov base)  {
    super(base);
  }
  
  public HOPCovPartSchCovItemCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPCovPartSchCovItemCov AsOf(java.util.Date date) {
    return (entity.HOPCovPartSchCovItemCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCovPartSchCovItemCovCost> HOPCovPartSchCovItemCovCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPCovPartSchCovItemCov.HOPCOVPARTSCHCOVITEMCOVCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToHOPCovPartSchCovItemCovCosts(entity.HOPCovPartSchCovItemCovCost bean) {
    addToArray(entity.HOPCovPartSchCovItemCov.HOPCOVPARTSCHCOVITEMCOVCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCovPartSchCovItemCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPCovPartSchCovItemCovCostVersionList> getHOPCovPartSchCovItemCovCosts() {
    return (java.util.List)getArray(entity.HOPCovPartSchCovItemCov.HOPCOVPARTSCHCOVITEMCOVCOSTS_PROP.get());
  }
  
  
}