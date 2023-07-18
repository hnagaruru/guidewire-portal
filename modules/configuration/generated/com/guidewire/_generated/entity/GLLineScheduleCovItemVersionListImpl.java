package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLLineScheduleCovItem.eti;GLLineScheduleCovItem.eix;GLLineScheduleCovItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GLLineScheduleCovItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GLLineScheduleCovItemVersionList {
  public GLLineScheduleCovItemVersionListImpl(entity.GLLineScheduleCovItem base)  {
    super(base);
  }
  
  public GLLineScheduleCovItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GLLineScheduleCovItem AsOf(java.util.Date date) {
    return (entity.GLLineScheduleCovItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLLineSchCovItemCov> ScheduledItemClauseArrayAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GLLineScheduleCovItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToScheduledItemClauseArray(entity.GLLineSchCovItemCov bean) {
    addToArray(entity.GLLineScheduleCovItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLLineScheduleCovItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GLLineSchCovItemCovVersionList> getScheduledItemClauseArray() {
    return (java.util.List)getArray(entity.GLLineScheduleCovItem.SCHEDULEDITEMCLAUSEARRAY_PROP.get());
  }
  
  
}