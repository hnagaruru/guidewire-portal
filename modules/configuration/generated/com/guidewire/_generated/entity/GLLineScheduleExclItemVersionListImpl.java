package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLLineScheduleExclItem.eti;GLLineScheduleExclItem.eix;GLLineScheduleExclItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GLLineScheduleExclItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GLLineScheduleExclItemVersionList {
  public GLLineScheduleExclItemVersionListImpl(entity.GLLineScheduleExclItem base)  {
    super(base);
  }
  
  public GLLineScheduleExclItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GLLineScheduleExclItem AsOf(java.util.Date date) {
    return (entity.GLLineScheduleExclItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLLineScheduleExclItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}