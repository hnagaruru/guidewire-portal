package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingCov.eti;HOPDwellingCov.eix;HOPDwellingCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPDwellingCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPDwellingCovVersionList {
  public HOPDwellingCovVersionListImpl(entity.HOPDwellingCov base)  {
    super(base);
  }
  
  public HOPDwellingCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPDwellingCov AsOf(java.util.Date date) {
    return (entity.HOPDwellingCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellingCovCost> HOPDwellingCovCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwellingCov.HOPDWELLINGCOVCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToHOPDwellingCovCosts(entity.HOPDwellingCovCost bean) {
    addToArray(entity.HOPDwellingCov.HOPDWELLINGCOVCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellingCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPDwellingCovCostVersionList> getHOPDwellingCovCosts() {
    return (java.util.List)getArray(entity.HOPDwellingCov.HOPDWELLINGCOVCOSTS_PROP.get());
  }
  
  
}