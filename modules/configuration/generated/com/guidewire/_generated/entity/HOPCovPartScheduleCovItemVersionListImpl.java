package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartScheduleCovItem.eti;HOPCovPartScheduleCovItem.eix;HOPCovPartScheduleCovItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPCovPartScheduleCovItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPCovPartScheduleCovItemVersionList {
  public HOPCovPartScheduleCovItemVersionListImpl(entity.HOPCovPartScheduleCovItem base)  {
    super(base);
  }
  
  public HOPCovPartScheduleCovItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPCovPartScheduleCovItem AsOf(java.util.Date date) {
    return (entity.HOPCovPartScheduleCovItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCovPartSchCovItemCov> ScheduledItemClauseArrayAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPCovPartScheduleCovItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToScheduledItemClauseArray(entity.HOPCovPartSchCovItemCov bean) {
    addToArray(entity.HOPCovPartScheduleCovItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCovPartScheduleCovItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPCovPartSchCovItemCovVersionList> getScheduledItemClauseArray() {
    return (java.util.List)getArray(entity.HOPCovPartScheduleCovItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get());
  }
  
  
}