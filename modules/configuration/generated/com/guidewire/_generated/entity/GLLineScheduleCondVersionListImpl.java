package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLLineScheduleCond.eti;GLLineScheduleCond.eix;GLLineScheduleCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GLLineScheduleCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GLLineScheduleCondVersionList {
  public GLLineScheduleCondVersionListImpl(entity.GLLineScheduleCond base)  {
    super(base);
  }
  
  public GLLineScheduleCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GLLineScheduleCond AsOf(java.util.Date date) {
    return (entity.GLLineScheduleCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLLineScheduleCondItem> GLLineScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GLLineScheduleCond.GLLINESCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToGLLineScheduledItems(entity.GLLineScheduleCondItem bean) {
    addToArray(entity.GLLineScheduleCond.GLLINESCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLLineScheduleCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GLLineScheduleCondItemVersionList> getGLLineScheduledItems() {
    return (java.util.List)getArray(entity.GLLineScheduleCond.GLLINESCHEDULEDITEMS_PROP.get());
  }
  
  
}