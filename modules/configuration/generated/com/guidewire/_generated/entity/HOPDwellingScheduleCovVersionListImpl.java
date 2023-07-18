package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingScheduleCov.eti;HOPDwellingScheduleCov.eix;HOPDwellingScheduleCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPDwellingScheduleCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPDwellingScheduleCovVersionList {
  public HOPDwellingScheduleCovVersionListImpl(entity.HOPDwellingScheduleCov base)  {
    super(base);
  }
  
  public HOPDwellingScheduleCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPDwellingScheduleCov AsOf(java.util.Date date) {
    return (entity.HOPDwellingScheduleCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellScheduleCovItem> HOPDwellScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwellingScheduleCov.HOPDWELLSCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellingCovCost> HOPDwellingCovCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwellingScheduleCov.HOPDWELLINGCOVCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToHOPDwellScheduledItems(entity.HOPDwellScheduleCovItem bean) {
    addToArray(entity.HOPDwellingScheduleCov.HOPDWELLSCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToHOPDwellingCovCosts(entity.HOPDwellingCovCost bean) {
    addToArray(entity.HOPDwellingScheduleCov.HOPDWELLINGCOVCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellingScheduleCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPDwellScheduleCovItemVersionList> getHOPDwellScheduledItems() {
    return (java.util.List)getArray(entity.HOPDwellingScheduleCov.HOPDWELLSCHEDULEDITEMS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPDwellingCovCostVersionList> getHOPDwellingCovCosts() {
    return (java.util.List)getArray(entity.HOPDwellingScheduleCov.HOPDWELLINGCOVCOSTS_PROP.get());
  }
  
  
}