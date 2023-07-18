package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartSchCondItem.eti;HOPCovPartSchCondItem.eix;HOPCovPartSchCondItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPCovPartSchCondItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPCovPartSchCondItemVersionList {
  public HOPCovPartSchCondItemVersionListImpl(entity.HOPCovPartSchCondItem base)  {
    super(base);
  }
  
  public HOPCovPartSchCondItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPCovPartSchCondItem AsOf(java.util.Date date) {
    return (entity.HOPCovPartSchCondItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCovPartSchCondItemCond> ScheduledItemClauseArrayAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPCovPartSchCondItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToScheduledItemClauseArray(entity.HOPCovPartSchCondItemCond bean) {
    addToArray(entity.HOPCovPartSchCondItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCovPartSchCondItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPCovPartSchCondItemCondVersionList> getScheduledItemClauseArray() {
    return (java.util.List)getArray(entity.HOPCovPartSchCondItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get());
  }
  
  
}