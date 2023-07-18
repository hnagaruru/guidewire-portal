package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineSchCondItemCond.eti;HOPLineSchCondItemCond.eix;HOPLineSchCondItemCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPLineSchCondItemCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPLineSchCondItemCondVersionList {
  public HOPLineSchCondItemCondVersionListImpl(entity.HOPLineSchCondItemCond base)  {
    super(base);
  }
  
  public HOPLineSchCondItemCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPLineSchCondItemCond AsOf(java.util.Date date) {
    return (entity.HOPLineSchCondItemCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineSchCondItemCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}