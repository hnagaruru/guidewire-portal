package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellScheduleExclItem.eti;HOPDwellScheduleExclItem.eix;HOPDwellScheduleExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPDwellScheduleExclItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPDwellScheduleExclItemVersionList {
  public HOPDwellScheduleExclItemVersionListImpl(entity.HOPDwellScheduleExclItem base)  {
    super(base);
  }
  
  public HOPDwellScheduleExclItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPDwellScheduleExclItem AsOf(java.util.Date date) {
    return (entity.HOPDwellScheduleExclItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellSchExclItemExcl> ScheduledItemClauseArrayAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwellScheduleExclItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToScheduledItemClauseArray(entity.HOPDwellSchExclItemExcl bean) {
    addToArray(entity.HOPDwellScheduleExclItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellScheduleExclItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPDwellSchExclItemExclVersionList> getScheduledItemClauseArray() {
    return (java.util.List)getArray(entity.HOPDwellScheduleExclItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get());
  }
  
  
}