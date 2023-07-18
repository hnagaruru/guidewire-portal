package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLLineScheduleCondItem.eti;GLLineScheduleCondItem.eix;GLLineScheduleCondItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GLLineScheduleCondItemVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GLLineScheduleCondItemVersionList {
  public GLLineScheduleCondItemVersionListImpl(entity.GLLineScheduleCondItem base)  {
    super(base);
  }
  
  public GLLineScheduleCondItemVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GLLineScheduleCondItem AsOf(java.util.Date date) {
    return (entity.GLLineScheduleCondItem)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLLineScheduleCondItem> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}