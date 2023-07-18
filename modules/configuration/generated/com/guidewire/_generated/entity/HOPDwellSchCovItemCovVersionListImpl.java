package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellSchCovItemCov.eti;HOPDwellSchCovItemCov.eix;HOPDwellSchCovItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPDwellSchCovItemCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPDwellSchCovItemCovVersionList {
  public HOPDwellSchCovItemCovVersionListImpl(entity.HOPDwellSchCovItemCov base)  {
    super(base);
  }
  
  public HOPDwellSchCovItemCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPDwellSchCovItemCov AsOf(java.util.Date date) {
    return (entity.HOPDwellSchCovItemCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellSchCovItemCovCost> HOPDwellSchCovItemCovCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwellSchCovItemCov.HOPDWELLSCHCOVITEMCOVCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToHOPDwellSchCovItemCovCosts(entity.HOPDwellSchCovItemCovCost bean) {
    addToArray(entity.HOPDwellSchCovItemCov.HOPDWELLSCHCOVITEMCOVCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellSchCovItemCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPDwellSchCovItemCovCostVersionList> getHOPDwellSchCovItemCovCosts() {
    return (java.util.List)getArray(entity.HOPDwellSchCovItemCov.HOPDWELLSCHCOVITEMCOVCOSTS_PROP.get());
  }
  
  
}