package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellScheduleCondItem.eti;HOPDwellScheduleCondItem.eix;HOPDwellScheduleCondItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPDwellScheduleCondItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPDwellScheduleCondItemVersionList {
  public HOPDwellScheduleCondItemVersionListImpl(entity.HOPDwellScheduleCondItem base)  {
    super(base);
  }
  
  public HOPDwellScheduleCondItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPDwellScheduleCondItem AsOf(java.util.Date date) {
    return (entity.HOPDwellScheduleCondItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellSchCondItemCond> ScheduledItemClauseArrayAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwellScheduleCondItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToScheduledItemClauseArray(entity.HOPDwellSchCondItemCond bean) {
    addToArray(entity.HOPDwellScheduleCondItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellScheduleCondItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPDwellSchCondItemCondVersionList> getScheduledItemClauseArray() {
    return (java.util.List)getArray(entity.HOPDwellScheduleCondItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get());
  }
  
  
}