package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartSchExclItem.eti;HOPCovPartSchExclItem.eix;HOPCovPartSchExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPCovPartSchExclItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPCovPartSchExclItemVersionList {
  public HOPCovPartSchExclItemVersionListImpl(entity.HOPCovPartSchExclItem base)  {
    super(base);
  }
  
  public HOPCovPartSchExclItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPCovPartSchExclItem AsOf(java.util.Date date) {
    return (entity.HOPCovPartSchExclItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCovPartSchExclItemExcl> ScheduledItemClauseArrayAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPCovPartSchExclItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToScheduledItemClauseArray(entity.HOPCovPartSchExclItemExcl bean) {
    addToArray(entity.HOPCovPartSchExclItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCovPartSchExclItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPCovPartSchExclItemExclVersionList> getScheduledItemClauseArray() {
    return (java.util.List)getArray(entity.HOPCovPartSchExclItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get());
  }
  
  
}