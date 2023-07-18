package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineScheduleCondItem.eti;HOPLineScheduleCondItem.eix;HOPLineScheduleCondItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPLineScheduleCondItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPLineScheduleCondItemVersionList {
  public HOPLineScheduleCondItemVersionListImpl(entity.HOPLineScheduleCondItem base)  {
    super(base);
  }
  
  public HOPLineScheduleCondItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPLineScheduleCondItem AsOf(java.util.Date date) {
    return (entity.HOPLineScheduleCondItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineSchCondItemCond> ScheduledItemClauseArrayAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLineScheduleCondItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToScheduledItemClauseArray(entity.HOPLineSchCondItemCond bean) {
    addToArray(entity.HOPLineScheduleCondItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineScheduleCondItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPLineSchCondItemCondVersionList> getScheduledItemClauseArray() {
    return (java.util.List)getArray(entity.HOPLineScheduleCondItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get());
  }
  
  
}