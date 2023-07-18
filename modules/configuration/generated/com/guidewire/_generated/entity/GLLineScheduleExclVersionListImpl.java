package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLLineScheduleExcl.eti;GLLineScheduleExcl.eix;GLLineScheduleExcl.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GLLineScheduleExclVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GLLineScheduleExclVersionList {
  public GLLineScheduleExclVersionListImpl(entity.GLLineScheduleExcl base)  {
    super(base);
  }
  
  public GLLineScheduleExclVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GLLineScheduleExcl AsOf(java.util.Date date) {
    return (entity.GLLineScheduleExcl)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLLineScheduleExclItem> GLLineScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GLLineScheduleExcl.GLLINESCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToGLLineScheduledItems(entity.GLLineScheduleExclItem bean) {
    addToArray(entity.GLLineScheduleExcl.GLLINESCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLLineScheduleExcl> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GLLineScheduleExclItemVersionList> getGLLineScheduledItems() {
    return (java.util.List)getArray(entity.GLLineScheduleExcl.GLLINESCHEDULEDITEMS_PROP.get());
  }
  
  
}