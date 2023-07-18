package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineScheduleCovItem.eti;HOPLineScheduleCovItem.eix;HOPLineScheduleCovItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPLineScheduleCovItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPLineScheduleCovItemVersionList {
  public HOPLineScheduleCovItemVersionListImpl(entity.HOPLineScheduleCovItem base)  {
    super(base);
  }
  
  public HOPLineScheduleCovItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPLineScheduleCovItem AsOf(java.util.Date date) {
    return (entity.HOPLineScheduleCovItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineSchCovItemCov> ScheduledItemClauseArrayAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLineScheduleCovItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToScheduledItemClauseArray(entity.HOPLineSchCovItemCov bean) {
    addToArray(entity.HOPLineScheduleCovItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineScheduleCovItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPLineSchCovItemCovVersionList> getScheduledItemClauseArray() {
    return (java.util.List)getArray(entity.HOPLineScheduleCovItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get());
  }
  
  
}