package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellScheduleCovItem.eti;HOPDwellScheduleCovItem.eix;HOPDwellScheduleCovItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPDwellScheduleCovItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPDwellScheduleCovItemVersionList {
  public HOPDwellScheduleCovItemVersionListImpl(entity.HOPDwellScheduleCovItem base)  {
    super(base);
  }
  
  public HOPDwellScheduleCovItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPDwellScheduleCovItem AsOf(java.util.Date date) {
    return (entity.HOPDwellScheduleCovItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellSchCovItemCov> ScheduledItemClauseArrayAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwellScheduleCovItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToScheduledItemClauseArray(entity.HOPDwellSchCovItemCov bean) {
    addToArray(entity.HOPDwellScheduleCovItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellScheduleCovItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPDwellSchCovItemCovVersionList> getScheduledItemClauseArray() {
    return (java.util.List)getArray(entity.HOPDwellScheduleCovItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get());
  }
  
  
}