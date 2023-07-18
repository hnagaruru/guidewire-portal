package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineScheduleCov.eti;HOPLineScheduleCov.eix;HOPLineScheduleCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPLineScheduleCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPLineScheduleCovVersionList {
  public HOPLineScheduleCovVersionListImpl(entity.HOPLineScheduleCov base)  {
    super(base);
  }
  
  public HOPLineScheduleCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPLineScheduleCov AsOf(java.util.Date date) {
    return (entity.HOPLineScheduleCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineCovCost> HOPLineCovCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLineScheduleCov.HOPLINECOVCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineScheduleCovItem> HOPLineScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLineScheduleCov.HOPLINESCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToHOPLineCovCosts(entity.HOPLineCovCost bean) {
    addToArray(entity.HOPLineScheduleCov.HOPLINECOVCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToHOPLineScheduledItems(entity.HOPLineScheduleCovItem bean) {
    addToArray(entity.HOPLineScheduleCov.HOPLINESCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineScheduleCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPLineCovCostVersionList> getHOPLineCovCosts() {
    return (java.util.List)getArray(entity.HOPLineScheduleCov.HOPLINECOVCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPLineScheduleCovItemVersionList> getHOPLineScheduledItems() {
    return (java.util.List)getArray(entity.HOPLineScheduleCov.HOPLINESCHEDULEDITEMS_PROP.get());
  }
  
  
}