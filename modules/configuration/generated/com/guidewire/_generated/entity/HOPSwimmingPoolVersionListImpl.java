package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPSwimmingPool.eti;HOPSwimmingPool.eix;HOPSwimmingPool.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPSwimmingPoolVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPSwimmingPoolVersionList {
  public HOPSwimmingPoolVersionListImpl(entity.HOPSwimmingPool base)  {
    super(base);
  }
  
  public HOPSwimmingPoolVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPSwimmingPool AsOf(java.util.Date date) {
    return (entity.HOPSwimmingPool)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPSwimmingPool> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}