package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineScheduleExclItem.eti;HOPLineScheduleExclItem.eix;HOPLineScheduleExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPLineScheduleExclItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPLineScheduleExclItemVersionList {
  public HOPLineScheduleExclItemVersionListImpl(entity.HOPLineScheduleExclItem base)  {
    super(base);
  }
  
  public HOPLineScheduleExclItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPLineScheduleExclItem AsOf(java.util.Date date) {
    return (entity.HOPLineScheduleExclItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineSchExclItemExcl> ScheduledItemClauseArrayAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLineScheduleExclItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToScheduledItemClauseArray(entity.HOPLineSchExclItemExcl bean) {
    addToArray(entity.HOPLineScheduleExclItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineScheduleExclItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPLineSchExclItemExclVersionList> getScheduledItemClauseArray() {
    return (java.util.List)getArray(entity.HOPLineScheduleExclItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get());
  }
  
  
}