package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WorkersCompCond.eti;WorkersCompCond.eix;WorkersCompCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WorkersCompCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WorkersCompCondVersionList {
  public WorkersCompCondVersionListImpl(entity.WorkersCompCond base)  {
    super(base);
  }
  
  public WorkersCompCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WorkersCompCond AsOf(java.util.Date date) {
    return (entity.WorkersCompCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WorkersCompCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}